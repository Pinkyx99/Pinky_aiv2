
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const VideoToTextGeneratorPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Video to Text Generator"
            description="Transcribe spoken words from video files into text."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4"
            >
                <iframe
                    src="https://huggingface.co/spaces/gamer098890/video-to-text-generator?__theme=dark"
                    className="w-full h-full border-0 rounded-2xl"
                    title="Video to Text Generator"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { VideoToTextGeneratorPage };
