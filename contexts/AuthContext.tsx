



import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../services/supabase';

interface AuthContextType {
    username: string | null;
    userId: string | null;
    loginOrSignUp: (username: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [username, setUsername] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
            const user = session?.user ?? null;
            const currentUsername = user?.email ? user.email.split('@')[0] : null;

            setUsername(currentUsername);
            setUserId(user?.id ?? null);

            if (event === 'SIGNED_IN' && currentUsername) {
                await supabase.from('online_users').upsert(
                    { username: currentUsername, last_active: new Date().toISOString() },
                    { onConflict: 'username' }
                ).catch(err => console.error("Presence update on auth change failed:", err));
            }
            
            setIsLoading(false);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    useEffect(() => {
        let presenceInterval: number | undefined;
        if (username) {
            const updatePresence = async () => {
                const { error } = await supabase.from('online_users')
                    .update({ last_active: new Date().toISOString() })
                    .eq('username', username);
                if (error) {
                    console.error("Periodic presence update failed:", error.message);
                }
            };
            presenceInterval = window.setInterval(updatePresence, 15000);
        }
        return () => {
            if (presenceInterval) {
                window.clearInterval(presenceInterval);
            }
        };
    }, [username]);

    const loginOrSignUp = async (username: string, password: string) => {
        const email = `${username.toLowerCase().trim()}@pinky.ai`;
        try {
            const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
            
            if (signInError) {
                if (signInError.message.includes('Invalid login credentials')) {
                    const { error: signUpError } = await supabase.auth.signUp({ email, password });
                    if (signUpError) {
                        throw signUpError;
                    }
                    // After a successful signup, the user must log in again, which might trigger the confirmation error.
                    // The catch block below will handle the user-friendly message for it.
                    throw new Error("Account created! Please log in to continue.");
                } else {
                    throw signInError;
                }
            }
        } catch (error: any) {
             if (error.message.includes('Email not confirmed')) {
                 const emailConfirmationInstruction = `
ACCOUNT NEEDS CONFIRMATION
--------------------------
Your account exists, but requires email confirmation before you can log in.

For a seamless experience, you should disable this requirement in your Supabase project.

How to fix:
1. Go to your Supabase Dashboard.
2. Navigate to: Authentication -> Providers
3. Click on the "Email" provider.
4. Turn OFF the "Confirm email" toggle.
5. Click Save.

After this one-time change, you can log in immediately.
`;
                throw new Error(emailConfirmationInstruction);
            }
            throw error;
        }
    };

    const signOut = async () => {
        if (username) {
            await supabase.from('online_users').delete().eq('username', username);
        }
        await supabase.auth.signOut();
    };

    return (
        <AuthContext.Provider value={{ username, userId, loginOrSignUp, signOut, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};