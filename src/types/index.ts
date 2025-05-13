export interface Cover {
  id: string;
  title: string;
  year: number;
  magazineName: string;
  imageUrl: string;
  description: string;
  analysis: {
    Observations: string;
    Visual Design Elements: string;
    Visual Hierarchy & Human Presence: string;
    Technological Representation: string;
    Literary Visual Connections: string;
  };
  tags: string[];
}