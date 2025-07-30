import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const DeepAiImageGeneratorPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Image Generator (Backup)"
            description="Generate images from text prompts using the DeepAI model."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://deepai.org/machine-learning-model/text2img"
                    className="w-full h-[calc(100%+600px)] -translate-y-[250px] border-0"
                    title="Image Generator (Backup)"
                ></iframe>
            </motion.div>
            <div className="mt-8 p-4 bg-yellow-900/50 backdrop-blur-sm border-l-4 border-yellow-500 text-yellow-300 rounded-r-lg">
                <p className="font-semibold">Note on Third-Party Embeds</p>
                <p className="text-sm mt-1">
                    This tool is embedded from an external website (DeepAI). Due to their security settings, it may not display correctly within this frame. If you see a blank page, please visit the tool directly. We are exploring alternative ways to integrate it.
                </p>
            </div>
        </PageWrapper>
    );
};

export { DeepAiImageGeneratorPage };
