
import React, { useState } from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Button, ImageUploader, Spinner } from '../components/ui/Common';
import { PhotoIcon, PencilSlashIcon } from '../components/ui/Icons';
import { motion } from 'framer-motion';

const panelClass = "bg-gray-950/40 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-4";

const WatermarkRemoverPage = () => {
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [processedImage, setProcessedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleImageUpload = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setOriginalImage(reader.result as string);
            setProcessedImage(null);
        };
        reader.readAsDataURL(file);
    };

    const handleGenerate = () => {
        if (!originalImage) return;
        setIsLoading(true);
        // Simulate API call for inpainting
        setTimeout(() => {
            setProcessedImage(originalImage); // Placeholder result
            setIsLoading(false);
        }, 2000);
    };

    const originalImageMotionProps = {
        initial: {opacity: 0},
        animate: {opacity: 1}
    };

    const resultImageMotionProps = {
        initial: {opacity: 0, scale: 0.9},
        animate: {opacity: 1, scale: 1}
    };

    return (
        <PageWrapper title="Watermark Remover" description="Intelligently remove watermarks or other unwanted elements from your images.">
            <div className="text-center my-8">
                <ImageUploader onImageUpload={handleImageUpload}>
                    <Button variant="primary">
                        <PhotoIcon className="w-5 h-5 mr-2" />
                        {originalImage ? 'Upload Another Image' : 'Upload Image'}
                    </Button>
                </ImageUploader>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg font-semibold text-center mb-4 text-gray-300">Original</h3>
                    {originalImage ? (
                        <div className={panelClass}>
                           <motion.img {...originalImageMotionProps} src={originalImage} alt="Original" className="w-full h-auto object-contain rounded-2xl" />
                        </div>
                    ) : (
                        <div className="aspect-square w-full bg-black/20 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-white/10">
                            <PhotoIcon className="h-16 w-16 text-gray-600" />
                            <p className="mt-2 text-sm text-gray-500">Upload an image to start</p>
                        </div>
                    )}
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-center mb-4 text-gray-300">Result</h3>
                    <div className="aspect-square w-full bg-black/20 rounded-2xl flex items-center justify-center border border-white/10">
                        {isLoading ? <Spinner /> : processedImage ? <motion.img {...resultImageMotionProps} src={processedImage} alt="Processed" className="w-full h-auto object-contain rounded-xl" /> : <p className="text-sm text-gray-500">Result will appear here</p>}
                    </div>
                </div>
            </div>
            {originalImage && (
                <div className="text-center mt-8">
                    <Button onClick={handleGenerate} disabled={isLoading}>
                        {isLoading ? <Spinner /> : <><PencilSlashIcon className="w-5 h-5 mr-2" />Remove Watermark (Demo)</>}
                    </Button>
                </div>
            )}
            <div className="mt-8 p-4 bg-red-900/50 border-l-4 border-red-500 text-red-300 rounded-r-lg">
                <p className="font-semibold">Feature Demonstration</p>
                <p className="text-sm">This tool demonstrates a potential UI for an AI inpainting feature. Removing watermarks requires a highly specialized model trained to recognize and reconstruct areas behind logos and text. A production version would integrate such a model.</p>
            </div>
        </PageWrapper>
    );
};

export { WatermarkRemoverPage };
