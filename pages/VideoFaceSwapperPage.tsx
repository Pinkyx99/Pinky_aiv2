
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const VideoFaceSwapperPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Video Face Swapper"
            description="Swap faces in video clips with this advanced AI tool."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4"
            >
                <iframe
                    src="https://athagi-ggttgggggyg.hf.space?__theme=dark"
                    className="w-full h-full border-0 rounded-2xl"
                    title="Video Face Swapper"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { VideoFaceSwapperPage };
