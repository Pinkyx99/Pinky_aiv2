
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

export const ImageGeneratorPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="AI Image Generator"
            description="Create stunning, high-quality images from text prompts."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-300px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://vheer.com/app/text-to-image"
                    className="w-full h-[calc(100%+160px)] -translate-y-40 border-0"
                    title="AI Image Generator"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};
