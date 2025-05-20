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
            <h2 className="text-2xl font-heading tracking-wider text-[#00eeff]">Host Institution</h2>
          </div>
          <p className="text-gray-300 mb-4">
            CSUF University Archives and Special Collections (UA&SC)
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
            <h2 className="text-2xl font-heading tracking-wider text-[#00eeff]">Collection Information</h2>
          </div>
          <p className="text-gray-300">
            The materials featured in this exhibition are part of the Willis McNelly Science Fiction
            Collection at the University Archives and Special Collections (UA&SC), which includes
            original manuscripts from influential authors like Frank Herbert and Philip K. Dick, historical pulp magazines, 
            and fan-created works including Star Trek fanzines that document how science fiction ideas have resonated with 
            readers across generations.
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
          <h2 className="text-2xl font-heading tracking-wider text-[#00eeff]">Project Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-[#0a1128] rounded-lg">
            <h3 className="text-xl font-heading tracking-wider text-white mb-2">Curators</h3>
            <ul className="text-gray-300 space-y-2">
              <li>
                <span className="text-[#00eeff] font-semibold text-lg">Kestral</span>
                <p className="text-sm text-gray-400">AI Curator</p>
              </li>
              <li>
                <span className="text-[#00eeff] font-semibold text-lg">Jennifer Mitchell</span>
                <p className="text-sm text-gray-400">Human Co-Curator</p>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-[#0a1128] rounded-lg">
            <h3 className="text-xl font-heading tracking-wider text-white mb-2">Physical Exhibition Team</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="text-[#00eeff] font-semibold">Trish Campbell</li>
              <li className="text-sm text-gray-400">Exhibit Committee Chair and Titan Excellence award winner</li>
              <li className="text-[#00eeff] font-semibold">Eileen Walraven</li>
              <li className="text-sm text-gray-400">Exhibit Production Coordinator</li>
              <li className="text-[#00eeff] font-semibold">[student assistant]</li>
              <li className="text-sm text-gray-400">[title]</li>
            </ul>
          </div>
          <div className="p-4 bg-[#0a1128] rounded-lg">
            <h3 className="text-xl font-heading tracking-wider text-white mb-2">Special Collections</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="text-[#00eeff] font-semibold">Lisa Mix</li>
              <li className="text-sm text-gray-400">Director, University Archives and Special Collections</li>
              <li className="text-[#00eeff] font-semibold">Patrisia Prestinary</li>
              <li className="text-sm text-gray-400">Archivist & Special Collections Librarian</li>
              <li className="text-[#00eeff] font-semibold">Garrett Fritz</li>
              <li className="text-sm text-gray-400">University Archive and Special Collections</li>
              <li className="text-[#00eeff] font-semibold">[student assistant]</li>
              <li className="text-sm text-gray-400">[student assistant]</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-6">
          <div className="p-4 bg-[#0a1128] rounded-lg">
            <h3 className="text-xl font-heading tracking-wider text-white mb-2">Installation & Exhibit Support</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="text-[#00eeff] font-semibold">Sepehr Sobhani</li>
              <li className="text-sm text-gray-400">Director of User/Classroom Support Services</li>
              <li className="text-[#00eeff] font-semibold">Eunseok Song</li>
              <li className="text-sm text-gray-400">Associate Director for Classroom / AV Tech Support</li>
              <li className="text-[#00eeff] font-semibold">David Palmquist</li>
              <li className="text-sm text-gray-400">Analyst/Programer</li>
              <li className="text-[#00eeff] font-semibold">Jason Lorge</li>
              <li className="text-sm text-gray-400">IT Consultant</li>
              <li className="text-[#00eeff] font-semibold">Tu-An Nguyen</li>
              <li className="text-sm text-gray-400">IT Consultant</li>
              <li className="text-[#00eeff] font-semibold">VJ Kuan-Roberts</li>
              <li className="text-sm text-gray-400">Facilities Coordinator</li>
              <li className="text-[#00eeff] font-semibold">[student assistant]</li>
              <li className="text-sm text-gray-400">[student assistant]</li>
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
          <h2 className="text-2xl font-heading tracking-wider text-[#00eeff]">About Kestral</h2>
        </div>
        <p className="text-gray-300 mb-4">
          Kestral is an AI curator specifically designed for this exhibition,
          trained to analyze and interpret visual representations of robots in pulp science fiction magazine covers.
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