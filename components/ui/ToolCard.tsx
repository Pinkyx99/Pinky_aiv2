
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Tool } from '../../types';
import { motion, useTransform } from 'framer-motion';
import { useScrollVelocity } from '../../contexts/ScrollContext';

interface ToolCardProps {
  tool: Tool;
}

const cometInitial = {
  x: '0%',
  y: '0%',
  opacity: 0,
};


export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { Icon, title, description, path, isComingSoon, isNew, isBeta } = tool;
  const [isHovered, setIsHovered] = useState(false);
  
  const scrollYVelocity = useScrollVelocity();
  const skewY = useTransform(scrollYVelocity, [-1500, 0, 1500], [-4, 0, 4], {
    clamp: true,
  });

  const borderMotionProps = {
      animate: { opacity: isHovered ? 1 : 0 },
      transition: { duration: 0.3 }
  };
  
  const cometAnimate = {
    x: ['-20%', '120%'],
    y: ['-20%', '120%'],
    opacity: [0, 1, 0],
    transition: {
      duration: 1.5,
      ease: 'linear' as const,
    },
  };

  const cardContent = (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={!isComingSoon ? { y: -5, scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative h-full p-px rounded-2xl group transition-all duration-300 ${isComingSoon ? 'opacity-60 cursor-not-allowed' : ''}`}
      style={{ skewY, transformOrigin: 'center' }}
    >
      <div className="relative h-full bg-gray-900/50 p-6 rounded-[15px] flex space-x-5 overflow-hidden">
        {/* Rotating Border */}
        <motion.div
          {...borderMotionProps}
          className="absolute -inset-px rounded-[15px]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
            }}
            className="absolute w-[300%] h-[300%] -inset-[100%]"
            style={{
              background: `conic-gradient(from 180deg at 50% 50%, rgba(168, 85, 247, 0) 0%, rgba(168, 85, 247, 0.5) 50%, rgba(168, 85, 247, 0) 100%)`,
            }}
          />
        </motion.div>

        {/* Comet */}
        <motion.div
          animate={isHovered ? cometAnimate : cometInitial}
          className="absolute top-0 left-0 w-1.5 h-1.5 bg-purple-400 rounded-full"
          style={{
            boxShadow: '0 0 8px 1px #c084fc, 0 0 16px 4px #a855f7',
            filter: 'blur(1.5px)',
          }}
        />

        {/* Card actual content */}
        <div className="relative z-10 flex space-x-5 w-full">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gray-950/50 border border-white/10 group-hover:border-purple-500/30 transition-colors">
            <Icon className="w-7 h-7 text-purple-400" />
          </div>
          <div className="flex-grow">
            <h3 className="text-base font-bold text-white flex items-center">
              {title}
              {isNew && <span className="ml-2 text-xs bg-purple-500 text-white font-semibold px-2 py-0.5 rounded-full">New</span>}
              {isBeta && <span className="ml-2 text-xs bg-orange-500 text-white font-semibold px-2 py-0.5 rounded-full">Beta</span>}
            </h3>
            <p className="mt-1 text-sm text-gray-400">{description}</p>
            {isComingSoon && (
                <div className="mt-2 text-xs font-semibold text-yellow-400">Coming Soon...</div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (isComingSoon) {
    return <div>{cardContent}</div>;
  }

  return (
    <Link to={path} className="h-full block">
      {cardContent}
    </Link>
  );
};
