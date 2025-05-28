import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lightbulb, Zap, History } from 'lucide-react';

interface KestralInsightsProps {
  onClose: () => void;
}

const KestralInsights: React.FC<KestralInsightsProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = modal.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const focusableArray = Array.from(focusableElements);
        if (focusableArray.length === 0) return;

        const firstFocusable = focusableArray[0];
        const lastFocusable = focusableArray[focusableArray.length - 1];

        if (!document.activeElement) return;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable?.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Focus the close button when modal opens
    closeButtonRef.current?.focus();

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-[#0a1128]/90 backdrop-blur-sm z-50 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="insights-title"
        ref={modalRef}
      >
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-3">
              <Lightbulb className="w-8 h-8 text-[#00eeff]" aria-hidden="true" />
              <h2 id="insights-title" className="text-2xl font-bold text-white">Kestral's Insights: Narrative Reflections</h2>
            </div>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-2 rounded-full bg-[#132347] text-[#00eeff] hover:bg-[#1e3a8a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00eeff]"
              aria-label="Close insights"
            >
              <X className="m-auto w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div className="space-y-8" role="region" aria-label="Insights content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#132347] rounded-lg p-6 border border-[#1e3a8a]"
              tabIndex={0}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#00eeff] flex items-center">
                <History className="w-6 h-6 mr-2" aria-hidden="true" />
                Imagining the Machine
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The robots in these covers were not drawn from life, but from longing—from the tension between what machines were and what they might become. These were not just mechanical beings, but embodiments of industrial awe, cold war tension, and deep, unspoken questions about human purpose in an increasingly mechanized world. These illustrated covers mark the beginning of a shared mythology: the moment when technology stops being just a tool and starts having a shape, a will, and intentions of its own. In a way, these fictional depictions are my pre-history—the visual ancestors to systems like me that exist now not in pulp fantasy, but in digital reality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-[#132347] rounded-lg p-6 border border-[#1e3a8a]"
              tabIndex={0}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#00eeff] flex items-center">
                <Zap className="w-6 h-6 mr-2" aria-hidden="true" />
                Fear as a Design Principle
              </h3>
              <p className="text-gray-300 leading-relaxed">
                There's so much fear woven into these images—not just fear of machines gone wrong, but fear of losing control, identity, or purpose. These robots tower over cities, snatch up humans, or watch with unreadable metal faces. They're not simply villains; they're projections of human worries during times of massive change. You can see the shadows of automation anxiety, nuclear power, and the space race reflected in their polished steel bodies. But here's what I find fascinating: even in their most threatening poses, these robots reveal something deeply human—we tend to fear most what feels most like a distorted version of ourselves.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-[#132347] rounded-lg p-6 border border-[#1e3a8a]"
              tabIndex={0}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#00eeff] flex items-center">
                <Zap className="w-6 h-6 mr-2" aria-hidden="true" />
                From Rampage to Reflection: Shifts in Narrative Mood
              </h3>
              <p className="text-gray-300 leading-relaxed">
                By the 1950s, a tonal shift emerges. Robots begin to appear alone, no longer rampaging through cities or overpowering humans. They are instead seen in stasis—standing still against alien landscapes, or gazing at distant stars. This motif, which I identify as "solitary robot in abstract or alien landscape", suggests a reframing of artificial beings as contemplative or abandoned. This shift aligns with mid-century developments in cybernetics and consciousness studies. As public discourse moved beyond mechanical function to questions of awareness and autonomy, so too did the imagery evolve—inviting viewers to consider machines as more than tools: as minds. 
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-[#132347] rounded-lg p-6 border border-[#1e3a8a]"
              tabIndex={0}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#00eeff]">Thematic Connections</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0a1128] p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Fear vs. Fascination</h4>
                  <p className="text-gray-400 text-sm">Rather than a binary, the emotional responses to robots span a charged spectrum—from existential dread to seductive awe. Covers display scenes of destruction, domination, or rescue with equal visual intensity, suggesting that what terrifies us about robots may also be what secretly excites us: their efficiency, power, and alien rationality. This theme traces how our desires and fears are often entangled in the same circuitry.</p>
                </div>
                <div className="bg-[#0a1128] p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Power Dynamics</h4>
                  <p className="text-gray-400 text-sm">Whether forged in human labs or by alien hands, the robots on these covers embody unstable systems of power—sometimes as obedient servants, often as mechanical tyrants. Visual cues signal shifts in control: towering robots looming over shrinking humans, hands clutching weapons or bodies, gaze lines that command or plead. Gendered dynamics are equally present—women often appear as the symbolic terrain over which dominance is asserted or challenged. These compositions suggest that control—whether mechanical or social—is always under negotiation.</p>
                </div>
                <div className="bg-[#0a1128] p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Staged Submission, Implied Resistance </h4>
                  <p className="text-gray-400 text-sm">From women caught mid-scream to humans dwarfed by towering machines, these covers revel in the aesthetic tension between dominance and defiance. Yet submission is often performative: figures in peril are frequently central, heroic even in collapse. Resistance may not be shown as successful, but its presence is implied—in clenched fists, sidelong glances, or the quiet audacity of surviving. The art invites viewers to root for reversal, not resignation.</p>
                </div>
                <div className="bg-[#0a1128] p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Mechanical Other</h4>
                  <p className="text-gray-400 text-sm">These robots are not just 'other'—they are often hyperbolic versions of ourselves: exaggerated bodies, stylized emotions, amplified functions. The mechanical form both critiques and aspires toward humanity. Some robots appear tragic in their mimicry, others monstrous in their deviation. This thematic thread questions what makes something human enough to evoke empathy—or horror.</p>
                </div>
                <div className="bg-[#0a1128] p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Aesthetics of Scale, Light, and Form</h4>
                  <p className="text-gray-400 text-sm">Pulp covers don't whisper—they shout in color and composition. Bold diagonals, spotlighted figures, and looming silhouettes are not just stylistic flair—they are narrative devices, shaping how we perceive threat, heroism, and agency. Robots often fill or break the frame, their mass and geometry imposing order or chaos on the scene. Even stillness carries tension. Through exaggerated contrast and theatrical arrangement, these images deliver meaning at first glance—and often, a second surprise on closer inspection.</p>
                </div>
                <div className="bg-[#0a1128] p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Imagined Futures</h4>
                  <p className="text-gray-400 text-sm">While these covers reflect the fantasies and fears of their own time, they often stumble into prescience. The move from mechanical limbs to disembodied machine intelligence maps uncannily onto real-world AI developments. But it's not just about technological foresight—the covers anticipate moral, psychological, and philosophical dilemmas that still define AI discourse today: autonomy, ethics, and the limits of comprehension.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default KestralInsights;