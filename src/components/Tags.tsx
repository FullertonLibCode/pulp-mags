import React from 'react';
import { covers } from '../data/covers';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Tag as TagIcon, Notebook as Robot, Globe, Palette, Brain, Users } from 'lucide-react';

const Tags: React.FC = () => {
  const navigate = useNavigate();
  
  // Extract all unique tags and count occurrences
  const tagCounts: Record<string, number> = {};
  covers.forEach(cover => {
    cover.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  // Tag categories with their respective tags
  const tagCategories = {
    'Robot Types': {
      icon: <Robot className="w-6 h-6 text-[#00eeff] mr-3" />,
      tags: ['Humanoid Robot(s)', 'Non-Humanoid Robot(s)', 'Giant Robot(s)', 'Tentacled Robot(s)', 'Cyclopean Robot(s)', 'Service Robot(s)','Cybernetic / Hybrid Robot(s)', 'Miniature Robot(s)', 'Self-Repairing Robot(s)', 'Solider Robot(s)', 'Law Enforcement Robot(s)']
    },
    'Settings & Environments': {
      icon: <Globe className="w-6 h-6 text-[#00eeff] mr-3" />,
      tags: ['Space', 'Laboratory', 'Urban', 'Industrial', 'Alien World', 'Underground', 'Ocean', 'Desert', 'Arctic']
    },
    'Visual Elements': {
      icon: <Palette className="w-6 h-6 text-[#00eeff] mr-3" />,
      tags: ['Metallic', 'Glowing', 'Geometric', 'Organic', 'Retro-Futuristic', 'Art Deco', 'Minimalist']
    },
    'Themes & Concepts': {
      icon: <Brain className="w-6 h-6 text-[#00eeff] mr-3" />,
      tags: ['Artificial Intelligence', 'Machine Consciousness', 'Technological Evolution', 'Human-Robot Interaction', 'Singularity']
    },
    'Human Elements': {
      icon: <Users className="w-6 h-6 text-[#00eeff] mr-3" />,
      tags: ['Scientists', 'Explorers', 'Military', 'Civilians', 'Children']
    }
  };
  
  const handleTagClick = (tag: string) => {
    navigate(`/gallery?tag=${encodeURIComponent(tag)}`);
  };
  
  return (
    <div className="max-w-5xl mx-auto">
      <motion.h1 
        className="text-3xl font-bold mb-8 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Thematic Tags
      </motion.h1>
      
      <motion.p
        className="text-gray-300 mb-10 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore the exhibition through thematic tags that show how robots have been imagined, feared, and celebrated throughout the pulp science fiction era.
      </motion.p>
      
      <motion.div
        className="bg-[#132347] rounded-lg p-8 border border-[#1e3a8a] mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center mb-6">
          <TagIcon className="h-6 w-6 text-[#00eeff] mr-3" />
          <h2 className="text-2xl font-semibold">Popular Tags</h2>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {Object.entries(tagCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 12)
            .map(([tag, count], index) => (
              <motion.button
                key={tag}
                onClick={() => handleTagClick(tag)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-[#0a1128] hover:bg-[#1e3a8a] text-gray-300 hover:text-white transition-colors duration-200"
                title={`${count} covers with this tag`}
              >
                {tag} <span className="text-xs text-gray-400">({count})</span>
              </motion.button>
          ))}
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(tagCategories).map(([category, { icon, tags }], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            className="bg-[#132347] p-6 rounded-lg border border-[#1e3a8a]"
          >
            <div className="flex items-center mb-4">
              {icon}
              <h3 className="text-xl font-semibold text-[#00eeff]">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className="px-3 py-1.5 bg-[#0a1128] rounded-full text-sm text-gray-300 hover:bg-[#1e3a8a] hover:text-white transition-colors duration-200"
                >
                  {tag}
                  {tagCounts[tag] && <span className="text-xs text-gray-400 ml-1">({tagCounts[tag]})</span>}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tags;