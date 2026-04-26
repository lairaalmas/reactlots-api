const THEME_COLORS = ['red', 'purple', 'light_blue', 'blue', 'teal', 'green', 'olive', 'orange', 'default'] as const;
export type ThemeColors = (typeof THEME_COLORS)[number];

export type Neighborhood = {
  id: string;
  title: string;
  color: ThemeColors;
  description: string;
  worldId: string;
};

export type NeighborhoodDTO = {
  id: string;
  title: string;
  color: ThemeColors;
  description: string;
  world: {
    id: string;
    title: string;
  };
};
