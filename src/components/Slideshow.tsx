import React, { useState, useEffect, useRef } from 'react';
import { covers } from '../data/covers';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, BrainCircuit, Eye, History, Globe, BookOpen, MapPin } from 'lucide-react';
import ExhibitionGuide from './ExhibitionGuide';

interface SlideshowProps {
  onClose: () => void;
  initialIndex?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [activeSection, setActiveSection] = useState<string>('Observations');
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  
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
      if (e.key === 'Escape' && !isGuideOpen) onClose();
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onClose, isGuideOpen]);

  useEffect(() => {
    if (!modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [currentIndex]);
  
  const currentCover = covers[currentIndex];

  const getAltText = (cover: typeof covers[0]) => {
    return `Cover of ${cover.magazineName} ${cover.year} depicting ${cover.description}`;
  };

  const sections = [
    { 
      id: 'Observations', 
      label: 'Image Description', 
      icon: <Eye className="w-5 h-5 shrink-0" />,
      description: 'Brief overview highlighting the primary action, key figures, and notable visual elements.'
    },
    { 
      id: 'VisualDesignElements', 
      label: 'Design Elements', 
      icon: <BrainCircuit className="w-5 h-5 shrink-0" />,
      description: 'Technical analysis of artistic choices including color palette, composition, perspective, and proportion.'
    },
    { 
      id: 'aiReflection', 
      label: 'Kestral\'s Reflection', 
      icon: <BrainCircuit className="w-5 h-5 shrink-0" />,
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

  const handleGuideClick = () => {
    setIsGuideOpen(true);
  };

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };
  
  return (
    <>
      <div 
        className="fixed inset-0 bg-[#0a1128]/95 z-50 flex items-center justify-center"
        role="dialog"
        aria-modal="true"
        aria-labelledby="slideshow-title"
        ref={modalRef}
      >
        <div className="absolute top-4 right-4 z-50">
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#132347] text-[#00eeff] hover:bg-[#1e3a8a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00eeff] touch-action-manipulation"
            aria-label="Close slideshow"
          >
            <X className="w-5 h-5" />
            <span className="hidden sm:inline">Exit Image Gallery</span>
          </button>
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-4 z-30 p-3 rounded-full bg-[#132347] text-[#00eeff] hover:bg-[#1e3a8a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00eeff] touch-action-manipulation"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 z-30 p-3 rounded-full bg-[#132347] text-[#00eeff] hover:bg-[#1e3a8a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00eeff] touch-action-manipulation"
          aria-label="Next image"
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
            className="w-full max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 h-screen overflow-y-auto"
          >
            <div className="relative">
              <div className="sticky top-4">
                <div className="bg-[#132347] rounded-lg overflow-hidden border border-[#1e3a8a]">
                  <img
                    src={currentCover.imageUrl}
                    alt={getAltText(currentCover)}
                    className="w-full h-auto"
                    loading="eager"
                  />
                </div>
                
                <div className="mt-6 bg-[#132347] rounded-lg p-6 border border-[#1e3a8a]">
                  <h2 id="slideshow-title" className="text-2xl font-bold mb-2">{currentCover.title}</h2>
                  <div className="flex items-center text-gray-400 mb-4">
                    <span>{currentCover.magazineName}</span>
                    <span className="mx-2">•</span>
                    <span>{currentCover.year}</span>
                  </div>
                  <p className="text-gray-300">{currentCover.description}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#132347] rounded-lg p-6 border border-[#1e3a8a] h-fit">
              <h3 className="text-xl font-bold mb-6 text-[#00eeff]">Analysis</h3>
              
              <div 
                ref={tabsContainerRef}
                className="flex flex-wrap gap-2 mb-6"
                role="tablist"
                aria-label="Analysis sections"
              >
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionChange(section.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSectionChange(section.id);
                      }
                    }}
                    role="tab"
                    aria-selected={activeSection === section.id}
                    aria-controls={`panel-${section.id}`}
                    className={`flex items-center px-4 py-2 rounded-full text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#00eeff] touch-action-manipulation ${
                      activeSection === section.id
                        ? 'bg-[#00eeff] text-[#0a1128] font-semibold'
                        : 'bg-[#0a1128] text-gray-300 hover:bg-[#1e3a8a]'
                    }`}
                  >
                    {section.icon}
                    <span className="ml-2 whitespace-normal">{section.label}</span>
                  </button>
                ))}
              </div>
              
              <div className="space-y-6">
                {sections.map(section => (
                  <div
                    key={section.id}
                    id={`panel-${section.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${section.id}`}
                    className={`${activeSection === section.id ? 'block' : 'hidden'}`}
                    tabIndex={0}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-lg font-semibold mb-2 text-white">{section.label}</h4>
                      <p className="text-sm text-gray-400 mb-4">{section.description}</p>
                      <div className="prose prose-invert max-w-none">
                        <p className="text-gray-200 leading-relaxed whitespace-pre-line break-words">
                          {getAnalysisContent(section.id)}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-[#1e3a8a]">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#00eeff] flex items-center justify-center text-[#0a1128] font-bold">K</div>
                    <div className="ml-3">
                      <h3 className="text-[#00eeff] font-semibold">KESTRAL</h3>
                      <p className="text-sm text-gray-400">AI Curator</p>
                    </div>
                  </div>
                  <button
                    onClick={handleGuideClick}
                    className="flex items-center gap-2 text-[#00eeff] hover:text-[#00bfcc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00eeff] rounded-lg px-2 py-1 touch-action-manipulation"
                    aria-label="Open Exhibition Guide"
                  >
                    <MapPin className="w-5 h-5 shrink-0" />
                    <span>Exhibition Guide</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 w-full max-w-[95%] overflow-x-hidden justify-center"
          role="navigation"
          aria-label="Image navigation"
        >
          {covers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`lg:block hidden shrink-0 min-h-7 min-w-0 w-3 h-3.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#00eeff] border border-[#1e3a8a] touch-action-manipulation ${
                index === currentIndex ? 'bg-[#00eeff]' : 'bg-[#132347]'
              }`}
              aria-label={`Go to image ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>

      <ExhibitionGuide 
        isOpen={isGuideOpen} 
        onClose={() => {
          setIsGuideOpen(false);
          onClose();
        }} 
      />
    </>
  );
};

export default Slideshow;