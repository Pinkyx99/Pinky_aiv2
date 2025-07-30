
import React, { useState } from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Button, ImageUploader, Spinner } from '../components/ui/Common';
import { PhotoIcon, MagicWandIcon, SparklesIcon } from '../components/ui/Icons';
import { motion } from 'framer-motion';
import { enhancePrompt } from '../services/gemini';

const panelClass = "bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 sm:p-8";
const inputClasses = "block w-full rounded-lg border-0 py-2.5 bg-white/5 text-gray-200 shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6 transition-all duration-300";

const ImageToImagePage = () => {
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [processedImage, setProcessedImage] = useState<string | null>(null);
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isEnhancing, setIsEnhancing] = useState(false);
    const [error, setError] = useState('');

    const handleImageUpload = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setOriginalImage(reader.result as string);
            setProcessedImage(null);
        };
        reader.readAsDataURL(file);
    };
    
    const handleGenerate = () => {
        if (!originalImage || !prompt) return;
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setProcessedImage(originalImage); // Placeholder result
            setIsLoading(false);
        }, 2000);
    };

    const handleEnhance = async () => {
        if (!prompt) return;
        setIsEnhancing(true);
        setError('');
        try {
            const enhanced = await enhancePrompt(`For an image-to-image model, enhance this prompt: "${prompt}"`);
            setPrompt(enhanced);
        } catch (err) {
            setError('Failed to enhance prompt.');
            console.error(err);
        } finally {
            setIsEnhancing(false);
        }
    };

    const originalImageMotionProps = { initial: {opacity: 0}, animate: {opacity: 1} };
    const resultImageMotionProps = { initial: {opacity: 0, scale: 0.9}, animate: {opacity: 1, scale: 1} };

    return (
        <PageWrapper title="AI Image to Image" description="Transform an existing image by describing the changes you want to see.">
            {!originalImage ? (
                <div className="text-center max-w-2xl mx-auto mt-8">
                    <ImageUploader onImageUpload={handleImageUpload}>
                        <div className="w-full h-64 bg-white/5 rounded-3xl flex flex-col items-center justify-center border-2 border-dashed border-white/10 cursor-pointer hover:border-teal-500/50 transition-colors">
                            <PhotoIcon className="h-16 w-16 text-gray-600" />
                            <p className="mt-4 text-lg text-gray-400">Click or drag to upload an image</p>
                        </div>
                    </ImageUploader>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-center mb-4 text-gray-300">Original</h3>
                                <motion.img {...originalImageMotionProps} src={originalImage} alt="Original" className="w-full h-auto object-contain rounded-2xl shadow-lg bg-white/5 p-2 border border-white/10" />
                            </div>
                             <div>
                                <h3 className="text-lg font-semibold text-center mb-4 text-gray-300">Result</h3>
                                <div className="aspect-square w-full bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                    {isLoading ? <Spinner /> : processedImage ? <motion.img {...resultImageMotionProps} src={processedImage} alt="Processed" className="w-full h-auto object-contain rounded-2xl" /> : <p className="text-sm text-gray-500">Result will appear here</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${panelClass} flex flex-col`}>
                        <h3 className="font-semibold text-lg mb-4 text-white">Describe Your Transformation</h3>
                        <div className="flex-grow space-y-4">
                            <label htmlFor="prompt" className="block text-sm font-medium leading-6 text-gray-300">Prompt</label>
                            <div className="relative">
                                <textarea id="prompt" rows={5} value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="e.g., 'make it a Van Gogh style painting', 'turn day into night', 'add a futuristic city in the background'" className={`${inputClasses} pr-12`} />
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
                        <div className="mt-4">
                            <Button onClick={handleGenerate} disabled={isLoading || !prompt} className="w-full">
                                {isLoading ? <Spinner /> : <><MagicWandIcon className="w-5 h-5 mr-2" />Generate (Demo)</>}
                            </Button>
                        </div>
                        {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
                    </div>
                </div>
            )}
             <div className="mt-8 p-4 bg-purple-900/50 backdrop-blur-sm border-l-4 border-purple-500 text-purple-300 rounded-r-lg">
                <p className="font-semibold">Feature Demonstration</p>
                <p className="text-sm">This UI demonstrates how an image-to-image tool could work. While the Gemini API is excellent for analyzing images with text prompts, generating a new, modified image based on an existing one requires a specialized image-to-image or inpainting model. This page serves as a UI/UX concept for such a feature.</p>
            </div>
        </PageWrapper>
    );
};
export { ImageToImagePage };
