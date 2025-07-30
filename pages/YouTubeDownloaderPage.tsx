import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const YouTubeDownloaderPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="YouTube Video Downloader"
            description="Download YouTube videos quickly and easily."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://vidsyoutube.com/yt-Jdu3B1"
                    className="w-full h-[calc(100%+600px)] -translate-y-[150px] border-0"
                    title="YouTube Video Downloader"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { YouTubeDownloaderPage };
