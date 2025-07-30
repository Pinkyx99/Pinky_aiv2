import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const SocialMediaDownloaderPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Social Media Downloader"
            description="Download videos and photos from social media platforms."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://getindevice.com/"
                    className="w-full h-[calc(100%+600px)] -translate-y-[150px] border-0"
                    title="Social Media Downloader"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { SocialMediaDownloaderPage };