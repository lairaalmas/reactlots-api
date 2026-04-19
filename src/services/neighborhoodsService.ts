import { neighborhoods } from '../data/neighborhoods.js';
import type { NeighborhoodDTO } from '../types/neighborhood.js';

export const listNeighborhoods = (): NeighborhoodDTO[] => {
  return neighborhoods;
};
