const LOT_TYPES = [
  'residential',
  'library',
  'museum',
  'gym',
  'nightclub',
  'park',
  'bar',
  'lounge',
  // 'generic',
  // 'national Park',
  // 'playground',
  // 'pool',
  // 'vacation rental',
  // 'veterinary Clinic',
  // 'wedding Venue',
  'secret',
] as const;
const BUILDING_TYPES = ['house', 'empty_lot', 'other'] as const;
const LOT_STATUS = ['available', 'inhabited', 'unavailable'] as const;

type LotType = (typeof LOT_TYPES)[number];
type BuildingType = (typeof BUILDING_TYPES)[number];
type LotStatus = (typeof LOT_STATUS)[number];

type LotDimensions = {
  width: number;
  depth: number;
};
type LotDetails = {
  dimensions: LotDimensions;
  bedrooms: number;
  bathrooms: number;
  floors: number;
};

type EntityReference = {
  id: string;
  title: string;
};

export type Lot = {
  id: string;
  title: string;
  description: string;
  price: number;
  lotDetails: LotDetails;
  lotType: LotType;
  buildingType: BuildingType;
  status: LotStatus;
  imageURL: string;
  worldId: string;
  neighborhoodId: string;
};

export type LotDTO = {
  id: string;
  title: string;
  description: string;
  price: number;
  lot_details: LotDetails;
  lot_type: LotType;
  building_type: BuildingType;
  status: LotStatus;
  image_url: string;
  world: EntityReference;
  neighborhood: EntityReference;
};
