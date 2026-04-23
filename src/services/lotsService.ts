import { lots } from '../data/lots.js';
import type { LotDTO } from '../types/lot.js';

export type Filters = {
  world?: string;
  neighborhood?: string;
  buildingStatus?: string;
  bedrooms?: number;
  bathrooms?: number;
  floors?: number;
};

export const listLots = (filters: Filters) => {
  return lots?.filter((lot: LotDTO) => {
    const matchWorld = filters.world === '' || lot?.world?.id === filters.world;
    const matchNeighborhood = filters.neighborhood === '' || lot?.neighborhood?.id === filters.neighborhood;
    const matchBuildingStatus =
      filters.buildingStatus === '' || lot?.building_details?.status === filters.buildingStatus;
    const matchBedrooms = filters.bedrooms === 0 || lot?.building_details?.bedrooms === filters.bedrooms;
    const matchBathrooms = filters.bathrooms === 0 || lot?.building_details?.bathrooms === filters.bathrooms;
    const matchFloors = filters.floors === 0 || lot?.building_details?.floors === filters.floors;

    return matchWorld && matchNeighborhood && matchBuildingStatus && matchBedrooms && matchBathrooms && matchFloors;
  });
};

export const findLotById = (id: string) => {
  const lot = lots?.filter((lot: LotDTO) => lot?.id === id);

  return lot[0] ?? null;
};
