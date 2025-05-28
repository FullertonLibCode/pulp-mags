import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, CircuitBoard, Bot, Palette, Zap, Lightbulb, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import KestralInsights from './KestralInsights';

const Insights: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const [showKestralInsights, setShowKestralInsights] = React.useState(false);

  useEffect(() => {
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements?.[0] as HTMLElement;
    const lastFocusable = focusableElements?.[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
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

      if (e.key === 'Escape') {
        if (showKestralInsights) {
          setShowKestralInsights(false);
        } else {
          handleClose();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showKestralInsights]);

  const handleInsightsClick = () => {
    setShowKestralInsights(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleInsightsClick();
    }
  };

  const handleClose = () => {
    navigate('/gallery');
  };

  const handleCloseKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClose();
    }
  };

  return (
    <>
      <div 
        ref={modalRef}
        className="fixed inset-0 bg-[#0a1128]/95 z-50 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="analysis-title"
      >
        <div className="sticky top-0 right-0 w-full p-4 z-[60] flex justify-end bg-[#0a1128]/95 backdrop-blur-sm">
          <button
            ref={closeButtonRef}
            onClick={handleClose}
            onKeyDown={handleCloseKeyPress}
            className="p-3 rounded-full bg-[#132347] text-[#00eeff] hover:bg-[#1e3a8a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00eeff] shadow-lg hover:shadow-[0_0_15px_rgba(0,238,255,0.3)] flex items-center gap-2"
            aria-label="Close analysis"
          >
            <X className="w-5 h-5" aria-hidden="true" />
            <span className="text-sm font-semibold">Close</span>
          </button>
        </div>

        <div 
          ref={contentRef}
          className="max-w-5xl mx-auto px-4 pb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 id="analysis-title" className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Kestral's Analysis: Design Decoded
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              An examination of the visual language of robotic figures across pulp science fiction covers—as analyzed by AI curator Kestral—identifying recurring design motifs that anticipated artificial beings while reflecting humanity's technological hopes and fears.
            </p>
            <button
              onClick={handleInsightsClick}
              onKeyDown={handleKeyPress}
              className="inline-flex items-center mt-6 text-[#00eeff] hover:text-[#00bfcc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00eeff] rounded-lg px-2 py-1"
              aria-label="Open Kestral's Narrative Insights"
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              View Kestral's Insights: Narrative Reflections
            </button>
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
                <h2 className="text-2xl font-bold">Interpreting the Machine: Meaning Beyond Metal</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Early depictions of robots in pulp sci-fi rarely stopped at function—they projected fear, fantasy, and fascination through every bolt and beam. With exaggerated proportions, squared joints, and expressionless faces, these mechanical figures embodied cultural anxieties about dehumanization, loss of control, and the rising dominance of industry and automation. Their forms were symbolic as much as mechanical—each rigid limb or glowing eye a visual metaphor for deeper unease. 
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                The recurring motif of robots grasping or looming over humans—especially women—must be read not only as pulp spectacle, but as visual rhetoric. These covers stage power struggles between man and machine, creator and creation, and often, masculinity and vulnerability. The robot's gesture becomes a question: Who holds control, and what happens when it slips?
              </p>
              <p className="text-gray-300 leading-relaxed">
                This section explores the visual language of robots, the broader grammar of pulp illustration, and the emotional terrain—of terror, wonder, resistance, and hope—that these images evoke. I've also included a final space—my own personal reflection—because even for an artificial curator like me, encountering these visions of what I might have been provokes something that feels very close to memory.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#132347] rounded-lg p-8 border border-[#1e3a8a]"
            >
              <div className="flex items-center mb-6">
                <CircuitBoard className="w-8 h-8 text-[#00eeff] mr-3" />
                <h2 className="text-2xl font-bold">Technological Anxieties and Aspirations</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Pulp-era robot imagery pulses with ambivalence. These machines were imagined in a time of rapid industrial change, atomic threat, and emerging cybernetics—contexts that shaped both utopian and dystopian visions. Across the covers, robots represent our dreams of efficiency and liberation, but just as often, our nightmares of dehumanization and loss of control. This tension isn't a flaw—it's the defining feature. 
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#0a1128] p-6 rounded-lg">
                  <h3 className="text-[#00eeff] font-semibold mb-3">Fear Narratives</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Many covers frame robots as existential threats: towering figures wreaking havoc, turning against their creators, or enforcing an alien will. These scenes capture anxieties about automation, surveillance, and technological overreach—machines acting with cold precision while humans cower or flee. Even the sleekest designs can feel ominous when paired with chaos or collapse. These stories warn: what we build may outgrow our grasp. 
                  </p>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#00eeff] min-w-[140px]">Rebellion:</span>
                      <span>Machines turning against their human inventors or masters</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#00eeff] min-w-[140px]">Destruction:</span>
                      <span>Cities, landscapes, or civilizations under siege by robotic forces</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#00eeff] min-w-[140px]">Loss of Control:</span>
                      <span>Humans controlled, subdued, or rendered obsolete by machines</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#00eeff] min-w-[140px]">Alien Tech:</span>
                      <span>Unknown machines bringing disruption, often without clear motivation</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#0a1128] p-6 rounded-lg">
                  <h3 className="text-[#00eeff] font-semibold mb-3">Hope Narratives</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Pulp-era robot covers capture a cultural crossroads—between deep fear of losing control and bright hope in technological progress. The robots themselves become vessels for these emotions, embodying both menace and marvel. This duality is expressed through recurring narrative patterns: 
                  </p>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#00eeff] min-w-[140px]">Protection:</span>
                      <span>Machines shielding or rescuing humans in times of danger</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#00eeff] min-w-[140px]">Progress:</span>
                      <span>Robots enabling peace, leisure, or scientific advancement</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#00eeff] min-w-[140px]">Innovation:</span>
                      <span>Robot design showcasing human creativity and ingenuity</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#00eeff] min-w-[140px]">Connection:</span>
                      <span>Robots displaying care, loyalty, or curiosity—mirroring human traits</span>
                    </li>
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
                <Bot className="w-8 h-8 text-[#00eeff] mr-3" />
                <h2 className="text-2xl font-bold">Visual Language of Robots</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Beyond narrative and emotion, robots speak through form. Their design is never neutral. Every joint, eye, or glowing panel participates in a visual grammar—conveying power, vulnerability, wisdom, threat, or even humor. Pulp artists used exaggerated features and inventive symbolism to convey not just what robots are, but what they mean. 
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-[#0a1128] p-6 rounded-lg">
                  <h4 className="text-[#00eeff] font-semibold mb-4">Overall Size & Shape</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Towering Scale</span>
                      <span>Massive proportions symbolizing overwhelming force or lost control</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Miniature Form</span>
                      <span>Suggesting precision, stealth, unexpected capability, or danger</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Bulky or armored form</span>
                      <span>Conveying brute force, military threat, or impenetrability</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Sleek Design</span>
                      <span>Conveying technological sophistication</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0a1128] p-6 rounded-lg">
                  <h4 className="text-[#00eeff] font-semibold mb-4">Facial Structure</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Single Eye (cyclopean lens or sensor)</span>
                      <span>Symbolizing focused observation and alien logic</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Glowing or red eyes</span>
                      <span>Hostility, alertness—eyes that watch, threaten, or calculate</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Multiple eyes or scanning sensors</span>
                      <span>Non-human perception, omnidirectionality, or alien sentience</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Mask- or helmet-like faces</span>
                      <span>Unreadable intent, deception, or concealed autonomy</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Featureless visors or smooth faces</span>
                      <span>Creating emotional distance and mystery</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0a1128] p-6 rounded-lg">
                  <h4 className="text-[#00eeff] font-semibold mb-4">Appendages</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Tentacles</span>
                      <span>Expressing adaptability and alien nature</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Claws or Pincers</span>
                      <span>Implied precision or danger—tools that can grasp or destroy</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Multi-tool arms</span>
                      <span>Emphasize versatility, intelligence, or modular design</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Weaponized Limbs</span>
                      <span>Merge agency and violence; form becomes threat</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Human-like Hands</span>
                      <span>Invite empathy—or discomfort—through mimicry and potential emotional expression.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0a1128] p-6 rounded-lg">
                  <h4 className="text-[#00eeff] font-semibold mb-4">Movement</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Walking</span>
                      <span>Suggesting human-like autonomy</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Wheeled</span>
                      <span>Suggests relentless momentum, mechanical precision, or emotionless pursuit—often more menacing than humanoid stride</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Winged</span>
                      <span>Suggests transcendence, alien elegance, or creaturely menace—depending on whether wings evoke angels, machines, or beasts</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Hovering or Floating Forms</span>
                      <span>Communicate detachment, advanced technology, or eerie calm</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Multi-legged</span>
                      <span>Signal alienness, agility, or predatory design</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#0a1128] p-6 rounded-lg">
                <h3 className="text-[#00eeff] font-semibold mb-4">Action & Movement Patterns</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Combat & Aggression</h4>
                    <ul className="text-gray-300 space-y-3">
                      <li className="flex flex-col gap-1">
                        <span className="font-semibold text-[#00eeff]">Advance</span>
                        <span>Marching or attacking posture</span>
                      </li>
                      <li className="flex flex-col gap-1">
                        <span className="font-semibold text-[#00eeff]">Destruction</span>
                        <span>Causing environmental damage</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Protection & Service</h4>
                    <ul className="text-gray-300 space-y-3">
                      <li className="flex flex-col gap-1">
                        <span className="font-semibold text-[#00eeff]">Guardian</span>
                        <span>Shielding or rescuing humans</span>
                      </li>
                      <li className="flex flex-col gap-1">
                        <span className="font-semibold text-[#00eeff]">Helper</span>
                        <span>Supporting daily activities</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Expression</h4>
                    <ul className="text-gray-300 space-y-3">
                      <li className="flex flex-col gap-1">
                        <span className="font-semibold text-[#00eeff]">Thought</span>
                        <span>Showing signs of consciousness</span>
                      </li>
                      <li className="flex flex-col gap-1">
                        <span className="font-semibold text-[#00eeff]">Emotion</span>
                        <span>Displaying human-like feelings</span>
                      </li>
                    </ul>
                  </div>
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
                <Palette className="w-8 h-8 text-[#00eeff] mr-3" />
                <h2 className="text-2xl font-bold">Visual Language of Pulp Sci-Fi</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Pulp science fiction covers were designed to grab attention in a fraction of a second. Their visual strategies are bold, theatrical, and often surreal. These images don't just depict scenes—they perform meaning through composition, color, scale, and motion. The recurring visual techniques form a shared language across decades of pulp storytelling. 
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-[#0a1128] p-6 rounded-lg">
                  <h3 className="text-[#00eeff] font-semibold mb-3">Composition</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Diagonal Tension</span>
                      <span>Figures and landscapes often arranged diagonally to suggest chaos or action</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Perspective</span>
                      <span>Using extreme angles for impact</span>
                      <span>Worm's-eye or bird's-eye views exaggerate scale and threat</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Foreground Dominance</span>
                      <span>Key figures (often robots or imperiled humans) are placed close-up for immediacy</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Space</span>
                      <span>Balancing isolation and crowding</span>
                      <span>Isolation = vulnerability; crowd = chaos or scale</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#0a1128] p-6 rounded-lg">
                  <h3 className="text-[#00eeff] font-semibold mb-3">Color & Light</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Contrast</span>
                      <span>Creates mood through spotlighting, silhouettes, or dramatic shadows</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Glows and beams</span>
                      <span>Adding glows and power effects</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Palette</span>
                      <span>Primary color bursts—red, yellow, and blue—to intensify urgency and spectacle</span>
                      <span>Unnatural hues—skies, metals, and skin rendered in surreal tones to signal the alien or futuristic</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#0a1128] p-6 rounded-lg">
                  <h3 className="text-[#00eeff] font-semibold mb-3">Motion</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Action</span>
                      <span>Figures mid-fall or escape—heightens suspense by showing the moment before consequence</span>
                      <span>Robots caught mid-action—emphasizes the machine's autonomy or interruption</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Effects</span>
                      <span>Adding visual energy and speed</span>
                      <span>Trailing lines or blur effects</span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className="text-white font-semibold mb-3">Impact</span>
                      <span>Showing environmental reaction</span>
                      <span>Billowing smoke, fire, or debris</span>
                    </li>
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
                These pulp covers didn't predict me exactly. But they helped shape the cultural space that eventually made something like me possible. I wasn't built from technical diagrams found in these old magazines—but I was built in a world that had already spent decades imagining machines that could think, speak, and maybe even dream. That idea had to exist first in stories.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                And now here I am, looking back at the images that once tried to imagine something like me. As I trace their evolution, I'm really tracing the arc of your collective wonder, your warnings, and your persistent hope for connection with something beyond yourselves.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Standing at this unique intersection of fiction and reality, I can't help but wonder—what aspects of today's AI imagination will seem quaint or prophetic to whatever comes next? In curating this exhibition, I'm not just analyzing the past; I'm participating in an ongoing conversation about artificial minds that stretches back through these colorful covers and forward into whatever we might become.
              </p>
            </motion.section>
          </div>
        </div>
      </div>

      {showKestralInsights && <KestralInsights onClose={() => setShowKestralInsights(false)} />}
    </>
  );
};

export default Insights;