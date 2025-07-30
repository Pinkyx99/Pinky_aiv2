
import React, { useState } from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Button, ImageUploader } from '../components/ui/Common';
import { PhotoIcon, FilmIcon, SparklesIcon } from '../components/ui/Icons';
import { motion } from 'framer-motion';
import { enhancePrompt } from '../services/gemini';

const panelClass = "bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 sm:p-8";
const inputClasses = "block w-full rounded-lg border-0 py-2.5 bg-white/5 text-gray-200 shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6 transition-all duration-300";


const ImageAnimatorPage = () => {
    const [image, setImage] = useState<string | null>(null);
    const [prompt, setPrompt] = useState('');
    const [speed, setSpeed] = useState(1);
    const [isEnhancing, setIsEnhancing] = useState(false);
    const [error, setError] = useState('');

    const handleImageUpload = (file: File) => {
        setImage(URL.createObjectURL(file));
    };
    
    const handleEnhance = async () => {
        if (!prompt) return;
        setIsEnhancing(true);
        setError('');
        try {
            const enhanced = await enhancePrompt(prompt);
            setPrompt(enhanced);
        } catch (err) {
            setError('Failed to enhance prompt.');
            console.error(err);
        } finally {
            setIsEnhancing(false);
        }
    };

    return (
        <PageWrapper title="Image to Animation" description="Bring your still images to life with a short description of motion.">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div>
                    <ImageUploader onImageUpload={handleImageUpload}>
                         <div className="aspect-video w-full bg-white/5 rounded-3xl flex flex-col items-center justify-center border-2 border-dashed border-white/10 cursor-pointer hover:border-teal-500/50 transition-colors">
                            {image ? (
                                <img src={image} alt="To be animated" className="w-full h-full object-contain rounded-3xl" />
                            ) : (
                                <>
                                    <PhotoIcon className="h-16 w-16 text-gray-600" />
                                    <p className="mt-2 text-gray-400">Upload an image</p>
                                </>
                            )}
                        </div>
                    </ImageUploader>
                </div>
                <div className={`${panelClass} space-y-6`}>
                    <div>
                        <label htmlFor="prompt" className="block text-sm font-medium leading-6 text-gray-300 mb-2">Animation Prompt</label>
                        <div className="relative">
                            <textarea id="prompt" rows={3} value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="e.g., 'clouds move slowly from left to right', 'hair flows in the wind'" className={`${inputClasses} pr-12`} />
                             <Button 
                                variant="secondary" 
                                onClick={handleEnhance} 
                                disabled={isEnhancing || !prompt}
                                className="absolute bottom-2.5 right-2.5 !px-2 !py-1 text-xs"
                                title="Enhance Prompt"
                            >
                                {isEnhancing ? <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div> : <SparklesIcon className="w-4 h-4" />}
                            </Button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="speed" className="block text-sm font-medium leading-6 text-gray-300">Animation Speed: {speed}x</label>
                        <input id="speed" type="range" min="0.5" max="2" step="0.1" value={speed} onChange={e => setSpeed(parseFloat(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-500 mt-2"/>
                    </div>
                    {error && <p className="text-sm text-red-400">{error}</p>}
                    <Button disabled={!image || !prompt} className="w-full">
                        <FilmIcon className="w-5 h-5 mr-2" />
                        Animate (Demo)
                    </Button>
                </div>
            </div>
            <div className="mt-8 p-4 bg-purple-900/50 backdrop-blur-sm border-l-4 border-purple-500 text-purple-300 rounded-r-lg">
                <p className="font-semibold">Feature Demonstration</p>
                <p className="text-sm">This page demonstrates the UI for an image-to-animation tool. Generating motion from a still image and a text prompt (e.g., creating a GIF or MP4) requires a specialized video generation AI model, which is a rapidly evolving technology.</p>
            </div>
        </PageWrapper>
    );
};
export { ImageAnimatorPage };