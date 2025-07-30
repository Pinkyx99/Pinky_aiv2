import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const TextBehindImagePage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Text Behind Image"
            description="Create stunning images with text artfully placed behind subjects."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-300px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://vheer.com/app/text-behind-image"
                    className="w-full h-[calc(100%+160px)] -translate-y-40 border-0"
                    title="Text Behind Image"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { TextBehindImagePage };
