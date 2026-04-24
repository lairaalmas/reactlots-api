// Readonly tuples of literal values (const assertion)
const LOT_TYPES = ['residential', 'community', 'special'] as const;
const AVAILABILITY = ['available', 'occupied', 'unavailable'] as const;
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
const BUILDING_STATUS = ['empty', 'built'] as const;

// Union type derived from a tuple (indexed access type)
type LotType = (typeof LOT_TYPES)[number];
type LotAvailability = (typeof AVAILABILITY)[number];
type buildingType = (typeof BUILDING_TYPES)[number];
type buildingStatus = (typeof BUILDING_STATUS)[number];

type EntityReference = {
  id: string;
  title: string;
};

type LotPriceDetails = {
  preGame?: number | null;
  inGame?: number | null;
  wiki?: number | null;
};
type LotPriceDetailsDTO = {
  pre_game?: number | null;
  in_game?: number | null;
  wiki?: number | null;
};

export type Lot = {
  id: string;
  title: string;
  description: string;
  price: number;
  priceDetails: LotPriceDetails;
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
  price_details: LotPriceDetailsDTO;
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

const LOT_QUERY_PARAM_SORT = ['asc', 'desc'] as const;
const LOT_QUERY_PARAM_SORT_BY = ['price', 'berdrooms', 'bathroooms', 'floors'] as const;
export type LotQueryParamSort = (typeof LOT_QUERY_PARAM_SORT)[number];
export type LotQueryParamSortBy = (typeof LOT_QUERY_PARAM_SORT_BY)[number];

export type LotFilters = {
  world?: string;
  neighborhood?: string;
  type?: string;
  availability?: string;
  buildingType?: string;
  buildingStatus?: string;
  bedrooms?: number;
  bathrooms?: number;
  floors?: number;
  sort?: string;
  sortBy?: string;
};
export type LotQueryParams = {
  world?: string;
  neighborhood?: string;
  type?: string;
  availability?: string;
  building_type?: string;
  building_status?: string;
  bedrooms?: string;
  bathrooms?: string;
  floors?: string;
  sort?: LotQueryParamSort;
  sort_by?: LotQueryParamSortBy;
};
