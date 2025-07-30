
import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

export const ObjectChangerPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="AI Object Remover"
            description="Remove unwanted objects, people, or text from images by masking them."
        >
            <div className="w-full overflow-x-auto">
                <motion.div
                    {...motionProps}
                    className="mt-4 min-w-[800px] md:min-w-full"
                >
                     <iframe
                        src="https://aryadytm-remove-photo-object.hf.space"
                        className="w-full border-0 rounded-2xl"
                        style={{ height: '1500px' }}
                        title="AI Object Remover"
                    ></iframe>
                </motion.div>
            </div>
        </PageWrapper>
    );
};
