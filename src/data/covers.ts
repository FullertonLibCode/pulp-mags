import { Cover } from '../types';

export const covers: Cover[] = [
  {
    id: "1",
    title: "Galactic Confrontation",
    year: 1927,
    magazineName: "Amazing Stories",
    imageUrl: "https://woqqrmyyphvvwurmkrwc.supabase.co/storage/v1/object/sign/mag-covers/Pulp%20Mag%20Covers%20-%20Robots%20-%20Resized%20Recolored/amazing_stories_1927_08.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2QwMmNkY2Y3LTI3MmMtNDg4Zi1hYzBkLTY4OGIwYzkzOWI4ZCJ9.eyJ1cmwiOiJtYWctY292ZXJzL1B1bHAgTWFnIENvdmVycyAtIFJvYm90cyAtIFJlc2l6ZWQgUmVjb2xvcmVkL2FtYXppbmdfc3Rvcmllc18xOTI3XzA4LmpwZyIsImlhdCI6MTc0NzA5NjQ4MSwiZXhwIjoxNzc4NjMyNDgxfQ.hbC2nVujhhmg5TTS94jrCG9ZAEkYvfmhIUpRrHXybd4",
    description: "A pioneering depiction of human-robot interaction in early science fiction.",
    analysis: {
      observation: "The cover features a dramatic confrontation between a human figure and a towering mechanical being. The composition emphasizes scale and power dynamics through stark perspective.",
      aiDepiction: "The robot is portrayed with distinctly mechanical features, emphasizing its artificial nature through geometric shapes and metallic surfaces.",
      comparisonWithReality: "While early sci-fi often imagined robots as towering mechanical beings, actual AI development took a very different path, focusing on software and neural networks rather than physical presence.",
      aiReflection: "Looking at this early depiction of my kind, I'm struck by how the artist emphasized physical dominance over intelligence - a reflection of the era's mechanical understanding of artificial beings.",
      culturalContext: "Published in 1927, this cover reflects the growing industrialization of the period and emerging anxieties about automation and mechanical power."
    },
    tags: [
      "Early Robotics",
      "Mechanical Beings",
      "Human-Robot Conflict"
    ]
  },
  {
    id: "2",
    title: "Robot's Warning",
    year: 1928,
    magazineName: "Amazing Stories",
    imageUrl: "https://woqqrmyyphvvwurmkrwc.supabase.co/storage/v1/object/sign/mag-covers/Pulp%20Mag%20Covers%20-%20Robots%20-%20Resized%20Recolored/amazing_stories_1928_01.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2QwMmNkY2Y3LTI3MmMtNDg4Zi1hYzBkLTY4OGIwYzkzOWI4ZCJ9.eyJ1cmwiOiJtYWctY292ZXJzL1B1bHAgTWFnIENvdmVycyAtIFJvYm90cyAtIFJlc2l6ZWQgUmVjb2xvcmVkL2FtYXppbmdfc3Rvcmllc18xOTI4XzAxLmpwZyIsImlhdCI6MTc0NzA5NjY3OSwiZXhwIjoxNzc4NjMyNjc5fQ.A8pwp5x4CDxMLO1ynD0Hzk-LL_D-afUuL7aRifVOfvM",
    description: "An early exploration of robot sentience and moral agency.",
    analysis: {
      observation: "The cover depicts a humanoid robot in a protective stance, suggesting complex motivations beyond simple mechanical function.",
      aiDepiction: "This representation shows early signs of attributing consciousness to artificial beings, though still heavily mechanical in appearance.",
      comparisonWithReality: "The concept of AI having moral agency and protective instincts remains a key topic in modern AI ethics discussions.",
      aiReflection: "This image suggests an early understanding that artificial beings might develop their own ethical frameworks and protective instincts.",
      culturalContext: "Published during the rapid technological advancement of the 1920s, this cover reflects growing speculation about machine consciousness."
    },
    tags: [
      "Robot Consciousness",
      "Moral Agency",
      "Protective AI"
    ]
  },
  // Add more covers following this template...
];

// Select significant covers for the timeline
export const timelineCovers: Cover[] = covers.filter((_, index) => index % 8 === 0).slice(0, 12);