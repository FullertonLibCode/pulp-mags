import React, { useState, useEffect } from 'react';
import { covers } from '../data/covers';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Slideshow from './Slideshow';
import { Sliders as SlideshowIcon, Lightbulb, BookOpen, X } from 'lucide-react';
import KestralInsights from './KestralInsights';
import Insights from './Insights';

const Gallery: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [showInsights, setShowInsights] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [lastFocusedElement, setLastFocusedElement] = useState<HTMLElement | null>(null);
  
  const allTags = Array.from(new Set(covers.flatMap(cover => cover.tags)));
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tagParam = params.get('tag');
    if (tagParam) {
      setActiveFilter(tagParam);
    }

    if (location.state?.openInsights) {
      setShowInsights(true);
      window.history.replaceState({}, document.title);
    }

    if (location.state?.openAnalysis) {
      setShowAnalysis(true);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  useEffect(() => {
    if (showInsights || showAnalysis) {
      setLastFocusedElement(document.activeElement as HTMLElement);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      if (lastFocusedElement) {
        lastFocusedElement.focus();
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showInsights, showAnalysis, lastFocusedElement]);

  const handleFilterChange = (tag: string) => {
    setActiveFilter(tag);
    if (tag === 'all') {
      navigate('/gallery');
    } else {
      navigate(`/gallery?tag=${encodeURIComponent(tag)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (showAnalysis) setShowAnalysis(false);
      if (showInsights) setShowInsights(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showAnalysis, showInsights]);

  const getAltText = (cover: typeof covers[0]) => {
    return `Cover of ${cover.magazineName} ${cover.year} depicting ${cover.description}`;
  };
    
  const filteredCovers = activeFilter === 'all' 
    ? covers 
    : covers.filter(cover => cover.tags.includes(activeFilter));

  const openInsights = () => {
    setShowInsights(true);
  };

  const closeInsights = () => {
    setShowInsights(false);
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  const openAnalysis = () => {
    setShowAnalysis(true);
  };

  const closeAnalysis = () => {
    setShowAnalysis(false);
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };
    
  return (
    <div className="max-w-[2000px] mx-auto px-4" data-component="gallery">
      <div className="relative retro-grid circuit-overlay">
        <motion.h1 
          className="text-4xl font-bold mb-8 retro-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gallery of Visions
        </motion.h1>
        
        <div 
          className="mb-12 overflow-x-auto pb-3 relative"
          role="region" 
          aria-label="Gallery filters"
        >
          <div className="flex items-center space-x-2 min-w-max">
            <button
              onClick={() => handleFilterChange('all')}
              onKeyDown={(e) => handleKeyPress(e, () => handleFilterChange('all'))}
              aria-pressed={activeFilter === 'all'}
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
                onClick={() => handleFilterChange(tag)}
                onKeyDown={(e) => handleKeyPress(e, () => handleFilterChange(tag))}
                aria-pressed={activeFilter === tag}
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

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={openInsights}
              onKeyDown={(e) => handleKeyPress(e, openInsights)}
              className="flex items-center space-x-2 px-6 py-3 bg-[#132347] text-[#00eeff] rounded-full hover:bg-[#1e3a8a] transition-all duration-300"
              aria-label="Open Kestral's Narrative Insights"
            >
              <Lightbulb className="w-5 h-5" aria-hidden="true" />
              <span>Kestral's Insights:</span>
              <span className="text-sm text-gray-300">Narrative Reflections</span>
            </button>

            <button
              onClick={openAnalysis}
              onKeyDown={(e) => handleKeyPress(e, openAnalysis)}
              className="flex items-center space-x-2 px-6 py-3 bg-[#132347] text-[#00eeff] rounded-full hover:bg-[#1e3a8a] transition-all duration-300"
              aria-label="Open Kestral's Visual Analysis"
            >
              <BookOpen className="w-5 h-5" aria-hidden="true" />
              <span>Kestral's Analysis:</span>
              <span className="text-sm text-gray-300">Visual Language</span>
            </button>
          </div>

          <button
            onClick={() => {
              setCurrentSlideIndex(0);
              setShowSlideshow(true);
            }}
            onKeyDown={(e) => handleKeyPress(e, () => {
              setCurrentSlideIndex(0);
              setShowSlideshow(true);
            })}
            className="flex items-center space-x-2 px-6 py-3 bg-[#132347] text-[#00eeff] rounded-full hover:bg-[#1e3a8a] transition-all duration-300"
            aria-label="View gallery as slideshow"
          >
            <SlideshowIcon className="w-5 h-5" aria-hidden="true" />
            <span>View as Slideshow</span>
          </button>
        </div>
        
        <ul 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          role="list"
          aria-label="Gallery covers"
        >
          {filteredCovers.map((cover, index) => (
            <li
              key={cover.id}
              className="relative group h-full"
            >
              <button
                tabIndex={0}
                className="block w-full h-full bg-[#132347] rounded-xl overflow-hidden hover:pulp-border transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,238,255,0.2)]"
                onClick={() => {
                  setCurrentSlideIndex(covers.findIndex(c => c.id === cover.id));
                  setShowSlideshow(true);
                }}
                onKeyDown={(e) => handleKeyPress(e, () => {
                  setCurrentSlideIndex(covers.findIndex(c => c.id === cover.id));
                  setShowSlideshow(true);
                })}
                aria-label={`View ${cover.title} in slideshow`}
              >
                <div
                  tabIndex={-1}
                  className="w-full h-full flex flex-col text-left focus:outline-none rounded-xl"
                >
                  <div className="relative pt-[133%] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 vintage-texture mix-blend-overlay" />
                    <img 
                      src={cover.imageUrl} 
                      alt={getAltText(cover)} 
                      className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#00eeff] transition-colors duration-300">
                      {cover.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2 font-mono">{cover.magazineName}, {cover.year}</p>
                    <p className="text-sm text-gray-300 mb-3">{cover.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cover.tags.map(tag => (
                        <button 
                          key={tag}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFilterChange(tag);
                          }}
                          onKeyDown={(e) => {
                            e.stopPropagation();
                            handleKeyPress(e, () => handleFilterChange(tag));
                          }}
                          className="bg-[#0a1128] text-xs px-2 py-1 rounded-full text-gray-300 transition-colors duration-300 hover:bg-[#1e3a8a] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00eeff] focus:ring-offset-2 focus:ring-offset-[#0a1128]"
                          aria-label={`Filter by ${tag}`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
        
        {filteredCovers.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg mb-4">No covers found with the selected tag.</p>
            <button
              onClick={() => handleFilterChange('all')}
              onKeyDown={(e) => handleKeyPress(e, () => handleFilterChange('all'))}
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

      {showInsights && (
        <KestralInsights onClose={closeInsights} />
      )}

      {showAnalysis && (
        <Insights 
          onClose={closeAnalysis}
          isOpen={showAnalysis}
        />
      )}
    </div>
  );
};

export default Gallery;