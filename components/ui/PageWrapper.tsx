
import React from 'react';
import { motion } from 'framer-motion';

export const PageWrapper: React.FC<{ children: React.ReactNode; title: string; description: string }> = ({ children, title, description }) => {
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.3 }
    };
    return (
        <motion.div
            {...motionProps}
            className="w-full"
        >
            <header className="pb-8 pt-4 md:pt-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">{title}</h1>
                <p className="mt-3 text-lg text-gray-400 max-w-2xl">{description}</p>
            </header>
            <div>
                {children}
            </div>
        </motion.div>
    );
};
