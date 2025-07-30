import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const YouTubeThumbnailDownloaderPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="YouTube Thumbnail Downloader"
            description="Download high-quality thumbnails from any YouTube video."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://seostudio.tools/youtube-thumbnail-downloader"
                    className="w-full h-[calc(100%+600px)] -translate-y-[200px] border-0"
                    title="YouTube Thumbnail Downloader"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { YouTubeThumbnailDownloaderPage };
