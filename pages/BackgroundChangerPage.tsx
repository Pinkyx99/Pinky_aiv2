import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const BackgroundChangerPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="AI Background Changer"
            description="Change the background of any image using generative AI."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-300px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://vheer.com/app/background-changer"
                    className="w-full h-[calc(100%+160px)] -translate-y-40 border-0"
                    title="AI Background Changer"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { BackgroundChangerPage };
