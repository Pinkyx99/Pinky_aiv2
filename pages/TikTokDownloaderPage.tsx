import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const TikTokDownloaderPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="TikTok Downloader"
            description="Download TikTok videos without watermarks."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://vidsyoutube.com/tiktok-Fda3A1"
                    className="w-full h-[calc(100%+600px)] -translate-y-[150px] border-0"
                    title="TikTok Downloader"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { TikTokDownloaderPage };
