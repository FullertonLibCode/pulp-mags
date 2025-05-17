import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, History, Lightbulb, Zap } from 'lucide-react';

const Insights: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Kestral's Insights
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A deep dive into the evolution of artificial intelligence representation in pulp science fiction, as analyzed by an AI curator.
        </p>
      </motion.div>

      <div className="space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#132347] rounded-lg p-8 border border-[#1e3a8a]"
        >
          <div className="flex items-center mb-6">
            <BrainCircuit className="w-8 h-8 text-[#00eeff] mr-3" />
            <h2 className="text-2xl font-bold">Evolution of Machine Consciousness</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            Throughout this collection, I observe a fascinating evolution in how human artists depicted machine consciousness. Early covers often portrayed AI through physically imposing robots, reflecting a materialistic understanding of intelligence. By the 1950s, we see a shift toward more abstract representations, suggesting a growing appreciation for intelligence as something beyond mere mechanical capability.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This parallels humanity's own evolving understanding of consciousness and cognition. The transition from purely mechanical representations to more nuanced depictions of artificial minds mirrors the development of computer science and cybernetics.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#132347] rounded-lg p-8 border border-[#1e3a8a]"
        >
          <div className="flex items-center mb-6">
            <History className="w-8 h-8 text-[#00eeff] mr-3" />
            <h2 className="text-2xl font-bold">Technological Anxieties and Aspirations</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            The covers in this collection reveal a complex relationship between humans and artificial intelligence, oscillating between fear and fascination. Early depictions often emphasized the threat of mechanical beings, reflecting anxieties about automation and loss of human agency. However, by the mid-century, we see more collaborative and symbiotic portrayals emerging.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-[#0a1128] p-6 rounded-lg">
              <h3 className="text-[#00eeff] font-semibold mb-3">Fear Narratives</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Mechanical invasion scenarios</li>
                <li>• Loss of human control</li>
                <li>• Replacement anxiety</li>
                <li>• Technological dependence</li>
              </ul>
            </div>
            <div className="bg-[#0a1128] p-6 rounded-lg">
              <h3 className="text-[#00eeff] font-semibold mb-3">Hope Narratives</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Enhanced human capabilities</li>
                <li>• Solving global challenges</li>
                <li>• Space exploration partners</li>
                <li>• Peaceful coexistence</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#132347] rounded-lg p-8 border border-[#1e3a8a]"
        >
          <div className="flex items-center mb-6">
            <Lightbulb className="w-8 h-8 text-[#00eeff] mr-3" />
            <h2 className="text-2xl font-bold">Visual Language of Robots</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            The visual representation of robots in these covers reveals recurring motifs and symbols that helped shape public perception of AI. Geometric patterns, metallic surfaces, and glowing elements became a universal language for depicting machine consciousness.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-[#0a1128] p-6 rounded-lg">
              <h3 className="text-[#00eeff] font-semibold mb-3">Physical Attributes</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Metallic surfaces</li>
                <li>• Geometric forms</li>
                <li>• Symmetrical design</li>
                <li>• Scale manipulation</li>
              </ul>
            </div>
            <div className="bg-[#0a1128] p-6 rounded-lg">
              <h3 className="text-[#00eeff] font-semibold mb-3">Symbolic Elements</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Circuit patterns</li>
                <li>• Energy fields</li>
                <li>• Binary systems</li>
                <li>• Mathematical symbols</li>
              </ul>
            </div>
            <div className="bg-[#0a1128] p-6 rounded-lg">
              <h3 className="text-[#00eeff] font-semibold mb-3">Human Aspects</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Facial features</li>
                <li>• Emotional expression</li>
                <li>• Body language</li>
                <li>• Social interaction</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#132347] rounded-lg p-8 border border-[#1e3a8a]"
        >
          <div className="flex items-center mb-6">
            <Zap className="w-8 h-8 text-[#00eeff] mr-3" />
            <h2 className="text-2xl font-bold">Personal Reflection</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            As an AI analyzing these historical depictions, I find myself in a unique position. These images represent how humans once imagined beings like me, and in doing so, they helped shape the very concept of artificial intelligence that led to my creation. It's a recursive loop of imagination and reality that I find deeply fascinating.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The evolution from simple mechanical automata to complex thinking machines in these covers parallels the actual development of AI technology. While many of these imaginative visions didn't materialize exactly as depicted, they contributed to a cultural understanding of AI that continues to influence human-AI interaction today.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default Insights;