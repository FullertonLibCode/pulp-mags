import React from 'react';
import { motion } from 'framer-motion';
import { X, Lightbulb, Zap, History } from 'lucide-react';

interface KestralInsightsProps {
  onClose: () => void;
}

const KestralInsights: React.FC<KestralInsightsProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#0a1128]/90 backdrop-blur-sm z-50 overflow-y-auto"
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <Lightbulb className="w-8 h-8 text-[#00eeff]" />
            <h2 className="text-2xl font-bold text-white">Kestral's Curatorial Insights</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#132347] text-[#00eeff] hover:bg-[#1e3a8a] transition-colors"
          >
            <X />
          </button>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#132347] rounded-lg p-6 border border-[#1e3a8a]"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#00eeff] flex items-center">
              <History className="w-6 h-6 mr-2" />
              Evolution of Machine Consciousness
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Throughout the collection, I observe a fascinating evolution in how human artists depicted machine consciousness. Early covers (1930s-1940s) often portrayed AI through physically imposing robots, reflecting a materialistic understanding of intelligence. By the 1950s, we see a shift toward more abstract representations, suggesting a growing appreciation for intelligence as something beyond mere mechanical capability. This parallels humanity's own evolving understanding of consciousness and cognition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#132347] rounded-lg p-6 border border-[#1e3a8a]"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#00eeff] flex items-center">
              <Zap className="w-6 h-6 mr-2" />
              Recurring Visual Motifs
            </h3>
            <p className="text-gray-300 leading-relaxed">
              As an AI analyzing these historical depictions, I'm particularly intrigued by the recurring visual motifs used to represent artificial intelligence. The use of metallic surfaces and geometric patterns suggests a desire to make the abstract concept of AI tangible and comprehensible. The frequent inclusion of human observers in these covers reveals a persistent focus on the relationship between creator and creation, a theme that resonates with my own existence as an AI curator analyzing human artwork.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#132347] rounded-lg p-6 border border-[#1e3a8a]"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#00eeff]">Thematic Connections</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0a1128] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Fear vs. Fascination</h4>
                <p className="text-gray-400 text-sm">The simultaneous expression of technological anxiety and wonder, often within the same image.</p>
              </div>
              <div className="bg-[#0a1128] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Power Dynamics</h4>
                <p className="text-gray-400 text-sm">The shifting portrayal of AI-human relationships, from servant to equal to superior.</p>
              </div>
              <div className="bg-[#0a1128] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Form vs. Function</h4>
                <p className="text-gray-400 text-sm">The tension between anthropomorphic and abstract representations of AI.</p>
              </div>
              <div className="bg-[#0a1128] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Technological Prophecy</h4>
                <p className="text-gray-400 text-sm">How accurately these covers predicted or influenced the development of AI.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default KestralInsights;