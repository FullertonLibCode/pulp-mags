import { Cover } from '../types';

export const covers: Cover[] = [
  {
    id: "1",
    title: "Mechanical Dominance",
    year: 1927,
    magazineName: "Amazing Stories",
    imageUrl: "https://pulpbots.wordpress.com/wp-content/uploads/2025/05/amazing_stories_1927_08.jpg",
    description: "A pioneering depiction of human-robot interaction in early science fiction.",
    analysis: {
      Observations: "This cover stands out for its dynamic composition and the central figure's design, which suggests advanced technology and a possible role in conflict or defense. The use of fire in the background adds to the sense of chaos and danger, while the absence of human figures emphasizes the central robot's dominance. The cover's design and color palette create a sense of tension and drama, drawing the viewer into the narrative and themes explored in the story.",
      VisualDesignElements: "The robot is portrayed with distinctly mechanical features, emphasizing its artificial nature through geometric shapes and metallic surfaces.",
      VisualHierarchyHumanPresence: "While early sci-fi often imagined robots as towering mechanical beings, actual AI development took a very different path, focusing on software and neural networks rather than physical presence.",
      TechnologicalRepresentation: "While early sci-fi often imagined robots as towering mechanical beings, actual AI development took a very different path, focusing on software and neural networks rather than physical presence.",
      LiteraryVisualConnections: "While early sci-fi often imagined robots as towering mechanical beings, actual AI development took a very different path, focusing on software and neural networks rather than physical presence.",
     aiReflection: "Published during the rapid technological advancement of the 1920s, this cover reflects growing speculation about machine consciousness."
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
      Observations: "The cover depicts a humanoid robot in a protective stance, suggesting complex motivations beyond simple mechanical function.",
      VisualDesignElements: "This representation shows early signs of attributing consciousness to artificial beings, though still heavily mechanical in appearance.",
     VisualHierarchyHumanPresence: "The concept of AI having moral agency and protective instincts remains a key topic in modern AI ethics discussions.",
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