import React from 'react';
import { covers } from '../data/covers';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Tag as TagIcon } from 'lucide-react';

const Tags: React.FC = () => {
  const navigate = useNavigate();
  
  // Extract all unique tags and count occurrences
  const tagCounts: Record<string, number> = {};
  covers.forEach(cover => {
    cover.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  
  // Convert to array and sort by count
  const sortedTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count }));
  
  // Calculate tag size based on frequency (for tag cloud effect)
  const getTagSize = (count: number): string => {
    const max = Math.max(...Object.values(tagCounts));
    const min = Math.min(...Object.values(tagCounts));
    const range = max - min || 1;
    const percentage = (count - min) / range;
    
    if (percentage > 0.8) return 'text-2xl';
    if (percentage > 0.6) return 'text-xl';
    if (percentage > 0.4) return 'text-lg';
    if (percentage > 0.2) return 'text-base';
    return 'text-sm';
  };
  
  const handleTagClick = (tag: string) => {
    navigate('/gallery'); // Navigate to gallery and then apply the filter
    // We'd need to lift state up to make this properly filter the gallery
  };
  
  return (
    <div className="max-w-5xl mx-auto">
      <motion.h1 
        className="text-3xl font-bold mb-8 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Curatorial Tags
      </motion.h1>
      
      <motion.p
        className="text-gray-300 mb-10 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore the exhibition through thematic tags that categorize how artificial intelligence has been imagined, feared, and celebrated throughout the pulp science fiction era.
      </motion.p>
      
      <motion.div
        className="bg-[#132347] rounded-lg p-8 border border-[#1e3a8a] mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center mb-6">
          <TagIcon className="h-6 w-6 text-[#00eeff] mr-3" />
          <h2 className="text-2xl font-semibold">Tag Cloud</h2>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {sortedTags.map(({ tag, count }, index) => (
            <motion.button
              key={tag}
              onClick={() => handleTagClick(tag)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`${getTagSize(count)} px-4 py-2 rounded-full bg-[#0a1128] hover:bg-[#1e3a8a] text-gray-300 hover:text-white transition-colors duration-200`}
              title={`${count} covers with this tag`}
            >
              {tag} <span className="text-xs text-gray-400">({count})</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-[#132347] p-6 rounded-lg border border-[#1e3a8a]">
          <h3 className="text-xl font-semibold mb-4 text-[#00eeff]">AI Archetypes</h3>
          <ul className="space-y-3">
            <li className="text-gray-300">• Machine Consciousness</li>
            <li className="text-gray-300">• Robot Servant</li>
            <li className="text-gray-300">• Metal Colossus</li>
            <li className="text-gray-300">• Artificial Identity</li>
            <li className="text-gray-300">• Silicon Sentience</li>
          </ul>
        </div>
        
        <div className="bg-[#132347] p-6 rounded-lg border border-[#1e3a8a]">
          <h3 className="text-xl font-semibold mb-4 text-[#00eeff]">Human Reactions</h3>
          <ul className="space-y-3">
            <li className="text-gray-300">• Technofear</li>
            <li className="text-gray-300">• Chrome Utopia</li>
            <li className="text-gray-300">• Extinction Anxiety</li>
            <li className="text-gray-300">• Technological Domesticity</li>
            <li className="text-gray-300">• Cold War Anxiety</li>
          </ul>
        </div>
        
        <div className="bg-[#132347] p-6 rounded-lg border border-[#1e3a8a]">
          <h3 className="text-xl font-semibold mb-4 text-[#00eeff]">AI Evolution</h3>
          <ul className="space-y-3">
            <li className="text-gray-300">• Machine Inheritance</li>
            <li className="text-gray-300">• Post-Human</li>
            <li className="text-gray-300">• Technological Evolution</li>
            <li className="text-gray-300">• Role Reversal</li>
            <li className="text-gray-300">• Human Mimicry</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Tags;