import type { ThemeColors } from './neighborhood.js';

type WorldReference = {
  id: string;
  title: string;
};

type NeighborhoodReference = {
  id: string;
  title: string;
  color: ThemeColors;
};

// BASE INFO
type LotType = 'residential' | 'community' | 'special';

// SPECIFIC INFO - residential x community
const RESIDENTIAL_TYPES = ['empty', 'house', 'apartment'] as const;
type ResidentialLotType = (typeof RESIDENTIAL_TYPES)[number];
type ResidentialAvailability = 'available' | 'occupied';
type ResidentialTransactionType = 'rent' | 'buy' | 'both';
const COMMUNITY_TYPES = [
  // (used)
  'bar',
  'gym',
  'library',
  'lounge',
  'museum',
  'nightclub',
  'park',
  'secret',
  // new (used)
  'karaoke bar',
  'arts center',
  'central park',
  // (unused)
  'generic',
  'national park',
  'playground',
  'pool',
  'vacation rental',
  'veterinary clinic',
  'wedding venue',
] as const;
type CommunityLotType = (typeof COMMUNITY_TYPES)[number];
type CommunityAvailability = 'unavailable';
type CommunityTransactionType = null;

// SPECIFIC INFO - rent x buy
type RentDetails = {
  rent: number;
  deposit: number;
  furniture?: number;
  period?: 'week' | 'month';
};
type PriceHistory = {
  preGame?: number;
  inGame?: number;
  wiki?: number;
};
type PriceHistoryDTO = {
  pre_game?: number;
  in_game?: number;
  wiki?: number;
};

type BaseLot = {
  id: string;
  title: string;
  description: string;
  type: LotType;
  dimensions: {
    width: number;
    depth: number;
  };
  imageURL: string;
  rentDetails?: RentDetails;
  priceHistory?: PriceHistory;
};

type ResidentialLot = BaseLot & {
  availability: ResidentialAvailability;
  buildingDetails: {
    type: ResidentialLotType;
    bedrooms: number;
    bathrooms: number;
    floors: number;
  };
  owner?: string;
};

type CommunityLot = BaseLot & {
  availability: CommunityAvailability;
  buildingDetails: {
    type: CommunityLotType;
    bedrooms: number;
    bathrooms: number;
    floors: number;
  };
  owner?: undefined;
};

export type Lot = ResidentialLot | CommunityLot;

export type LotDTO = {
  id: string;
  title: string;
  description: string;
  type: LotType;
  dimensions: {
    width: number;
    depth: number;
  };
  image_url: string;
  availability: ResidentialAvailability | CommunityAvailability;
  building_details: {
    type: ResidentialLotType | CommunityLotType;
    bedrooms: number;
    bathrooms: number;
    floors: number;
  };
  owner?: string;
  rent_details?: RentDetails;
  price_history?: PriceHistoryDTO;
  // refs
  price: number;
  transaction_type: ResidentialTransactionType | CommunityTransactionType;
  world: WorldReference;
  neighborhood: NeighborhoodReference;
};

// FILTERS

type LotQueryParamSort = 'asc' | 'desc';
type LotQueryParamSortBy = 'price' | 'berdrooms' | 'bathroooms' | 'floors';
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
  sort?: LotQueryParamSort;
  sortBy?: LotQueryParamSortBy;
};
export type LotQueryParams = Pick<
  LotFilters,
  'world' | 'neighborhood' | 'type' | 'availability' | 'bedrooms' | 'bathrooms' | 'floors' | 'sort'
> & {
  transaction_type?: string;
  building_type?: string;
  min_price?: string;
  max_price?: string;
  sort_by?: LotQueryParamSortBy;
};

export type LotSummaryDTO = Partial<LotDTO>;
export type LotSummaryById = Record<string, LotSummaryDTO>;
