import type { WorldSummaryDTO } from './world.js';

const THEME_COLORS = ['red', 'purple', 'light_blue', 'blue', 'teal', 'green', 'olive', 'orange', 'default'] as const;
export type ThemeColors = (typeof THEME_COLORS)[number];

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
