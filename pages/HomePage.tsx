






import React, { useEffect, useRef, useState } from 'react';
import { ToolCard } from '../components/ui/ToolCard';
import { TOOLS } from '../data/tools';
import { motion, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Common';
import { GithubIcon, InstagramIcon, SnapchatIcon, StarIcon } from '../components/ui/Icons';
import { Tool, SuperCategory } from '../types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const HeroGraphic = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute inset-y-0 right-0 w-full md:w-3/4 lg:w-2/3 h-full z-0 flex items-center justify-center"
            aria-hidden="true"
        >
            <div className="w-full h-full scale-[1.4] md:scale-[1.3] lg:scale-[1.5] translate-x-[25%] md:translate-x-[15%] lg:translate-x-[20%] opacity-30 md:opacity-40">
                <img
                    src="https://i.imgur.com/S0DyGuI.png"
                    alt="" // Alt is empty as this is a decorative element
                    className="w-full h-full object-contain"
                    style={{
                        filter: 'drop-shadow(0px 0px 80px rgba(168, 85, 247, 0.6)) drop-shadow(0px 0px 30px rgba(168, 85, 247, 0.4))',
                        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
                    }}
                />
            </div>
        </motion.div>
    );
};

const Footer = () => (
    <footer className="mt-24 pb-8 text-center text-gray-400">
        <div className="flex justify-center items-center space-x-6">
            <a href="https://github.com/Pinkyx99" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <GithubIcon className="w-7 h-7 text-gray-400 transition-colors"/>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon className="w-7 h-7 text-gray-400 transition-colors" />
            </a>
            <a href="https://www.snapchat.com/add/ramill_alijaa?share_id=EI-Jlq2zClE&locale=en-US" target="_blank" rel="noopener noreferrer" aria-label="Snapchat">
                <SnapchatIcon className="w-7 h-7" />
            </a>
        </div>
        <p className="mt-6 text-sm">
            By Ramill
        </p>
    </footer>
);


const ToolOfTheDayCard: React.FC<{ tool: Tool }> = ({ tool }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            className="relative rounded-3xl overflow-hidden group p-1 bg-gradient-to-br from-purple-700/60 via-purple-900/40 to-black/30"
        >
            <div className="absolute -inset-px bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl" />
            <div 
                className="absolute inset-0 z-0 opacity-10"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M0 0 H50 V50 H100\' fill=\'none\' stroke=\'%23a855f7\' stroke-width=\'0.5\'/%3E%3C/svg%3E")', backgroundSize: '20px 20px' }}
            ></div>

            <div className="relative flex flex-col md:flex-row items-center justify-between p-8 bg-[#110f1a]/80 backdrop-blur-2xl rounded-[22px] ">
                <div className="md:w-3/5 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                        <StarIcon className="w-6 h-6 text-yellow-400" filled />
                        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                            Tool of the Day
                        </h2>
                    </div>
                    <h3 className="text-3xl font-black text-white">{tool.title}</h3>
                    <p className="mt-2 text-gray-300 max-w-md mx-auto md:mx-0">{tool.description}</p>
                    <Link to={tool.path}>
                        <Button variant="primary" className="mt-6 !px-6 !py-2.5">Try Now</Button>
                    </Link>
                </div>
                <div className="mt-8 md:mt-0 md:w-2/5 flex justify-center">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="w-40 h-40 bg-gradient-to-br from-purple-600/20 to-black/20 rounded-3xl flex items-center justify-center border border-white/10 shadow-2xl shadow-purple-900/50"
                    >
                        <tool.Icon className="w-20 h-20 text-purple-400" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const AnimatedCounter = ({ to }: { to: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(0, to, {
            duration: 2.5,
            ease: "easeOut",
            onUpdate(value) {
                node.textContent = Math.round(value).toString();
            }
        });

        return () => controls.stop();
    }, [to]);

    return <span ref={nodeRef}>0</span>;
}


const ToolCounter = () => {
    const totalTools = TOOLS.filter(t => !t.isComingSoon).length;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="my-16 md:my-24"
        >
            <div className="relative inline-block text-center p-6 md:p-8 bg-gray-900/50 rounded-2xl border border-white/10 shadow-lg shadow-purple-900/40 backdrop-blur-sm">
                <div 
                    className="absolute -inset-px rounded-2xl z-0" 
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.3), transparent 70%)',
                        filter: 'blur(20px)',
                        animation: 'pulse 4s infinite ease-in-out'
                    }}
                />
                <div className="relative z-10 flex flex-col items-center">
                     <p className="text-base md:text-lg font-medium text-gray-300">Active Tools on Pinky AI</p>
                     <div className="text-6xl md:text-7xl font-black text-white tracking-tighter" style={{ textShadow: '0 0 20px rgba(192, 132, 252, 0.7)' }}>
                        <AnimatedCounter to={totalTools} />
                     </div>
                </div>
            </div>
        </motion.div>
    );
};


export const HomePage = () => {
  const [activeSuperCategory, setActiveSuperCategory] = useState<'All' | SuperCategory>('All');

  const superCategories: Array<'All' | SuperCategory> = ['All', 'AI Tools', 'Utilities', 'Converters', 'Social'];

  const filteredTools = TOOLS.filter(tool => 
      activeSuperCategory === 'All' || tool.superCategory === activeSuperCategory
  );
    
  const pageMotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };
  
  const getToolOfTheDayIndex = () => {
    if (TOOLS.length === 0) return 0;
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    return dayOfYear % TOOLS.length;
  };
  
  const toolOfTheDay = TOOLS[getToolOfTheDayIndex()];

  return (
    <motion.div
      {...pageMotionProps}
      className="relative"
    >
      <div className="min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center relative py-12">
        <div className="w-full md:w-3/5 lg:w-[55%] text-left z-10">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight"
            >
              The Ultimate AI Toolbox
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-6 max-w-xl text-lg md:text-xl text-gray-300">
              One platform. Infinite creative power.
            </motion.p>
             <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="mt-10 flex flex-col sm:flex-row items-start gap-4"
             >
                <Link to="/image-generator">
                    <Button variant="primary" className="w-full sm:w-auto !px-8 !py-3 !text-base">Start Creating</Button>
                </Link>
                <Button variant="secondary" className="w-full sm:w-auto !px-8 !py-3 !text-base" onClick={() => document.getElementById('tools-section')?.scrollIntoView({ behavior: 'smooth' })}>
                    See Tools
                </Button>
            </motion.div>
        </div>
        
        <HeroGraphic />

    </div>

    <div className="flex justify-center">
        <ToolCounter />
    </div>
    
    {toolOfTheDay && 
        <div className="my-16">
          <ToolOfTheDayCard tool={toolOfTheDay} />
        </div>
    }


       <div id="tools-section" className="pt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mb-8 flex flex-wrap items-center justify-center gap-2">
            {superCategories.map(category => (
                <button
                    key={category}
                    onClick={() => setActiveSuperCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                        activeSuperCategory === category
                            ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70'
                    }`}
                >
                    {category}
                </button>
            ))}
        </motion.div>

         <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {filteredTools.map((tool) => (
                <motion.div key={tool.id} variants={itemVariants}>
                    <ToolCard tool={tool} />
                </motion.div>
            ))}

          </motion.div>
       </div>
       
       <div className="mt-24 max-w-4xl mx-auto text-center p-8 bg-gray-900/40 border border-white/10 rounded-2xl">
            <h3 className="font-bold text-xl text-white mb-3">Usage Policy and Disclaimer</h3>
            <div className="text-sm text-gray-400 space-y-3 text-left">
                <p>
                    Pinky AI serves as a curated directory and interface for accessing various third-party AI models and utility tools. This platform provides a unified and convenient way to explore and interact with these tools through embedded iframes.
                </p>
                <p>
                    <strong>Third-Party Services:</strong> Please be aware that the tools featured on this website are developed and hosted by their respective creators. Pinky AI embeds content from various platforms including, but not limited to, <a href="https://huggingface.co/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Hugging Face</a>, <a href="https://100freeonlinetools.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">100freeonlinetools.vercel.app</a>, <a href="https://vidsyoutube.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">vidsyoutube.com</a>, <a href="https://seostudio.tools/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">seostudio.tools</a>, and <a href="https://vheer.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">vheer.com</a>. Pinky AI is not responsible for the functionality, performance, content output, or data privacy practices of these external services.
                </p>
                <p>
                    <strong>Terms of Use:</strong> By using any tool on this platform, you are subject to the terms of service, acceptable use policies, and privacy policies of the original tool's website. We strongly encourage you to review these policies on their respective pages before use. Pinky AI does not store any data you input into these services.
                </p>
                <p>
                    <strong>No Warranty:</strong> The tools are provided "as is" without any warranty of any kind. We do not guarantee the accuracy, reliability, or suitability of the content generated or the services provided by these third-party tools.
                </p>
            </div>
        </div>

       <Footer />
    </motion.div>
  );
};