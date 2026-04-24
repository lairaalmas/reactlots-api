import { lots } from '../data/lots.js';
import type { LotDTO, LotFilters, LotQueryParamSort, LotQueryParamSortBy } from '../types/lot.js';

export const listLots = (filters: LotFilters) => {
  return lots?.filter((lot: LotDTO) => {
    const matchWorld = filters.world === '' || lot?.world?.id === filters.world;
    const matchNeighborhood = filters.neighborhood === '' || lot?.neighborhood?.id === filters.neighborhood;
    const matchType = filters.type === '' || lot?.type === filters.type;
    const matchAvailability = filters.availability === '' || lot?.availability === filters.availability;
    const matchBuildingType = filters.buildingType === '' || lot?.building_details?.type === filters.buildingType;
    const matchBuildingStatus =
      filters.buildingStatus === '' || lot?.building_details?.status === filters.buildingStatus;
    const matchBedrooms = filters.bedrooms === 0 || lot?.building_details?.bedrooms === filters.bedrooms;
    const matchBathrooms = filters.bathrooms === 0 || lot?.building_details?.bathrooms === filters.bathrooms;
    const matchFloors = filters.floors === 0 || lot?.building_details?.floors === filters.floors;

    return (
      matchWorld &&
      matchNeighborhood &&
      matchType &&
      matchAvailability &&
      matchBuildingStatus &&
      matchBuildingType &&
      matchBedrooms &&
      matchBathrooms &&
      matchFloors
    );
  });
};

export const findLotById = (id: string) => {
  const lot = lots?.filter((lot: LotDTO) => lot?.id === id);

  return lot[0] ?? null;
};

export const sortLots = (lots: LotDTO[], sort?: string, sortBy?: string) => {
  if (!sort || !sortBy) return lots;

  const buildingFields = ['floors', 'bedrooms', 'bathrooms'];
  const validFields = ['price', ...buildingFields];

  if (!validFields.includes(sortBy)) return lots;

  const multiplier = sort === 'desc' ? -1 : 1;

  return lots.sort((a, b) => {
    const aVal = buildingFields.includes(sortBy)
      ? a.building_details[sortBy as keyof typeof a.building_details]
      : a[sortBy as keyof LotDTO];

    const bVal = buildingFields.includes(sortBy)
      ? b.building_details[sortBy as keyof typeof b.building_details]
      : b[sortBy as keyof LotDTO];

    return ((aVal as number) - (bVal as number)) * multiplier;
  });
};
