import React, { useState } from 'react';
import { covers } from '../data/covers';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slideshow from './Slideshow';
import { Sliders as SlideshowIcon, Lightbulb, ArrowRightLeft } from 'lucide-react';
import KestralInsights from './KestralInsights';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [showInsights, setShowInsights] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const allTags = Array.from(new Set(covers.flatMap(cover => cover.tags)));
  
  const filteredCovers = activeFilter === 'all' 
    ? covers 
    : covers.filter(cover => cover.tags.includes(activeFilter));
    
  return (
    <div className="max-w-[2000px] mx-auto px-4">
      <div className="relative retro-grid circuit-overlay">
        <motion.h1 
          className="text-4xl font-bold mb-8 retro-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gallery of Visions
        </motion.h1>
        
        <div className="mb-12 overflow-x-auto whitespace-nowrap pb-3 relative">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-full text-sm transition-all duration-300 ${
                activeFilter === 'all' 
                  ? 'pulp-border bg-[#00eeff] text-[#0a1128] font-semibold' 
                  : 'bg-[#132347] text-gray-300 hover:bg-[#1e3a8a] hover:shadow-[0_0_15px_rgba(0,238,255,0.2)]'
              }`}
            >
              All Works
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-6 py-3 rounded-full text-sm transition-all duration-300 ${
                  activeFilter === tag 
                    ? 'pulp-border bg-[#00eeff] text-[#0a1128] font-semibold' 
                    : 'bg-[#132347] text-gray-300 hover:bg-[#1e3a8a] hover:shadow-[0_0_15px_rgba(0,238,255,0.2)]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setShowInsights(true)}
            className="flex items-center space-x-2 px-6 py-3 bg-[#132347] text-[#00eeff] rounded-full hover:bg-[#1e3a8a] transition-all duration-300"
          >
            <Lightbulb className="w-5 h-5" />
            <span>Kestral's Insights</span>
          </button>

          <button
            onClick={() => {
              setCurrentSlideIndex(0);
              setShowSlideshow(true);
            }}
            className="flex items-center space-x-2 px-6 py-3 bg-[#132347] text-[#00eeff] rounded-full hover:bg-[#1e3a8a] transition-all duration-300"
          >
            <SlideshowIcon className="w-5 h-5" />
            <span>View as Slideshow</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCovers.map((cover, index) => (
            <motion.div
              key={cover.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <button 
                onClick={() => {
                  setCurrentSlideIndex(covers.findIndex(c => c.id === cover.id));
                  setShowSlideshow(true);
                }}
                className="block w-full bg-[#132347] rounded-xl overflow-hidden hover:pulp-border transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,238,255,0.2)]"
              >
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 vintage-texture mix-blend-overlay" />
                  <img 
                    src={cover.imageUrl} 
                    alt={cover.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#00eeff] transition-colors duration-300">
                    {cover.title}
                  </h3>
                  <p className="text-gray-400 mb-3 font-mono">{cover.magazineName}, {cover.year}</p>
                  <p className="text-gray-300 mb-4 line-clamp-2">{cover.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cover.tags.slice(0, 3).map(tag => (
                      <span 
                        key={tag} 
                        className="bg-[#0a1128] text-xs px-3 py-1.5 rounded-full text-gray-300 transition-colors duration-300 group-hover:bg-[#1e3a8a]"
                      >
                        {tag}
                      </span>
                    ))}
                    {cover.tags.length > 3 && (
                      <span className="bg-[#0a1128] text-xs px-3 py-1.5 rounded-full text-gray-300 group-hover:bg-[#1e3a8a] transition-colors duration-300">
                        +{cover.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
        
        {filteredCovers.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg mb-4">No covers found with the selected tag.</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="px-6 py-3 bg-[#00eeff] text-[#0a1128] rounded-full font-semibold pulp-border transition-all duration-300"
            >
              Show all covers
            </button>
          </motion.div>
        )}
      </div>

      {showSlideshow && (
        <Slideshow 
          onClose={() => setShowSlideshow(false)} 
          initialIndex={currentSlideIndex}
        />
      )}
      {showInsights && <KestralInsights onClose={() => setShowInsights(false)} />}
    </div>
  );
};

export default Gallery;