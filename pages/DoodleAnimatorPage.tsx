
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const DoodleAnimatorPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Doodle Animator"
            description="Animate your simple doodles and bring your sketches to life."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4"
            >
                <iframe
                    src="https://fffiloni-simple-animation-doodle.hf.space"
                    className="w-full h-full border-0 rounded-2xl"
                    title="Doodle Animator"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { DoodleAnimatorPage };