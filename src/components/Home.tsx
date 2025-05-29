import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BrainCircuit, Zap, History, Eye, BrainCircuit as Circuit, Cpu, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const ExhibitionGuide = lazy(() => import('./ExhibitionGuide'));

const Home: React.FC = () => {
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0.8]);
  const blur = useTransform(scrollY, [0, 400], [0, 6]);
  const navigate = useNavigate();
  const location = useLocation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (location.state?.scrollToVideo) {
      const videoElement = document.getElementById('intro-video');
      if (videoElement) {
        requestIdleCallback(() => {
          videoElement.scrollIntoView({ behavior: 'smooth' });
        });
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleFeatureClick = (path: string) => {
    navigate(path);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  };

  const handleGuideButtonHover = () => {
    const guideModule = import('./ExhibitionGuide');
    requestIdleCallback(() => {
      guideModule.catch(() => {});
    });
  };

  return (
    <div className="relative">
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ 
          opacity,
          backdropFilter: `blur(${blur}px)`,
        }}
        role="banner"
        aria-label="Hero section"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/70 via-[#132347]/60 to-[#0a1128]/70" />
          
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              aria-hidden="true"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
                scale: [0.5, 1.5, 0.5],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              style={{
                filter: 'drop-shadow(0 0 8px rgba(0, 238, 255, 0.6))',
              }}
            >
              {i % 3 === 0 ? (
                <BrainCircuit className="text-[#00eeff]\" style={{ width: `${Math.random() * 40 + 20}px`, height: `${Math.random() * 40 + 20}px` }} />
              ) : i % 3 === 1 ? (
                <Circuit className="text-[#00eeff]" style={{ width: `${Math.random() * 40 + 20}px`, height: `${Math.random() * 40 + 20}px` }} />
              ) : (
                <Cpu className="text-[#00eeff]" style={{ width: `${Math.random() * 40 + 20}px`, height: `${Math.random() * 40 + 20}px` }} />
              )}
            </motion.div>
          ))}

          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full mix-blend-screen"
              aria-hidden="true"
              style={{
                background: `radial-gradient(circle at center, ${
                  ['#00eeff', '#3b82f6', '#1e40af'][Math.floor(Math.random() * 3)]
                }66, transparent)`,
                width: `${Math.random() * 400 + 200}px`,
                height: `${Math.random() * 400 + 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(20px)',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-4 font-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00eeff] drop-shadow-[0_0_10px_rgba(0,238,255,0.5)]">Dreaming</span>{' '}
            <span className="text-white">in Metal</span>
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl mb-8 text-gray-300 font-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pulp Sci-Fi through the Eyes of AI
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Welcome to a unique exhibition where the past visions of the future meet the gaze of artificial intelligence. This collection showcases classic sci-fi pulp magazines covers featuring robots, with commentary generated by an AI curator reflecting on its own imagined origins in the human imagination.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setIsGuideOpen(true)}
              onMouseEnter={handleGuideButtonHover}
              className="inline-flex items-center gap-2 bg-[#00eeff] text-[#0a1128] font-semibold px-8 py-4 rounded-md hover:bg-[#00bfcc] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,238,255,0.5)]"
              aria-label="Open Exhibition Guide"
            >
              <MapPin className="w-5 h-5" aria-hidden="true" />
              Start Here
            </button>
            <Link 
              to="/gallery"
              className="inline-block bg-transparent text-[#00eeff] font-semibold px-8 py-4 rounded-md hover:bg-[#00eeff]/10 transition-all duration-300 border-2 border-[#00eeff]"
              aria-label="Enter Exhibition Gallery"
            >
              Explore the Gallery
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="intro-video"
        className="relative py-20 px-4 bg-[#0a1128]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        role="region"
        aria-label="Introduction video"
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#132347] rounded-lg overflow-hidden border border-[#1e3a8a]">
            <iframe 
              src="https://player.cloudinary.com/embed/?cloud_name=dn0ugggvb&public_id=Exhibit_-_Intro_-_Kestral_z7ut3e&profile=cld-default"
              style={{
                width: '100%',
                aspectRatio: '16 / 9'
              }}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              title="Kestral Introduction"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-white mb-2">Meet Kestral, AI Curator</h2>
            <p className="text-gray-300">Join Kestral, your AI curator, on a journey through the imaginative worlds of pulp science fiction, exploring how robots were portrayed in classic tales of the future.</p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        ref={ref}
        className="relative py-20 px-4"
        role="region"
        aria-label="Exhibition features"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <BrainCircuit className="h-10 w-10 mb-4 text-[#00eeff]" />,
              title: "AI Reflection",
              description: "Explore curated commentary generated by AI reflecting on how robots were depicted in pulp magazine art.",
              link: "/insights"
            },
            {
              icon: <History className="h-10 w-10 mb-4 text-[#00eeff]" />,
              title: "Historical Evolution",
              description: "Trace the changing portrayal of robots from menancing invaders and mechanical servant to complex figures shaped by shifting hopes and anxities of the 20th century.",
              link: "/timeline"
            },
            {
              icon: <Eye className="h-10 w-10 mb-4 text-[#00eeff]" />,
              title: "Visual Analysis",
              description: "Explore the design elements of each cover and uncover deeper themes in the visual storytelling of pulp science fiction covers.",
              link: "/gallery"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative overflow-hidden rounded-xl group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <button 
                onClick={() => handleFeatureClick(feature.link)}
                className="block w-full text-left bg-[#132347] p-8 border border-[#1e3a8a] rounded-xl hover:border-[#00eeff] transition-all duration-300 group-hover:bg-[#132347]/80 group-hover:shadow-[0_0_30px_rgba(0,238,255,0.2)]"
              >
                <div className="relative z-10">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#132347]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Suspense fallback={null}>
        {isGuideOpen && <ExhibitionGuide isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />}
      </Suspense>
    </div>
  );
};

export default React.memo(Home);