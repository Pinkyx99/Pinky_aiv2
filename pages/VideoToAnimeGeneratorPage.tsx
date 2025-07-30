
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const VideoToAnimeGeneratorPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Video to Anime Generator"
            description="Convert real-life videos into various anime styles."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4"
            >
                <iframe
                    src="https://huggingface.co/spaces/zumjoy/Multi-Style_Video-to-Anime_Generator?__theme=dark"
                    className="w-full h-full border-0 rounded-2xl"
                    title="Video to Anime Generator"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { VideoToAnimeGeneratorPage };
