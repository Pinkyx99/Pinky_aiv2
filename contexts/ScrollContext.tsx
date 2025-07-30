
import React, { createContext, useContext, RefObject } from 'react';
import { useScroll, MotionValue, useMotionValue, useVelocity } from 'framer-motion';

interface ScrollContextType {
    scrollYVelocity: MotionValue<number>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

// This provider will be used in App.tsx to wrap the main content area.
export const ScrollProvider: React.FC<{ children: React.ReactNode; scrollableRef: RefObject<HTMLElement> }> = ({ children, scrollableRef }) => {
    const { scrollY } = useScroll({
        container: scrollableRef
    });

    const scrollYVelocity = useVelocity(scrollY);

    return (
        <ScrollContext.Provider value={{ scrollYVelocity }}>
            {children}
        </ScrollContext.Provider>
    );
};

// Custom hook to consume the context
export const useScrollVelocity = (): MotionValue<number> => {
    const context = useContext(ScrollContext);
    // Provide a static motion value as a fallback if the hook is used outside the provider.
    // This prevents crashes and makes components more reusable.
    return context?.scrollYVelocity || useMotionValue(0);
};
