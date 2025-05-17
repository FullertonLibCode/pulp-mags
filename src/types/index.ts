export interface Cover {
  id: string;
  title: string;
  year: number;
  magazineName: string;
  imageUrl: string;
  description: string;
  analysis: {
    Observations: string;
    VisualDesignElements: string;
    aiReflection: string;
  };
  tags: string[];
}