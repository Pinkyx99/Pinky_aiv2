


import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogoIcon } from '../components/ui/Icons';
import { motion } from 'framer-motion';
import { supabase } from '../services/supabase';

const OnlineCounter = () => {
    const [count, setCount] = useState('...');
    
    useEffect(() => {
        async function fetchOnlineUsersCount() {
            try {
                const fiveMinAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
                const { count, error } = await supabase
                  .from('online_users')
                  .select('*', { count: 'exact', head: true })
                  .gt('last_active', fiveMinAgo);
                
                if (error) throw error;
                
                if (count !== null) {
                    setCount(count.toString());
                }
            } catch (error) {
                 console.error('Error fetching online users count:', error);
            }
        }
        
        fetchOnlineUsersCount();
        const interval = setInterval(fetchOnlineUsersCount, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mt-6 font-bold text-lg text-purple-300 animate-pulse">
            🟣 Online Users: <span>{count}</span>
        </div>
    );
};


export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { loginOrSignUp } = useAuth();
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting || !username || !password) {
            if (!isSubmitting) setError('Please enter both username and password.');
            return;
        }
        setError('');
        setIsSubmitting(true);
        try {
            await loginOrSignUp(username, password);
        } catch (err: any) {
            console.error("Login/Signup failed:", err);
            let message = err.message || 'An unknown error occurred.';
            if (err.message?.includes('should be at least 6 characters')) {
                message = 'Password should be at least 6 characters.';
            } else if (err.message?.includes('Invalid login credentials')) {
                message = 'Incorrect username or password.';
            }
            setError(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen w-screen overflow-hidden p-4">
            <motion.div 
                initial={{ opacity: 0, transform: 'translateY(-20px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-black/20 backdrop-blur-md p-8 sm:p-10 rounded-2xl w-full max-w-sm shadow-2xl shadow-purple-900/50 text-center border border-white/10"
            >
                <div className="flex justify-center items-center gap-3 mb-6">
                    <LogoIcon className="w-12 h-12"/>
                    <h1 className="font-bold text-2xl sm:text-3xl tracking-wide text-white" style={{ textShadow: '0 0 10px #c084fc' }}>
                        Pinky AI
                    </h1>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        autoComplete="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-5 py-3 border-none rounded-lg bg-white/5 text-white placeholder:text-gray-400 text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner shadow-black/30"
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-5 py-3 border-none rounded-lg bg-white/5 text-white placeholder:text-gray-400 text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner shadow-black/30"
                        required
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#ff5cf4] border-none py-3 w-full rounded-lg text-base font-bold text-white cursor-pointer shadow-lg shadow-[#ff5cf4]/30 transition-all duration-300 hover:bg-[#db3de2] hover:shadow-xl hover:shadow-[#ff5cf4]/50 disabled:bg-gray-600 disabled:shadow-none disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Processing...' : 'Login / Sign Up'}
                    </button>
                </form>
                
                {error && (
                   <div className="mt-4 text-sm text-red-200 text-left bg-red-900/40 p-4 rounded-lg border border-red-500/50">
                       <p className="font-semibold mb-2 text-red-100">Login/Signup failed</p>
                       <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">{error}</pre>
                   </div>
                )}
                
                <OnlineCounter />
            </motion.div>
        </div>
    );
};