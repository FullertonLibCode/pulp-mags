import React from 'react';
import { timelineCovers } from '../data/covers';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Timeline: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.h1 
        className="text-3xl font-bold mb-8 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Evolution of AI in Pulp Fiction
      </motion.h1>
      
      <motion.p
        className="text-gray-300 mb-12 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Trace the evolution of how robots and artificial intelligence were portrayed through the decades, reflecting changing cultural attitudes and technological developments.
      </motion.p>
      
      <div className="relative">
        <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#1e3a8a] via-[#00eeff] to-[#1e3a8a]"></div>
        
        {timelineCovers.map((cover, index) => (
          <motion.div 
            key={cover.id}
            className={`relative flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? 'sm:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="sm:w-1/2 flex justify-center sm:justify-end sm:pr-8">
              <Link 
                to={`/cover/${cover.id}`}
                className="block bg-[#132347] rounded-lg overflow-hidden border border-[#1e3a8a] hover:border-[#00eeff] transition-all duration-200 w-64 h-64 lg:w-80 lg:h-80"
              >
                <img 
                  src={cover.imageUrl} 
                  alt={cover.title} 
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
            
            <div className="sm:w-1/2 sm:pl-8 mt-4 sm:mt-0 text-center sm:text-left">
              <div className="bg-[#132347] rounded-lg p-6 border border-[#1e3a8a] inline-block">
                <div className="absolute left-0 sm:left-1/2 transform -translate-y-1/2 sm:-translate-x-1/2 w-8 h-8 bg-[#00eeff] rounded-full flex items-center justify-center shadow-glow">
                  <span className="text-[#0a1128] font-bold text-sm">{cover.year}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{cover.title}</h3>
                <p className="text-gray-400 mb-3">{cover.magazineName}</p>
                <p className="text-gray-300 mb-4">{cover.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cover.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="bg-[#0a1128] text-xs px-2 py-1 rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;