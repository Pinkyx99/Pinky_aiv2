import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const ActionFigureGeneratorPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Action Figure Generator"
            description="Turn yourself or any character concept into a detailed action figure."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-300px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://vheer.com/app/action-figure-generator"
                    className="w-full h-[calc(100%+160px)] -translate-y-40 border-0"
                    title="Action Figure Generator"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { ActionFigureGeneratorPage };
