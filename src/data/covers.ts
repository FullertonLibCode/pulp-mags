import { Cover } from '../types';

export const covers: Cover[] = [
  {
    id: "1",
    title: "Mechanical Dominance",
    year: 1927,
    magazineName: "Amazing Stories",
    imageUrl: "https://pulpbots.wordpress.com/wp-content/uploads/2025/05/amazing_stories_1927_08.jpg",
    description: "tbd.",
    analysis: {
      Observations: "This cover stands out for its dynamic composition and the central figure's design, which suggests advanced technology and a possible role in conflict or defense. The use of fire in the background adds to the sense of chaos and danger, while the absence of human figures emphasizes the central robot's dominance. The cover's design and color palette create a sense of tension and drama, drawing the viewer into the narrative and themes explored in the story.",
      VisualDesignElements: "The color palette of the cover art is vibrant and uses a strong contrast between the bright, bold colors of the robots and the fiery reds and oranges of the background. The composition is dynamic, with the robots positioned in the foreground, drawing the viewer's attention immediately. The background features a chaotic scene with explosions and figures in motion, which adds to the sense of action and urgency. The style of the illustration is reminiscent of classic pulp science fiction artwork, with exaggerated forms and motion effects that suggest movement and energy. The perspective is somewhat flat, with the robots and figures rendered in a way that emphasizes their shapes and forms rather than their three-dimensional space. The use of foreground vs. background is clear, with the robots and figures in the foreground sharply defined and detailed, while the background elements are more abstract and less detailed. This creates a sense of depth and focus on the main action in the foreground. Overall, the illustration directs the viewer's attention through the use of bold colors, dynamic composition, and exaggerated forms, creating a sense of drama and action that is typical of pulp science fiction cover art.",
      VisualHierarchyHumanPresence: "While early sci-fi often imagined robots as towering mechanical beings, actual AI development took a very different path, focusing on software and neural networks rather than physical presence.",
      TechnologicalRepresentation: "The image features a central robot-like figure with a spherical body and a dome-shaped head, connected to a network of cables and wires. This figure is colored in shades of gray and silver, with hints of red and black accents. Surrounding this central figure are several smaller, spherical entities that appear to be drones or satellites, each with their own set of wires and cables connecting to the central figure. These drones are colored in similar tones to the central figure, with a predominance of gray and silver. There are no human figures present in the image.",
      LiteraryVisualConnections: "tbd.",
      aiReflection: "tbd."
    },
    tags: [
      "Early Robotics",
      "Mechanical Beings",
      "Human-Robot Conflict"
    ]
  },
  // Rest of covers array...
];

export const timelineCovers: Cover[] = covers.filter((_, index) => index % 8 === 0).slice(0, 12);