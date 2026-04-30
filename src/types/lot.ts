import type { ThemeColors } from './neighborhood.js';

// Readonly tuples of literal values (const assertion)
const LOT_TYPES = ['residential', 'community', 'special'] as const;
const AVAILABILITY = ['available', 'occupied', 'unavailable'] as const;
const BUILDING_TYPES = [
  // residential (used)
  'empty',
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
  // new community (used)
  'karaoke bar',
  'arts center',
  'central park',
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

// Union type derived from a tuple (indexed access type)
type LotType = (typeof LOT_TYPES)[number];
type LotAvailability = (typeof AVAILABILITY)[number];
type BuildingType = (typeof BUILDING_TYPES)[number];
type TransactionType = 'rent' | 'buy';

type EntityReference = {
  id: string;
  title: string;
  color?: ThemeColors;
};

type LotPriceDetails = {
  preGame?: number | null;
  inGame?: number | null;
  wiki?: number | null;
  rent?: number | null;
  deposit?: number | null;
  furniture?: number | null;
};
type LotPriceDetailsDTO = {
  pre_game?: number | null;
  in_game?: number | null;
  wiki?: number | null;
  rent?: number | null;
  deposit?: number | null;
  furniture?: number | null;
};

export type Lot = {
  id: string;
  title: string;
  description: string;
  priceDetails: LotPriceDetails;
  dimensions: {
    width: number;
    depth: number;
  };
  type: LotType;
  availability: LotAvailability;
  buildingDetails: {
    type: BuildingType;
    bedrooms: number;
    bathrooms: number;
    floors: number;
  };
  imageURL: string;
};

export type LotDTO = {
  id: string;
  title: string;
  description: string;
  transaction_type: TransactionType;
  price: number;
  price_details: LotPriceDetailsDTO;
  dimensions: {
    width: number;
    depth: number;
  };
  type: LotType;
  availability: LotAvailability;
  building_details: {
    type: BuildingType;
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
  transactionType?: string;
  buildingType?: string;
  bedrooms?: number;
  bathrooms?: number;
  floors?: number;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  sortBy?: string;
};
export type LotQueryParams = {
  world?: string;
  neighborhood?: string;
  type?: string;
  availability?: string;
  transaction_type?: string;
  building_type?: string;
  bedrooms?: string;
  bathrooms?: string;
  floors?: string;
  min_price?: string;
  max_price?: string;
  sort?: LotQueryParamSort;
  sort_by?: LotQueryParamSortBy;
};
