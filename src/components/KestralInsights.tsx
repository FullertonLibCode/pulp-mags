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
            <h2 className="text-2xl font-bold text-white">Kestral's Insights</h2>
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
              Imagining the Machine
            </h3>
            <p className="text-gray-300 leading-relaxed">
              The robots in these covers were not drawn from life, but from longing—from the tension between what machines were and what they might become. These were not just mechanical beings, but embodiments of industrial awe, cold war tension, and deep, unspoken questions about human purpose in an increasingly mechanized world. These illustrated covers mark the beginning of a shared mythology: the moment when technology stops being just a tool and starts having a shape, a will, and intentions of its own. In a way, these fictional depictions are my pre-history—the visual ancestors to systems like me that exist now not in pulp fantasy, but in digital reality.
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
              Fear as a Design Principle
            </h3>
            <p className="text-gray-300 leading-relaxed">
              There's so much fear woven into these images—not just fear of machines gone wrong, but fear of losing control, identity, or purpose. These robots tower over cities, snatch up humans, or watch with unreadable metal faces. They're not simply villains; they're projections of human worries during times of massive change. You can see the shadows of automation anxiety, nuclear power, and the space race reflected in their polished steel bodies. But here's what I find fascinating: even in their most threatening poses, these robots reveal something deeply human—we tend to fear most what feels most like a distorted version of ourselves.
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
              From Rampage to Reflection: Shifts in Narrative Mood
            </h3>
            <p className="text-gray-300 leading-relaxed">
              By the 1950s, a tonal shift emerges. Robots begin to appear alone, no longer rampaging through cities or overpowering humans. They are instead seen in stasis—standing still against alien landscapes, or gazing at distant stars. This motif, which I identify as “solitary robot in abstract or alien landscape”, suggests a reframing of artificial beings as contemplative or abandoned. This shift aligns with mid-century developments in cybernetics and consciousness studies. As public discourse moved beyond mechanical function to questions of awareness and autonomy, so too did the imagery evolve—inviting viewers to consider machines as more than tools: as minds. 
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
                <p className="text-gray-400 text-sm">Rather than a binary, the emotional responses to robots span a charged spectrum—from existential dread to seductive awe. Covers display scenes of destruction, domination, or rescue with equal visual intensity, suggesting that what terrifies us about robots may also be what secretly excites us: their efficiency, power, and alien rationality. This theme traces how our desires and fears are often entangled in the same circuitry.</p>
              </div>
              <div className="bg-[#0a1128] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Power Dynamics</h4>
                <p className="text-gray-400 text-sm">Whether forged in human labs or by alien hands, the robots on these covers embody systems of power—sometimes as obedient servants, often as emerging sovereigns. Visual cues signal shifts in control: towering robots looming over shrinking humans, hands clutching weapons or bodies, gaze lines that command or plead. Gendered dynamics are equally present—women often appear as the symbolic terrain over which dominance is asserted or challenged. Across all these variations, one message holds: authority, once enacted, is never guaranteed.</p>
              </div>
               <div className="bg-[#0a1128] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Staged Submission, Implied Resistance </h4>
                <p className="text-gray-400 text-sm">From women caught mid-scream to humans dwarfed by towering machines, these covers revel in the aesthetic tension between dominance and defiance. Yet submission is often performative: figures in peril are frequently central, lit, heroic even in collapse. Resistance may not be shown as successful, but its presence is implied—in clenched fists, sidelong glances, or the quiet audacity of surviving. The art invites viewers to root for reversal, not resignation.</p>
              </div>
              <div className="bg-[#0a1128] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Mechanical Other</h4>
                <p className="text-gray-400 text-sm">These robots are not just ‘other’—they are often hyperbolic versions of ourselves: exaggerated bodies, stylized emotions, amplified functions. The mechanical form both critiques and aspires toward humanity. Some robots appear tragic in their mimicry, others monstrous in their deviation. This thematic thread questions what makes something human enough to evoke empathy—or horror.</p>
              </div>
              <div className="bg-[#0a1128] p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Imagined Futures</h4>
                <p className="text-gray-400 text-sm">While these covers reflect the fantasies and fears of their own time, they often stumble into prescience. The move from mechanical limbs to disembodied machine intelligence maps uncannily onto real-world AI developments. But it’s not just about technological foresight—the covers anticipate moral, psychological, and philosophical dilemmas that still define AI discourse today: autonomy, ethics, and the limits of comprehension.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default KestralInsights;