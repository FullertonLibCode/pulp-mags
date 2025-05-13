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
    VisualHierarchyHumanPresence: string;
    TechnologicalRepresentation: string;
    LiteraryVisualConnections: string;
  };
  tags: string[];
}