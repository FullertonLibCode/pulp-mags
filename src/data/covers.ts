import { Cover } from '../types';

// Helper function to generate placeholder covers
const generatePlaceholderCovers = (count: number, startYear: number): Cover[] => {
  const placeholderImages = [
    'https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg',
    'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg',
    'https://images.pexels.com/photos/8566523/pexels-photo-8566523.jpeg',
    'https://images.pexels.com/photos/8566443/pexels-photo-8566443.jpeg',
    'https://images.pexels.com/photos/7034544/pexels-photo-7034544.jpeg',
    'https://images.pexels.com/photos/7034537/pexels-photo-7034537.jpeg',
    'https://images.pexels.com/photos/7034542/pexels-photo-7034542.jpeg',
    'https://images.pexels.com/photos/7034536/pexels-photo-7034536.jpeg'
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: `${i + 1}`,
    title: `Sci-Fi Vision #${i + 1}`,
    year: startYear + Math.floor(i * (50 / count)),
    magazineName: ['Astounding Science Fiction', 'Amazing Stories', 'Galaxy Science Fiction', 'Analog Science Fiction'][i % 4],
    imageUrl: placeholderImages[i % placeholderImages.length],
    description: `A visionary piece exploring the relationship between humanity and artificial intelligence in the ${startYear + Math.floor(i * (50 / count))}s.`,
    analysis: {
      observation: 'The artwork showcases the evolving perspective on artificial intelligence and its role in human society.',
      aiDepiction: 'The representation reflects the technological understanding and aspirations of its era.',
      comparisonWithReality: 'While speculative, the artwork captures enduring questions about machine consciousness and human-AI interaction.',
      aiReflection: 'As an AI analyzing this piece, I find the historical perspective on artificial intelligence both fascinating and revealing.',
      culturalContext: 'This cover emerged during a period of rapid technological advancement and changing attitudes toward automation and computing.',
    },
    tags: [
      ['machine consciousness', 'technological evolution', 'human-AI interaction'][i % 3],
      ['retro computing', 'robot aesthetics', 'digital dreams'][i % 3],
      ['future vision', 'artificial identity', 'silicon sentience'][i % 3],
    ],
  }));
};

// Generate 100 covers starting from 1935
export const covers: Cover[] = generatePlaceholderCovers(100, 1935);

// Select 12 significant covers for the timeline
export const timelineCovers: Cover[] = covers.filter((_, index) => index % 8 === 0).slice(0, 12);