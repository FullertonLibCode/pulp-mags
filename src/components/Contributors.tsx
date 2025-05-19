import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, BookOpen, BrainCircuit } from 'lucide-react';

const Contributors: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-white"
      >
        Exhibition Contributors
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#132347] rounded-lg p-6 border border-[#1e3a8a]"
        >
          <div className="flex items-center mb-4">
            <Building2 className="w-6 h-6 text-[#00eeff] mr-3" />
            <h2 className="text-xl font-semibold">Host Institution</h2>
          </div>
          <p className="text-gray-300 mb-4">
            University Archives and Special Collections (UA&SC)
          </p>
          <p className="text-gray-300">
            This exhibition draws from the extensive pulp science fiction magazine collection
            housed at the University Archives and Special Collections (UA&SC).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#132347] rounded-lg p-6 border border-[#1e3a8a]"
        >
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-[#00eeff] mr-3" />
            <h2 className="text-xl font-semibold">Collection Information</h2>
          </div>
          <p className="text-gray-300">
            The materials featured in this exhibition are part of the Science Fiction
            Collection at the University Archives and Special Collections (UA&SC),
            which includes one of the largest collections of science fiction magazines
            in North America.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-[#132347] rounded-lg p-6 border border-[#1e3a8a] mb-12"
      >
        <div className="flex items-center mb-6">
          <Users className="w-6 h-6 text-[#00eeff] mr-3" />
          <h2 className="text-xl font-semibold">Project Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-[#0a1128] rounded-lg">
            <h3 className="font-semibold text-[#00eeff] mb-2">Curators</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Dr. Sarah Martinez</li>
              <li>Prof. James Chen</li>
              <li>Dr. Emily Rodriguez</li>
            </ul>
          </div>
          <div className="p-4 bg-[#0a1128] rounded-lg">
            <h3 className="font-semibold text-[#00eeff] mb-2">Digital Development</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Michael Thompson</li>
              <li>Dr. Lisa Wong</li>
              <li>Alex Rivera</li>
            </ul>
          </div>
          <div className="p-4 bg-[#0a1128] rounded-lg">
            <h3 className="font-semibold text-[#00eeff] mb-2">Special Collections</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Katherine Brown</li>
              <li>Robert Martinez</li>
              <li>Dr. David Lee</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-[#132347] rounded-lg p-6 border border-[#1e3a8a]"
      >
        <div className="flex items-center mb-6">
          <BrainCircuit className="w-6 h-6 text-[#00eeff] mr-3" />
          <h2 className="text-xl font-semibold">About Kestral</h2>
        </div>
        <p className="text-gray-300 mb-4">
          Kestral is an AI curator specifically designed for this exhibition,
          trained to analyze and interpret visual representations of artificial
          intelligence in pulp science fiction magazine covers.
        </p>
        <p className="text-gray-300">
          Through Kestral's unique perspective, we explore how human imagination
          shaped the development of AI concepts throughout the 20th century,
          creating a dialogue between historical speculation and contemporary
          artificial intelligence.
        </p>
      </motion.div>
    </div>
  );
};

export default Contributors;