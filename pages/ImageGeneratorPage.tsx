import React, { useState, useCallback } from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Button, Spinner, ImageSkeleton } from '../components/ui/Common';
import { generateImages, enhancePrompt } from '../services/gemini';
import { SparklesIcon, DownloadIcon, PhotoIcon, ArrowPathIcon } from '../components/ui/Icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { saveCreation } from '../services/creations';
import { Link } from 'react-router-dom';

const inputClasses = "block w-full rounded-2xl border-0 py-4 px-5 bg-black/20 text-gray-200 shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-lg transition-all duration-300";

const ImageResultCard = ({ src, prompt }: { src: string, prompt: string }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = src;
        link.download = `pinky-ai-${prompt.substring(0, 20).replace(/\s/g, '_')}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative group aspect-square"
        >
            <img src={src} alt={prompt} className="w-full h-full object-cover rounded-xl shadow-lg" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 rounded-xl">
                <div className="flex items-center gap-3">
                    <Button variant="secondary" onClick={handleDownload} className="!p-3" title="Download Image">
                        <DownloadIcon className="w-6 h-6" />
                    </Button>
                     <Link to={`/image-generator?prompt=${encodeURIComponent(prompt)}`}>
                        <Button variant="secondary" className="!p-3" title="Remix Prompt">
                            <ArrowPathIcon className="w-6 h-6" />
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export const ImageGeneratorPage = () => {
    const { userId } = useAuth();
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isEnhancing, setIsEnhancing] = useState(false);
    const [generatedImages, setGeneratedImages] = useState<string[]>([]);
    const [error, setError] = useState('');

    const handleGenerate = useCallback(async () => {
        if (!prompt) {
            setError('Please enter a prompt to generate an image.');
            return;
        }
        setIsLoading(true);
        setError('');
        setGeneratedImages([]);

        try {
            const enhancedPromptForGeneration = `4k photo, masterpiece, professional photography, ${prompt}`;
            const images = await generateImages(enhancedPromptForGeneration, 4);
            setGeneratedImages(images);

            if (userId && images.length > 0) {
                // Save all generated images without waiting
                images.forEach(imgBase64 => saveCreation(userId, prompt, imgBase64));
            }

        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
            setError(`Image generation failed. ${errorMessage}`);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [prompt, userId]);

    const handleEnhance = useCallback(async () => {
        if (!prompt) return;
        setIsEnhancing(true);
        setError('');
        try {
            const enhanced = await enhancePrompt(prompt);
            setPrompt(enhanced);
        } catch (err) {
            setError('Failed to enhance prompt. Please try again.');
            console.error(err);
        } finally {
            setIsEnhancing(false);
        }
    }, [prompt]);

    return (
        <PageWrapper
            title="AI Image Generator"
            description="Create stunning, high-quality images from text prompts using the power of Gemini."
        >
            <div className="max-w-4xl mx-auto mt-6">
                <div className="bg-gray-950/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-4 sm:p-6 space-y-4">
                    <div className="relative">
                        <textarea
                            rows={3}
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="A unicorn dreaming of electric sheep in a neon-lit forest..."
                            className={inputClasses}
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                            onClick={handleEnhance}
                            disabled={isEnhancing || !prompt}
                            variant="secondary"
                            className="w-full sm:w-auto"
                        >
                            {isEnhancing ? <Spinner /> : <SparklesIcon className="w-5 h-5 mr-2" />}
                            Enhance Prompt
                        </Button>
                        <Button
                            onClick={handleGenerate}
                            disabled={isLoading || !prompt}
                            className="w-full"
                        >
                            {isLoading ? <Spinner /> : <PhotoIcon className="w-5 h-5 mr-2" />}
                            Generate (4 Images)
                        </Button>
                    </div>
                </div>

                {error && <p className="mt-4 text-sm text-red-400 text-center">{error}</p>}

                <div className="mt-8">
                    <AnimatePresence>
                        {isLoading && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            >
                                <ImageSkeleton />
                                <ImageSkeleton />
                                <ImageSkeleton />
                                <ImageSkeleton />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                    {generatedImages.length > 0 && (
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {generatedImages.map((src, index) => (
                                <ImageResultCard key={index} src={src} prompt={prompt} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </PageWrapper>
    );
};