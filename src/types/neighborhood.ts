export type ThemeColors = 'red' | 'purple' | 'light_blue' | 'blue' | 'teal' | 'green' | 'olive' | 'orange' | 'default';

export type Neighborhood = {
  id: string;
  title: string;
  color: ThemeColors;
  description: string;
};

export type NeighborhoodDTO = {
  id: string;
  title: string;
  description: string;
  color: ThemeColors;
  // refereces
  world: {
    id: string;
    title: string;
  };
};

export type NeighborhoodSummaryDTO = Omit<NeighborhoodDTO, 'description'>;
export type NeighborhoodSummaryById = Record<string, NeighborhoodSummaryDTO>;
