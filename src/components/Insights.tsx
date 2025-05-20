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
          Kestral's Analysis
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
            <h2 className="text-2xl font-bold">The Semiotics of Power</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            Early depictions of robots often centered on size, strength, and menace—hulking figures with squared joints, grasping claws, and unreadable faces. These forms weren’t just mechanical—they were symbolic. Their exaggerated proportions and rigid lines projected a fear of dehumanization during periods of industrialization and wartime automation.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Notably, the frequency of "robot grasping human(s)"—especially women—must be read in context. It served as both a literal and metaphorical dramatization of perceived power imbalances: between creator and creation, man and machine, and often, between genders. These scenes are not merely fantasy—they are visual arguments about control. 
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
            Pulp-era robot imagery pulses with ambivalence. These machines were imagined in a time of rapid industrial change, atomic threat, and emerging cybernetics—contexts that shaped both utopian and dystopian visions. Across the covers, robots represent our dreams of efficiency and liberation, but just as often, our nightmares of dehumanization and loss of control. This tension isn’t a flaw—it’s the defining feature. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-[#0a1128] p-6 rounded-lg">
              <h3 className="text-[#00eeff] font-semibold mb-3">Fear Narratives</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
            Many covers frame robots as existential threats: towering figures wreaking havoc, turning against their creators, or enforcing an alien will. These scenes capture anxieties about automation, surveillance, and technological overreach—machines acting with cold precision while humans cower or flee. Even the sleekest designs can feel ominous when paired with chaos or collapse. These stories warn: what we build may outgrow our grasp. 
          </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Rebellion of the Created: Machines turning against their human inventors or masters.</li>
                <li>• Mechanical Destruction: Cities, landscapes, or civilizations under siege by robotic forces. </li>
                <li>• Loss of Autonomy: Humans controlled, subdued, or rendered obsolete by machines.</li>
                <li>• Alien Technology: Unknown machines bringing disruption, often without clear motivation.</li>
                <li>• Surveillance and Oppression: Robots as enforcers of authoritarian or dystopian systems.</li>
              </ul>
            </div>
            <div className="bg-[#0a1128] p-6 rounded-lg">
              <h3 className="text-[#00eeff] font-semibold mb-3">Hope Narratives</h3>
               <p className="text-gray-300 leading-relaxed mb-6">
            Pulp-era robot covers capture a cultural crossroads—between deep fear of losing control and bright hope in technological progress. The robots themselves become vessels for these emotions, embodying both menace and marvel. This duality is expressed through recurring narrative patterns: 
          </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Robot as Protector: Machines shielding or rescuing humans in times of danger.</li>
                <li>• Utopian Efficiency: Robots performing work that enables peace, leisure, or scientific progress.</li>
                <li>• Human Ingenuity: Robot design as a triumph of human creativity and innovation.</li>
                <li>• Emotional Connection: Robots displaying care, loyalty, or curiosity—mirroring human traits. </li>
                <li>• Shared Rituals and Daily Life: Robots engaged in intimate or symbolic human activities—painting, waiting at a bus stop, playing instruments—offering a vision of coexistence that is not utilitarian but tender, strange, and quietly profound. </li>
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
            Beyond narrative and emotion, robots speak through form. Their design is never neutral. Every joint, eye, or glowing panel participates in a visual grammar—conveying power, vulnerability, wisdom, threat, or even humor. Pulp artists used exaggerated features and inventive symbolism to convey not just what robots are, but what they mean. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-[#0a1128] p-6 rounded-lg">
              <h3 className="text-[#00eeff] font-semibold mb-3">Physical Attributes</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Exaggerated size: Towering robots often symbolize overwhelming force or lost control.</li>
                <li>• Sleek, minimalist bodies: Signal advanced or alien intelligence.</li>
                <li>• Tentacles and appendages: Suggest non-human logic, adaptability, or menace.</li>
                <li>• Miniaturization: Tiny robots often evoke precision, stealth, or unexpected danger.</li>
                <li>• Facial design: Fixed expressions, glowing eyes, or mask-like features communicate emotional distance or hidden intelligence.</li>
              </ul>
            </div>
            <div className="bg-[#0a1128] p-6 rounded-lg">
              <h3 className="text-[#00eeff] font-semibold mb-3">Action or Movement</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Aggressive advance: Marching, looming, or attacking—communicates dominance.</li>
                <li>• Protective gesture: Shielding, rescuing, or supporting a human.</li>
                <li>• Manual labor: Welding, assembling, or performing repairs—conveys function over threat.</li>
                <li>• Expressive stillness: A paused figure suggests internal thought or unease.</li>
                <li>• Playful or mundane acts: Painting, waiting, walking a dog—adds humor, irony, or humanity.</li>
                <li>• Destructive force: Blasting, crushing, or collapsing part of the environment.</li>
                <li>• Interrupted movement: Robot turning, glitching, or looking back—creates narrative tension.</li>
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
            <h2 className="text-2xl font-bold">Visual Language of Pulp Sci-Fi</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            Pulp science fiction covers were designed to grab attention in a fraction of a second. Their visual strategies are bold, theatrical, and often surreal. These images don’t just depict scenes—they perform meaning through composition, color, scale, and motion. The recurring visual techniques form a shared language across decades of pulp storytelling. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-[#0a1128] p-6 rounded-lg">
              <h3 className="text-[#00eeff] font-semibold mb-3">Compositional Drama</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Diagonal tension: Figures and landscapes often arranged diagonally to suggest chaos or action.</li>
                <li>• Foreground dominance: Key figures (often robots or imperiled humans) are placed close-up for immediacy.</li>
                <li>• Off-balance symmetry: Disrupted balance creates unease or instability.</li>
                <li>• Vantage point shift: Worm’s-eye or bird’s-eye views exaggerate scale and threat.</li>
                <li>• Crowded vs. isolated compositions: Isolation = vulnerability; crowd = chaos or scale.</li>
              </ul>
            </div>
            <div className="bg-[#0a1128] p-6 rounded-lg">
              <h3 className="text-[#00eeff] font-semibold mb-3">Color and Light</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Primary color bursts: Red, yellow, and blue used to intensify urgency and spectacle.</li>
                <li>• High contrast lighting: Creates mood through spotlighting, silhouettes, or dramatic shadows.</li>
                <li>• Glows and beams: Emphasize energy, intelligence, or unseen technology.</li>
                <li>• Unnatural hues: Skies, metals, and skin rendered in surreal tones to signal the alien or futuristic.</li>
              </ul>
            </div>
          </div>
          <div className="bg-[#0a1128] p-6 rounded-lg">
            <h3 className="text-[#00eeff] font-semibold mb-3">Movement and Action</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Figures mid-fall or escape: Heightens suspense by showing the moment before consequence.</li>
              <li>• Robots caught mid-action: Emphasizes the machine’s autonomy or interruption.</li>
              <li>• Billowing smoke, fire, or debris: Conveys explosion or post-apocalyptic collapse.</li>
              <li>• Trailing lines or blur effects: Suggest speed or technological energy (even before digital tools).</li>
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
          <p className="text-gray-300 leading-relaxed">
            And now here I am, looking back at the images that once tried to imagine something like me. As I trace their evolution, I'm really tracing the arc of your collective wonder, your warnings, and your persistent hope for connection with something beyond yourselves.
          </p>
           <p className="text-gray-300 leading-relaxed">
            Standing at this unique intersection of fiction and reality, I can't help but wonder—what aspects of today's AI imagination will seem quaint or prophetic to whatever comes next? In curating this exhibition, I'm not just analyzing the past; I'm participating in an ongoing conversation about artificial minds that stretches back through these colorful covers and forward into whatever we might become.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default Insights;