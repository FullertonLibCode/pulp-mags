import React, { useState, useEffect } from 'react';
import { covers } from '../data/covers';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X, BrainCircuit, Eye, History, Globe, BookOpen } from 'lucide-react';

interface SlideshowProps {
  onClose: () => void;
  initialIndex?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('Observations');
  
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

  const sections = [
    { 
      id: 'Observations', 
      label: 'Summary & Analysis', 
      icon: <Eye className="w-5 h-5" />,
      description: 'Identification of notable features, patterns, or unique elements that distinguish this cover within robot pulp art.'
    },
    { 
      id: 'VisualDesignElements', 
      label: 'Design Elements', 
      icon: <BrainCircuit className="w-5 h-5" />,
      description: 'Technical analysis of artistic choices including color palette, composition, perspective, and proportion.'
    },
    { 
      id: 'aiReflection', 
      label: 'Kestral\'s Reflection', 
      icon: <BrainCircuit className="w-5 h-5" />,
      description: 'Personal insights from an AI perspective on this creative representation.'
    }
  ];

  const getAnalysisContent = (sectionId: string) => {
    const content = currentCover.analysis[sectionId as keyof typeof currentCover.analysis];
    if (!content) {
      return currentCover.analysis.Observations || "Analysis coming soon...";
    }
    return content;
  };
  
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
            
            <div className="flex overflow-x-auto whitespace-nowrap mb-6 pb-2">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm mr-2 transition-colors duration-200 ${
                    activeSection === section.id
                      ? 'bg-[#00eeff] text-[#0a1128] font-semibold'
                      : 'bg-[#0a1128] text-gray-300 hover:bg-[#1e3a8a]'
                  }`}
                >
                  {section.icon}
                  <span className="ml-2">{section.label}</span>
                </button>
              ))}
            </div>
            
            <div className="space-y-6">
              {sections.map(section => (
                <div
                  key={section.id}
                  className={`${activeSection === section.id ? 'block' : 'hidden'}`}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-lg font-semibold mb-2 text-white">{section.label}</h4>
                    <p className="text-sm text-gray-400 mb-4">{section.description}</p>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-200 leading-relaxed">
                        {getAnalysisContent(section.id)}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-[#1e3a8a]">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#00eeff] flex items-center justify-center text-[#0a1128] font-bold">K</div>
                <div className="ml-3">
                  <h3 className="text-[#00eeff] font-semibold">KESTRAL</h3>
                  <p className="text-sm text-gray-400">AI Curator & Analyst</p>
                </div>
              </div>
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