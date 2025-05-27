import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { covers } from '../data/covers';
import { Cover } from '../types';
import { motion } from 'framer-motion';
import { ArrowLeft, Tag, Clock, BookOpen, BrainCircuit, Globe, MapPin } from 'lucide-react';
import ExhibitionGuide from './ExhibitionGuide';

const CoverDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [cover, setCover] = useState<Cover | null>(null);
  const [activeSection, setActiveSection] = useState<string>('Observations');
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const isFromTimeline = location.state?.from === 'timeline';
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const selectedCover = covers.find(c => c.id === id);
    if (selectedCover) {
      setCover(selectedCover);
      window.scrollTo(0, 0);
    } else {
      navigate('/gallery');
    }
  }, [id, navigate]);
  
  if (!cover) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[#00eeff]">Loading...</div>
      </div>
    );
  }

  const getAltText = (cover: Cover) => {
    return `Cover of ${cover.magazineName} ${cover.year} depicting ${cover.description}`;
  };
  
  const sections = [
    { id: 'Observations', label: 'Image Description', icon: <BookOpen className="w-5 h-5" />, content: cover.analysis.Observations },
    { id: 'VisualDesignElements', label: 'Design Elements', icon: <BrainCircuit className="w-5 h-5" />, content: cover.analysis.VisualDesignElements },
    { id: 'aiReflection', label: 'Kestral\'s Reflection', icon: <BrainCircuit className="w-5 h-5" />, content: cover.analysis.aiReflection },    
  ];
  
  const handleBack = () => {
    if (isFromTimeline) {
      navigate('/timeline');
    } else {
      navigate('/gallery');
    }
  };

  const handleGuideClick = () => {
    setIsGuideOpen(true);
  };
  
  return (
    <>
      <div className="max-w-5xl mx-auto pb-16" ref={containerRef}>
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBack}
          className="flex items-center text-gray-300 hover:text-[#00eeff] mb-6 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to {isFromTimeline ? 'Timeline' : 'Gallery'}
        </motion.button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="sticky top-24">
              <div className="bg-[#132347] rounded-lg overflow-hidden border border-[#1e3a8a]">
                <img
                  src={cover.imageUrl}
                  alt={getAltText(cover)}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="mt-6 bg-[#132347] rounded-lg p-6 border border-[#1e3a8a]">
                <h1 className="text-2xl font-bold mb-2">{cover.title}</h1>
                <div className="flex items-center text-gray-400 mb-4">
                  <span>{cover.magazineName}</span>
                  <span className="mx-2">•</span>
                  <span>{cover.year}</span>
                </div>
                <p className="text-gray-300 mb-4">{cover.description}</p>
                
                <div className="flex items-center flex-wrap gap-2 mt-4">
                  <Tag className="w-4 h-4 text-[#00eeff] mr-1" />
                  {cover.tags.map(tag => (
                    <span key={tag} className="bg-[#0a1128] text-xs px-2 py-1 rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#132347] rounded-lg p-6 border border-[#1e3a8a]"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#00eeff]">Kestral's Analysis</h2>
            
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
            
            {sections.map(section => (
              <div
                key={section.id}
                className={`${activeSection === section.id ? 'block' : 'hidden'}`}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="prose prose-invert max-w-none"
                >
                  <p className="text-gray-200 leading-relaxed text-lg">{section.content}</p>
                </motion.div>
              </div>
            ))}
            
            <div className="mt-8 pt-8 border-t border-[#1e3a8a]">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#00eeff] flex items-center justify-center text-[#0a1128] font-bold">K</div>
                  <div className="ml-3">
                    <h3 className="text-[#00eeff] font-semibold">KESTRAL</h3>
                    <p className="text-sm text-gray-400">AI Curator</p>
                  </div>
                </div>
                <button
                  onClick={handleGuideClick}
                  className="flex items-center gap-2 text-[#00eeff] hover:text-[#00bfcc] transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Exhibition Guide</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ExhibitionGuide isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </>
  );
};

export default CoverDetail;