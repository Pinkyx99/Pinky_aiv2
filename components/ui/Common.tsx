
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export const Button: React.FC<HTMLMotionProps<"button"> & { children: React.ReactNode, variant?: 'primary' | 'secondary' }> = ({ children, variant = 'primary', ...props }) => {
  const primaryClasses = 'bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] focus-visible:outline-purple-600';
  const secondaryClasses = 'bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 backdrop-blur-sm focus-visible:outline-white/20';

  const currentClassName = (props as any).className || '';

  return (
    <motion.button
      {...props}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      className={`inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none ${variant === 'primary' ? primaryClasses : secondaryClasses} ${currentClassName}`.trim()}
    >
      {children}
    </motion.button>
  );
};

export const Spinner: React.FC = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-400"></div>
  </div>
);

export const ImageUploader: React.FC<{ onImageUpload: (file: File) => void; children: React.ReactNode }> = ({ onImageUpload, children }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onImageUpload(e.target.files[0]);
        }
    };

    const handleClick = () => {
        inputRef.current?.click();
    };

    return (
        <div>
            <input
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                accept="image/png, image/jpeg"
                className="hidden"
            />
            <div onClick={handleClick} className="cursor-pointer">
                {children}
            </div>
        </div>
    );
};

export const ImageSkeleton: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`aspect-square bg-black/20 rounded-xl overflow-hidden border-2 border-white/10 ${className}`}>
            <div className="w-full h-full animate-pulse bg-purple-900/20"></div>
        </div>
    );
};
