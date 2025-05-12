import React, { useState, useEffect } from 'react';
import { covers } from '../data/covers';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

interface SlideshowProps {
  onClose: () => void;
  initialIndex?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % covers.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + covers.length) % covers.length);
  };
  
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') {
        setIsFullscreen(false);
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onClose]);
  
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };
  
  const currentCover = covers[currentIndex];
  
  return (
    <div className="fixed inset-0 bg-[#0a1128] z-50 flex items-center justify-center">
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-full bg-[#132347] text-[#00eeff] hover:bg-[#1e3a8a] transition-colors"
        >
          {isFullscreen ? <X /> : <Maximize2 />}
        </button>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-[#132347] text-[#00eeff] hover:bg-[#1e3a8a] transition-colors"
        >
          <X />
        </button>
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 z-30 p-2 rounded-full bg-[#132347] text-[#00eeff] hover:bg-[#1e3a8a] transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 z-30 p-2 rounded-full bg-[#132347] text-[#00eeff] hover:bg-[#1e3a8a] transition-colors"
      >
        <ChevronRight size={24} />
      </button>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="relative">
            <div className="bg-[#132347] rounded-lg overflow-hidden border border-[#1e3a8a]">
              <img
                src={currentCover.imageUrl}
                alt={currentCover.title}
                className="w-full h-auto"
              />
            </div>
            
            <div className="mt-6 bg-[#132347] rounded-lg p-6 border border-[#1e3a8a]">
              <h2 className="text-2xl font-bold mb-2">{currentCover.title}</h2>
              <div className="flex items-center text-gray-400 mb-4">
                <span>{currentCover.magazineName}</span>
                <span className="mx-2">•</span>
                <span>{currentCover.year}</span>
              </div>
              <p className="text-gray-300">{currentCover.description}</p>
            </div>
          </div>
          
          <div className="bg-[#132347] rounded-lg p-6 border border-[#1e3a8a]">
            <h3 className="text-xl font-bold mb-6 text-[#00eeff]">Analysis</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 text-white">Visual Observation</h4>
                <p className="text-gray-300">{currentCover.analysis.observation}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-white">AI Depiction</h4>
                <p className="text-gray-300">{currentCover.analysis.aiDepiction}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-white">Cultural Context</h4>
                <p className="text-gray-300">{currentCover.analysis.culturalContext}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-white">Kestral's Reflection</h4>
                <p className="text-gray-300">{currentCover.analysis.aiReflection}</p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-2">
              {currentCover.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-[#0a1128] text-xs px-3 py-1.5 rounded-full text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {covers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#00eeff]' : 'bg-[#132347]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;