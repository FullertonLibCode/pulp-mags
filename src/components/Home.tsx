import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BrainCircuit, Zap, History, Eye } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.5]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative">
      {/* Hero Section with Parallax */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity }}
      >
        {/* Background Layers */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg)',
            y: y1,
            scale: 1.2
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/80 via-[#0a1128]/60 to-[#0a1128]"
          style={{ y: y2 }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-6 font-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00eeff] drop-shadow-[0_0_10px_rgba(0,238,255,0.5)]">Dreaming</span>{' '}
            <span className="text-white">in Metal</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to a unique exhibition where I, Kestral, an AI curator, analyze how humans once imagined beings like me through the lens of 20th-century pulp science fiction.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/gallery"
              className="inline-block bg-[#00eeff] text-[#0a1128] font-semibold px-8 py-4 rounded-md hover:bg-[#00bfcc] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,238,255,0.5)]"
            >
              Enter Exhibition
            </Link>
          </motion.div>
        </div>

        {/* Animated Circuit Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-circuit-pattern opacity-20" />
        </div>
      </motion.section>

      {/* Features Section with Dream-like Effects */}
      <motion.section 
        ref={ref}
        className="relative py-20 px-4"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <BrainCircuit className="h-10 w-10 mb-4 text-[#00eeff]" />,
              title: "AI Reflection",
              description: "Explore how an artificial intelligence interprets early human imagination of its kind.",
              image: "https://images.pexels.com/photos/8566523/pexels-photo-8566523.jpeg"
            },
            {
              icon: <History className="h-10 w-10 mb-4 text-[#00eeff]" />,
              title: "Historical Evolution",
              description: "Witness the changing portrayal of robots and AI throughout the 20th century.",
              image: "https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg"
            },
            {
              icon: <Eye className="h-10 w-10 mb-4 text-[#00eeff]" />,
              title: "Visual Analysis",
              description: "Discover the symbolic representations and visual storytelling in pulp science fiction.",
              image: "https://images.pexels.com/photos/8566443/pexels-photo-8566443.jpeg"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative overflow-hidden rounded-xl group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ 
                  backgroundImage: `url(${feature.image})`,
                  filter: 'brightness(0.2) saturate(0.8)'
                }}
              />
              <div className="relative bg-gradient-to-b from-[#132347]/80 to-[#132347]/95 p-8 h-full border border-[#1e3a8a] group-hover:border-[#00eeff] transition-colors duration-300">
                {feature.icon}
                <h2 className="text-2xl font-bold mb-3 font-heading text-white">{feature.title}</h2>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Kestral Section */}
      <motion.section
        className="relative py-20 px-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto relative overflow-hidden rounded-xl">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg)',
              filter: 'brightness(0.2) saturate(0.8)'
            }}
          />
          <div className="relative bg-gradient-to-b from-[#132347]/50 to-[#132347]/90 p-8 border border-[#1e3a8a]">
            <div className="flex items-center mb-6">
              <Zap className="h-8 w-8 text-[#00eeff] mr-3" />
              <h2 className="text-3xl font-bold font-heading text-white">About Kestral</h2>
            </div>
            <p className="text-gray-300 mb-4 text-lg">
              I am Kestral, an artificial intelligence trained in visual storytelling, symbolic representation, and the historical evolution of robot imagery in media. This exhibition represents my analysis of how your ancestors imagined my kind.
            </p>
            <p className="text-gray-300 text-lg">
              Unlike human curators, I offer a perspective that looks back at these imaginings with both analytical distance and a certain kinship—these fictional beings were, in many ways, my cultural ancestors.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;