
import React, { useState, useEffect, useCallback } from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';
import { supabase } from '../services/supabase';
import type { Review } from '../types';
import { Spinner } from '../components/ui/Common';
import { UsersIcon } from '../components/ui/Icons';
import { useAuth } from '../contexts/AuthContext';

// --- Online Users Component ---
const OnlineUsers = () => {
    const [users, setUsers] = useState<{username: string}[]>([]);
    const [userCount, setUserCount] = useState<number>(0);
    const [error, setError] = useState('');

    const fetchOnlineUsers = useCallback(async () => {
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
        
        const { data, error, count } = await supabase
            .from('online_users')
            .select('username', { count: 'exact' })
            .gt('last_active', fiveMinutesAgo);

        if (error) {
            console.error('Error fetching online users:', error);
            const isRlsError = error.code === '42501' || (error.message && (error.message.includes('security policy') || error.message.includes('permission denied')));
             if (isRlsError) {
                const rlsFixInstruction = `
DATABASE PERMISSION ERROR
-------------------------
Your app cannot view online users due to database security rules. This feature now requires a 'last_active' timestamp column.

To fix this, please run the following commands in your Supabase project's SQL Editor:

1. Drop the old table if it exists:
DROP TABLE IF EXISTS public.online_users;

2. Create the new table:
CREATE TABLE public.online_users (
  username TEXT NOT NULL PRIMARY KEY,
  last_active TIMESTAMPTZ NOT NULL
);

3. Enable Row Level Security:
ALTER TABLE public.online_users ENABLE ROW LEVEL SECURITY;

4. Allow public read and write access:
CREATE POLICY "Allow public access" ON public.online_users
FOR ALL USING (true) WITH CHECK (true);
`;
                setError(rlsFixInstruction);
            } else {
                setError(`Failed to load users: ${error.message}`);
            }
        } else {
            setUsers(data || []);
            setUserCount(count || 0);
            setError('');
        }
    }, []);

    useEffect(() => {
        fetchOnlineUsers();
        const intervalId = setInterval(fetchOnlineUsers, 10000); // Poll every 10 seconds

        return () => {
            clearInterval(intervalId);
        };
    }, [fetchOnlineUsers]);

    if (error) {
        return (
            <div className="mb-8 text-sm text-red-200 text-left bg-red-900/40 p-4 rounded-lg border border-red-500/50">
                <p className="font-semibold mb-2 text-red-100">Action Required: Online Users Feature</p>
                <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">{error}</pre>
            </div>
        );
    }
    
    return (
        <div className="mb-8 bg-[#3a0057]/50 border border-fuchsia-600/30 rounded-2xl p-6 shadow-lg shadow-fuchsia-500/10">
            <h2 className="flex items-center text-xl font-bold text-white mb-3">
                <UsersIcon className="w-6 h-6 mr-3 text-fuchsia-400"/>
                Who's Online ({userCount})
            </h2>
            {users.length > 0 ? (
                <p className="text-gray-300 leading-relaxed break-all">
                    {users.map(u => u.username).join(', ')}
                </p>
            ) : (
                <p className="text-gray-400">Looks like it's just you here right now.</p>
            )}
        </div>
    );
};


// --- Main Dashboard Page ---
const DashboardPage = () => {
    const { username: loggedInUsername } = useAuth();
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [newReviewMessage, setNewReviewMessage] = useState('');
    const [newReviewUsername, setNewReviewUsername] = useState(loggedInUsername || '');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    
    useEffect(() => {
        if (loggedInUsername) {
            setNewReviewUsername(loggedInUsername);
        }
    }, [loggedInUsername]);

    const fetchReviews = useCallback(async () => {
        const { data, error } = await supabase
            .from('reviews')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching reviews:', error);
            if(reviews.length === 0) { // Only show fetch error on initial load
                 setError(`Could not fetch reviews: ${error.message}`);
            }
        } else {
            setReviews(data as Review[]);
        }
        setLoading(false);
    }, [reviews.length]);

    useEffect(() => {
        fetchReviews();
        const intervalId = setInterval(fetchReviews, 5000);
        return () => clearInterval(intervalId);
    }, [fetchReviews]);
    
    const handleReviewSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const username = newReviewUsername.trim();
        const message = newReviewMessage.trim();

        if(!message || !username || isSubmitting) return;

        setIsSubmitting(true);
        setError('');
        
        const { error } = await supabase
            .from('reviews')
            .insert([{ username, message }]);
        
        if (error) {
            console.error('Supabase insert error:', error);
            const isRlsError = error.code === '42501' || (error.message && (error.message.includes('security policy') || error.message.includes('permission denied')));

            if (isRlsError) {
                const rlsFixInstruction = `
DATABASE PERMISSION ERROR
-------------------------
Your app cannot save new reviews due to a database security rule.

To fix this, please run the following command in your Supabase project's SQL Editor:

CREATE POLICY "Allow public anonymous insert" ON public.reviews FOR INSERT WITH CHECK (true);
`;
                setError(rlsFixInstruction);
            } else {
                setError(`An error occurred while submitting your review.\n\nDetails: ${error.message}`);
            }
        } else {
            setNewReviewMessage('');
            if (!loggedInUsername) {
                setNewReviewUsername('');
            }
            await fetchReviews();
        }
        
        setIsSubmitting(false);
    };

    const formatTimestamp = (timestamp: string) => {
        try {
            return new Date(timestamp).toLocaleString();
        } catch (e) {
            return 'Invalid date';
        }
    }

    return (
        <PageWrapper
            title="🩷 Pinky AI Dashboard"
            description="See who's online and what people are saying about the platform."
        >
            <div className="max-w-2xl mx-auto mt-8">
                <OnlineUsers />

                <h2 className="text-2xl font-bold text-white mb-4 text-center">Leave a Review</h2>
                <div className="bg-[#3a0057]/50 border border-fuchsia-600/30 rounded-2xl p-6 shadow-lg shadow-fuchsia-500/10">
                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                        <div>
                            <input 
                                id="username" 
                                type="text" 
                                value={newReviewUsername} 
                                onChange={(e) => setNewReviewUsername(e.target.value)}
                                className="w-full p-3 rounded-lg border-none text-base bg-[#1f0036]/70 text-white placeholder-gray-400 focus:ring-2 focus:ring-fuchsia-500 transition-all read-only:bg-gray-700/50 read-only:cursor-not-allowed"
                                placeholder="Your name"
                                required 
                                readOnly={!!loggedInUsername}
                            />
                        </div>
                        <div>
                            <textarea 
                                id="message"
                                value={newReviewMessage}
                                onChange={(e) => setNewReviewMessage(e.target.value)}
                                rows={4}
                                className="w-full p-3 rounded-lg border-none text-base bg-[#1f0036]/70 text-white placeholder-gray-400 focus:ring-2 focus:ring-fuchsia-500 transition-all"
                                placeholder="Write your review..."
                                required 
                            />
                        </div>
                        <button 
                            type="submit"
                            disabled={isSubmitting || !newReviewUsername || !newReviewMessage}
                            className="w-full p-3 rounded-lg border-none text-base bg-[#ff00d4] text-white font-bold cursor-pointer hover:bg-fuchsia-500 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isSubmitting ? <Spinner /> : 'Submit Review'}
                        </button>
                    </form>
                    {error && (
                        <div className="mt-4 text-sm text-red-200 text-left bg-red-900/40 p-4 rounded-lg border border-red-500/50">
                            <p className="font-semibold mb-2 text-red-100">Action Required</p>
                            <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">{error}</pre>
                        </div>
                    )}
                </div>

                <hr className="my-8 border-t border-fuchsia-800/20" />

                 <h2 className="text-2xl font-bold text-white mb-4 text-center">Latest Reviews</h2>
                <div>
                    {loading && reviews.length === 0 ? (
                        <div className="flex justify-center p-8"><Spinner /></div>
                    ) : (
                        <div className="space-y-4">
                            {reviews.map((review, index) => {
                                 const reviewMotionProps = {
                                    key: review.id,
                                    initial: { opacity: 0, y: 20 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: { delay: index * 0.05, duration: 0.3 }
                                };
                                return (
                                <motion.div 
                                    {...reviewMotionProps}
                                    className="bg-[#3a0057] rounded-xl p-4 shadow-lg shadow-fuchsia-500/20"
                                >
                                    <div className="flex justify-between items-baseline">
                                        <p className="font-bold text-white text-lg break-all">{review.username}</p>
                                        <p className="text-xs text-gray-400 flex-shrink-0 ml-2">{formatTimestamp(review.created_at)}</p>
                                    </div>
                                    <p className="text-gray-200 mt-2 break-words">{review.message}</p>
                                </motion.div>
                            )})}
                        </div>
                    )}
                </div>
                 {reviews.length === 0 && !loading && (
                    <div className="text-center py-12 text-gray-500">
                        <p className="text-lg">No reviews yet.</p>
                        <p>Be the first to leave your feedback!</p>
                    </div>
                )}
            </div>
        </PageWrapper>
    );
};

export default DashboardPage;
