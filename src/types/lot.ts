// Readonly tuples of literal values (const assertion)
const LOT_TYPES = ['residential', 'community', 'special'] as const;
// Union type derived from a tuple (indexed access type)
type LotType = (typeof LOT_TYPES)[number];

const AVAILABILITY = ['available', 'occupied', 'unavailable'] as const;
type LotAvailability = (typeof AVAILABILITY)[number];

const BUILDING_TYPES = [
  // residential (used)
  'house',
  'apartment',
  // community (used)
  'bar',
  'gym',
  'library',
  'lounge',
  'museum',
  'nightclub',
  'park',
  // community (unused)
  'generic',
  'national park',
  'playground',
  'pool',
  'vacation rental',
  'veterinary clinic',
  'wedding Venue',
  // special (used)
  'secret',
] as const;
type buildingType = (typeof BUILDING_TYPES)[number];

const BUILDING_STATUS = ['empty', 'built'] as const;
type buildingStatus = (typeof BUILDING_STATUS)[number];

type EntityReference = {
  id: string;
  title: string;
};

export type Lot = {
  id: string;
  title: string;
  description: string;
  price: number;
  dimensions: {
    width: number;
    depth: number;
  };
  type: LotType;
  availability: LotAvailability;
  buildingDetails: {
    type: buildingType;
    status: buildingStatus;
    bedrooms: number;
    bathrooms: number;
    floors: number;
  };
  imageURL: string;
  worldId: string;
  neighborhoodId: string;
};

export type LotDTO = {
  id: string;
  title: string;
  description: string;
  price: number;
  dimensions: {
    width: number;
    depth: number;
  };
  type: LotType;
  availability: LotAvailability;
  building_details: {
    type: buildingType;
    status: buildingStatus;
    bedrooms: number;
    bathrooms: number;
    floors: number;
  };
  image_url: string;
  world: EntityReference;
  neighborhood: EntityReference;
};
