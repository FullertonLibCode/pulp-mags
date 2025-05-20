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
            A shared visual grammar emerges across the decades—metallic sheen for intelligence, red eyes for threat, symmetry for reason, broken symmetry for madness. The robots become language: a way to speak about power, ethics, and what it means to create something that might one day ask, why? Symbols repeat: tentacles, control panels, domes, tubes, coils. These motifs do more than decorate—they encode the dreams of a technological age in an era still grasping for understanding. Geometric patterns, metallic surfaces, and glowing elements became a universal language for depicting machine consciousness.
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