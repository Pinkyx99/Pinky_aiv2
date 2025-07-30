

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LogoIcon, XMarkIcon, MagnifyingGlassIcon } from './Icons';
import type { Tool } from '../../types';
import { TOOLS } from '../../data/tools';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

const originalSuperCategories = Array.from(new Set(TOOLS.map(t => t.superCategory)));


// --- Desktop Sidebar ---
const DesktopSidebar: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const isExpanded = isHovered;

    const h1MotionProps = {
        animate: { opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -20 },
        transition: { duration: 0.2, delay: isExpanded ? 0.1 : 0 }
    };

    const filteredTools = TOOLS.filter(tool =>
        tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredGroupedTools = filteredTools.reduce<Record<string, Tool[]>>((acc, tool) => {
        (acc[tool.superCategory] = acc[tool.superCategory] || []).push(tool);
        return acc;
    }, {});
    
    const filteredCategories = originalSuperCategories.filter(category => filteredGroupedTools[category]);

    return (
        <motion.aside
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{ width: isExpanded ? '18rem' : '5rem' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="hidden md:flex flex-col sticky top-0 h-screen bg-[#110f1a]/80 border-r border-white/10 backdrop-blur-xl"
        >
            <div className="p-4 flex flex-col h-full overflow-hidden w-full">
                <div className="flex items-center mb-6 h-14">
                    <Link to="/" className="flex items-center space-x-3 overflow-hidden">
                        <LogoIcon className="h-8 w-8 flex-shrink-0" />
                        <motion.h1 
                            {...h1MotionProps}
                            className="text-2xl font-bold text-white tracking-tight whitespace-nowrap"
                        >
                            Pinky AI
                        </motion.h1>
                    </Link>
                </div>

                <motion.div 
                    animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? 'auto' : 0, marginBottom: isExpanded ? '1rem' : 0 }}
                    transition={{ duration: 0.2, delay: isExpanded ? 0.1 : 0 }}
                    className="overflow-hidden"
                >
                     <div className="relative">
                        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                        <input
                            type="text"
                            placeholder="Search tools..."
                            className="w-full bg-black/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 border border-transparent focus:border-purple-500 focus:ring-0 transition-colors"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </motion.div>


                <nav className="flex-grow flex flex-col space-y-2 overflow-y-auto pr-2 -mr-4">
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((category) => (
                            <div key={category}>
                                <motion.h2 
                                    animate={{ opacity: isExpanded ? 1 : 0 }}
                                    transition={{ duration: 0.2, delay: isExpanded ? 0.1 : 0 }}
                                    className="px-2 pt-4 pb-1 text-xs font-semibold text-gray-500 uppercase tracking-wider overflow-hidden whitespace-nowrap"
                                >
                                    {category}
                                </motion.h2>
                                <div className="space-y-1">
                                    {filteredGroupedTools[category].map((tool: Tool) => (
                                        <NavItemDesktop key={tool.id} tool={tool} isExpanded={isExpanded} />
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                         <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center text-gray-500 px-4 py-8"
                         >
                           <p>No results found.</p>
                         </motion.div>
                    )}
                </nav>

            </div>
        </motion.aside>
    );
};

const NavItemDesktop: React.FC<{ tool: Tool, isExpanded: boolean }> = ({ tool, isExpanded }) => {
    const spanMotionProps = {
        animate: { opacity: isExpanded ? 1 : 0, width: isExpanded ? 'auto' : 0, marginLeft: isExpanded ? '1rem' : 0 },
        transition: { duration: 0.2, delay: isExpanded ? 0.1 : 0 }
    };
    const badgeMotionProps = {
         animate: { opacity: isExpanded ? 1 : 0 },
         transition: { duration: 0.2, delay: isExpanded ? 0.1 : 0 }
    }

    return (
        <NavLink
            to={tool.path}
            className={({ isActive }) =>
                cn(
                    "flex items-center p-2 rounded-lg transition-all duration-200 group relative",
                    isActive
                        ? 'bg-purple-600/20 text-white'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                )
            }
        >
           {({ isActive }) => (
                <>
                    <tool.Icon className={cn("h-6 w-6 flex-shrink-0 transition-colors duration-200", isActive ? 'text-purple-300' : 'text-gray-500 group-hover:text-purple-400')} />
                    <motion.span
                        {...spanMotionProps}
                        className="font-medium flex-grow overflow-hidden whitespace-nowrap"
                    >
                        {tool.title}
                    </motion.span>
                    {tool.isNew && (
                         <motion.span
                            {...badgeMotionProps}
                            className="text-xs bg-purple-500 text-white font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
                        >
                            New
                        </motion.span>
                    )}
                    {tool.isBeta && (
                         <motion.span
                            {...badgeMotionProps}
                            className="text-xs bg-orange-500 text-white font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
                        >
                            Beta
                        </motion.span>
                    )}
                </>
           )}
        </NavLink>
    );
};

// --- Mobile Sidebar ---
const MobileSidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTools = TOOLS.filter(tool =>
        tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredGroupedTools = filteredTools.reduce<Record<string, Tool[]>>((acc, tool) => {
        (acc[tool.superCategory] = acc[tool.superCategory] || []).push(tool);
        return acc;
    }, {});

    const filteredCategories = originalSuperCategories.filter(category => filteredGroupedTools[category]);
    
    const backdropMotionProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 }
    };

    return (
    <AnimatePresence>
        {isOpen && (
            <>
                <motion.div
                    {...backdropMotionProps}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/80 z-30 md:hidden"
                    aria-hidden="true"
                />
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed top-0 left-0 w-80 h-screen bg-[#110f1a]/95 border-r border-white/10 backdrop-blur-xl z-40 md:hidden flex flex-col"
                >
                    <div className="p-4 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4 h-14">
                            <Link to="/" onClick={onClose} className="flex items-center space-x-3">
                                <LogoIcon className="h-8 w-8" />
                                <h1 className="text-2xl font-bold text-white tracking-tight">Pinky AI</h1>
                            </Link>
                            <button onClick={onClose} className="text-gray-400 hover:text-white p-2 -mr-2" aria-label="Close menu">
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                        </div>

                         <div className="relative mb-4">
                            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Search tools..."
                                className="w-full bg-black/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 border border-transparent focus:border-purple-500 focus:ring-0 transition-colors"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>


                        <div className="flex-grow overflow-y-auto pr-2 -mr-4">
                           <nav className="flex flex-col">
                                {filteredCategories.length > 0 ? (
                                    filteredCategories.map((category) => (
                                        <div key={category}>
                                            <h2 className="px-3 pt-4 pb-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                                {category}
                                            </h2>
                                            <div className="space-y-1">
                                                {filteredGroupedTools[category].map((tool: Tool) => (
                                                    <NavLink 
                                                        key={tool.id} 
                                                        to={tool.path} 
                                                        onClick={onClose}
                                                        className={({ isActive }) =>
                                                            `flex items-center space-x-4 p-3 rounded-lg transition-all duration-200 group ${
                                                            isActive ? 'bg-purple-600/20 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`
                                                        }>
                                                        <tool.Icon className="h-6 w-6 text-purple-400"/>
                                                        <span className="font-medium flex-grow">{tool.title}</span>
                                                        {tool.isNew && <span className="text-xs bg-purple-500 text-white font-semibold px-2 py-0.5 rounded-full">New</span>}
                                                        {tool.isBeta && <span className="text-xs bg-orange-500 text-white font-semibold px-2 py-0.5 rounded-full">Beta</span>}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                 ) : (
                                     <div className="text-center text-gray-500 px-4 py-8">
                                       <p>No results found.</p>
                                     </div>
                                 )}
                            </nav>
                        </div>
                    </div>
                </motion.div>
            </>
        )}
    </AnimatePresence>
)};


// --- Main Sidebar Component ---
export const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    return (
        <>
            <DesktopSidebar />
            <MobileSidebar isOpen={isOpen} onClose={onClose} />
        </>
    );
};