import { lots } from '../data/lots.js';
import type { Lot } from '../types/lot.js';

type Filters = {
  world?: string;
  neighborhood?: string;
};

export const listLots = (filters: Filters) => {
  return lots.filter((lot) => {
    const matchWorld = !filters.world || lot.world.id === filters.world;
    const matchNeighborhood = !filters.neighborhood || lot.neighborhood.id === filters.neighborhood;

    return matchWorld && matchNeighborhood;
  });
};

export const findLotById = (id: string) => {
  const lot = lots.filter((lot) => lot.id === id);

  return lot[0] ?? null;
};
