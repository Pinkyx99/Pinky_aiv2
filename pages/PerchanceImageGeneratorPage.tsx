import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const PerchanceImageGeneratorPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Image Generator (Backup)"
            description="Generate images from text prompts using the Perchance AI generator."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://perchance.org/ai-text-to-image-generator"
                    className="w-full h-full border-0"
                    title="Image Generator (Backup)"
                ></iframe>
            </motion.div>
            <div className="mt-8 p-4 bg-yellow-900/50 backdrop-blur-sm border-l-4 border-yellow-500 text-yellow-300 rounded-r-lg">
                <p className="font-semibold">Note on Third-Party Embeds</p>
                <p className="text-sm mt-1">
                    This tool is embedded from an external website (Perchance.org). Due to their security settings, it may not display correctly within this frame. If you encounter issues, please visit the tool directly.
                </p>
            </div>
        </PageWrapper>
    );
};

export { PerchanceImageGeneratorPage };
