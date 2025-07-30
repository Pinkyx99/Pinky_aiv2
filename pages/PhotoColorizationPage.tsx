
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const PhotoColorizationPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="AI Photo Colorization"
            description="Bring black and white photos to life by adding realistic color using AI."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4"
            >
                <iframe
                    src="https://aryadytm-photo-colorization.hf.space?__theme=dark"
                    className="w-full h-full border-0 rounded-2xl"
                    title="AI Photo Colorization"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { PhotoColorizationPage };
