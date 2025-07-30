import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const InstagramDownloaderPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Instagram Downloader"
            description="Download videos, photos, and stories from Instagram."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://vidsyoutube.com/ins-Ha1b3s"
                    className="w-full h-[calc(100%+600px)] -translate-y-[150px] border-0"
                    title="Instagram Downloader"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { InstagramDownloaderPage };
