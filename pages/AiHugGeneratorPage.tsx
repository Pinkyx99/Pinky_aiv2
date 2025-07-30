
import React, { useState, useCallback } from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Button, Spinner } from '../components/ui/Common';
import { generateImages } from '../services/gemini';
import { HeartIcon } from '../components/ui/Icons';
import { motion, AnimatePresence } from 'framer-motion';

const panelClass = "bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 sm:p-8";
const inputClasses = "block w-full rounded-lg border-0 py-2.5 bg-white/5 text-gray-200 shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6 transition-all duration-300";

const AiHugGeneratorPage = () => {
    const [prompt, setPrompt] = useState('A warm, friendly, and wholesome hug between two abstract shapes, digital art, soft lighting');
    const [isLoading, setIsLoading] = useState(false);
    const [resultImage, setResultImage] = useState('');
    const [error, setError] = useState('');

    const handleGenerate = useCallback(async () => {
        if (!prompt) {
            setError('Please provide a prompt.');
            return;
        }

        setIsLoading(true);
        setError('');
        setResultImage('');

        try {
            const imageUrls = await generateImages(prompt, 1);
            if (imageUrls && imageUrls.length > 0) {
              setResultImage(imageUrls[0]);
            } else {
              setError("Image generation failed. The prompt may have been blocked or no image was returned.");
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred during generation.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);

    const resultsMotionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 }
    };

    const imageMotionProps = {
        key: "hug-image",
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.8, opacity: 0 }
    };

    return (
        <PageWrapper title="AI Hug Generator" description="Generate a wholesome image of a hug with a little help from AI.">
            <div className={`max-w-xl mx-auto mt-8 ${panelClass}`}>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="prompt" className="block text-sm font-medium leading-6 text-gray-300 mb-2">Prompt</label>
                        <textarea
                            id="prompt"
                            rows={3}
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Describe the hug you want to see..."
                            className={inputClasses}
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <Button onClick={handleGenerate} disabled={isLoading || !prompt} className="w-full">
                        {isLoading ? <Spinner /> : <><HeartIcon className="w-5 h-5 mr-2" />Generate Hug</>}
                    </Button>
                </div>
                {error && <p className="mt-4 text-sm text-red-400 text-center">{error}</p>}
            </div>

            <AnimatePresence>
                {(isLoading || resultImage) && (
                    <motion.div
                        {...resultsMotionProps}
                        className="mt-12 max-w-xl mx-auto"
                    >
                        <div className="aspect-square bg-[#0d111c] rounded-xl flex items-center justify-center p-4 border border-white/10">
                            <AnimatePresence>
                                {isLoading && !resultImage && <Spinner />}
                                {resultImage && 
                                    <motion.img 
                                        {...imageMotionProps}
                                        src={resultImage} 
                                        alt="Generated hug" 
                                        className="max-w-full max-h-full object-contain rounded-md" 
                                    />
                                }
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </PageWrapper>
    );
};

export { AiHugGeneratorPage };
