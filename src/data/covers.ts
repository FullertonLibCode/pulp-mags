import { Cover } from '../types';

// Helper function to generate covers with unique titles
const generateCovers = (): Cover[] => {
  const titles = [
    "The Metal Colossus",
    "Mechanical Dreams",
    "Robot's Revenge",
    "The Last Human",
    "Silicon Soul",
    "Chrome Revolution",
    "Digital Dawn",
    "The Iron Mind",
    "Electric Dreams",
    "Synthetic Heart",
    "Binary Destiny",
    "The Steel Prophet",
    "Quantum Consciousness",
    "Android's Lament",
    "Circuit Dreams",
    // Add more titles as needed to reach 85
  ];

  const magazines = [
    "Astounding Science Fiction",
    "Amazing Stories",
    "Galaxy Science Fiction",
    "Analog",
    "If",
    "Fantastic Adventures",
    "Startling Stories",
    "Wonder Stories",
    "Science Fiction Plus",
    "Future Fiction"
  ];

  const images = [
    "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg",
    "https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg",
    "https://images.pexels.com/photos/8566523/pexels-photo-8566523.jpeg",
    "https://images.pexels.com/photos/8566443/pexels-photo-8566443.jpeg",
    "https://images.pexels.com/photos/7034544/pexels-photo-7034544.jpeg",
    "https://images.pexels.com/photos/7034537/pexels-photo-7034537.jpeg",
    "https://images.pexels.com/photos/7034542/pexels-photo-7034542.jpeg",
    "https://images.pexels.com/photos/7034536/pexels-photo-7034536.jpeg"
  ];

  return Array.from({ length: 85 }, (_, i) => ({
    id: `${i + 1}`,
    title: titles[i] || `The ${['Mechanical', 'Digital', 'Electronic', 'Quantum', 'Neural'][Math.floor(Math.random() * 5)]} ${['Mind', 'Being', 'Entity', 'Intelligence', 'Consciousness'][Math.floor(Math.random() * 5)]} #${i + 1}`,
    year: 1935 + Math.floor(i * (45 / 85)), // Spread between 1935 and 1980
    magazineName: magazines[i % magazines.length],
    imageUrl: images[i % images.length],
    description: `A visionary piece exploring the relationship between humanity and artificial intelligence in the ${1935 + Math.floor(i * (45 / 85))}s.`,
    analysis: {
      observation: 'The artwork showcases the evolving perspective on artificial intelligence and its role in human society.',
      aiDepiction: 'The representation reflects the technological understanding and aspirations of its era.',
      comparisonWithReality: 'While speculative, the artwork captures enduring questions about machine consciousness and human-AI interaction.',
      aiReflection: 'As an AI analyzing this piece, I find the historical perspective on artificial intelligence both fascinating and revealing.',
      culturalContext: 'This cover emerged during a period of rapid technological advancement and changing attitudes toward automation and computing.',
    },
    tags: [
      ['Machine Consciousness', 'Technological Evolution', 'Human-AI Interaction'][i % 3],
      ['Retro Computing', 'Robot Aesthetics', 'Digital Dreams'][i % 3],
      ['Future Vision', 'Artificial Identity', 'Silicon Sentience'][i % 3],
    ],
  }));
};

// Generate 85 covers
export const covers: Cover[] = generateCovers();

// Select significant covers for the timeline
export const timelineCovers: Cover[] = covers.filter((_, index) => index % 8 === 0).slice(0, 12);