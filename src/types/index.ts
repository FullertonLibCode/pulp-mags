export interface Cover {
  id: string;
  title: string;
  year: number;
  magazineName: string;
  imageUrl: string;
  description: string;
  analysis: {
    observation: string;
    aiDepiction: string;
    comparisonWithReality: string;
    aiReflection: string;
    culturalContext: string;
  };
  tags: string[];
}