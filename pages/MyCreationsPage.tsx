
import React, { useState, useEffect, useCallback } from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../services/supabase';
import type { Creation } from '../types';
import { Spinner } from '../components/ui/Common';
import { motion, AnimatePresence } from 'framer-motion';
import { PhotoIcon, DownloadIcon, ArrowPathIcon } from '../components/ui/Icons';
import { Link } from 'react-router-dom';

const CreationCard: React.FC<{ creation: Creation }> = ({ creation }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleDownload = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        fetch(creation.image_url)
            .then(res => res.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = `creation-${creation.id}.png`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(() => alert('Failed to download image.'));
    };
    
    const remixUrl = `/image-generator?prompt=${encodeURIComponent(creation.prompt)}`;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative aspect-square rounded-xl overflow-hidden group bg-black/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={creation.image_url} alt={creation.prompt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <AnimatePresence>
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/70 p-4 flex flex-col justify-between"
                >
                    <p className="text-sm text-gray-200 line-clamp-4">{creation.prompt}</p>
                    <div className="flex items-center justify-end gap-2">
                        <Link to={remixUrl} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" title="Remix">
                           <ArrowPathIcon className="w-5 h-5 text-white" />
                        </Link>
                        <button onClick={handleDownload} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" title="Download">
                           <DownloadIcon className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.div>
    );
};

export const MyCreationsPage = () => {
    const { userId } = useAuth();
    const [creations, setCreations] = useState<Creation[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCreations = async () => {
            if (!userId) {
                setIsLoading(false);
                return;
            }
            try {
                const { data, error } = await supabase
                    .from('creations')
                    .select('*')
                    .eq('user_id', userId)
                    .order('created_at', { ascending: false });

                if (error) {
                    if (error.code === '42P01') { // table does not exist
                        const setupInstruction = `
DATABASE SETUP REQUIRED
-----------------------
The 'My Creations' feature needs a table in your database to store your images.

Please run the following commands in your Supabase project's SQL Editor to set it up:

1. Create the storage bucket:
INSERT INTO storage.buckets (id, name, public) VALUES ('creations', 'creations', true);

2. Create the table:
CREATE TABLE public.creations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  prompt TEXT,
  image_url TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

3. Enable Row Level Security:
ALTER TABLE public.creations ENABLE ROW LEVEL SECURITY;

4. Create security policies:
CREATE POLICY "Allow individual read access" ON public.creations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Allow individual insert access" ON public.creations FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Allow public read access to images" ON storage.objects FOR SELECT USING (bucket_id = 'creations');
CREATE POLICY "Allow individual insert access to images" ON storage.objects FOR INSERT WITH CHECK (auth.uid() IS NOT NULL AND bucket_id = 'creations');

After running this, your creations will be saved here automatically.
`;
                        setError(setupInstruction);
                    } else {
                        throw error;
                    }
                } else {
                    setCreations(data as Creation[]);
                }
            } catch (err: any) {
                setError(`Failed to load creations: ${err.message}`);
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCreations();
    }, [userId]);

    return (
        <PageWrapper title="My Creations" description="Your personal gallery of AI-generated masterpieces.">
            {isLoading ? (
                <div className="flex justify-center items-center h-64"><Spinner /></div>
            ) : error ? (
                <div className="mt-8 text-sm text-red-200 bg-red-900/40 p-4 rounded-lg border border-red-500/50">
                    <p className="font-semibold mb-2 text-red-100">Action Required: Setup 'My Creations'</p>
                    <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">{error}</pre>
                </div>
            ) : creations.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center bg-gray-950/40 backdrop-blur-xl border border-purple-500/20 p-12 rounded-3xl min-h-[400px] mt-8">
                    <PhotoIcon className="w-16 h-16 text-gray-600 mb-4" />
                    <h2 className="text-2xl font-bold text-white">Your Gallery is Empty</h2>
                    <p className="mt-2 text-lg text-gray-400 max-w-md">
                        Start creating images with the{' '}
                        <Link to="/image-generator" className="text-purple-400 font-semibold hover:underline">
                            AI Image Generator
                        </Link>
                        {' '}and they will appear here automatically.
                    </p>
                </div>
            ) : (
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                    <AnimatePresence>
                        {creations.map(creation => (
                            <CreationCard key={creation.id} creation={creation} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}
        </PageWrapper>
    );
};
