import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { motion } from 'framer-motion';

const ProfilePhotoMakerPage = () => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };
    return (
        <PageWrapper
            title="Image Editor"
            description="A simple online image editor to make quick adjustments."
        >
            <motion.div
                {...motionProps}
                className="w-full h-[80vh] md:h-[calc(100vh-200px)] mt-4 rounded-2xl overflow-hidden"
            >
                <iframe
                    src="https://100freeonlinetools.vercel.app/tools/image-tools/image-editor.html"
                    className="w-full h-[calc(100%+400px)] -translate-y-[70px] md:h-[calc(100%+600px)] md:-translate-y-[133px] border-0"
                    title="Image Editor"
                ></iframe>
            </motion.div>
        </PageWrapper>
    );
};

export { ProfilePhotoMakerPage };