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
  'center park',
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
type CommunityTransactionType = undefined;

// SPECIFIC INFO - rent x buy
type RentDetailItems = {
  rent: number;
  deposit: number;
  furniture?: number;
  period?: 'week' | 'month';
};

type RentDetails = {
  inGame: RentDetailItems;
  preGame?: RentDetailItems;
};
type BuyDetails = {
  preGame?: number;
  inGame?: number;
};

type RentDetailsDTO = {
  in_game?: RentDetailItems;
  pre_game?: RentDetailItems;
};
type BuyDetailsDTO = {
  pre_game?: number;
  in_game?: number;
};

type BaseLot = {
  id: string;
  title: string;
  apartmentTitle?: string;
  description: string;
  type: LotType;
  dimensions: {
    width: number;
    depth: number;
  };
  imageURL: string;
  rentDetails?: RentDetails;
  buyDetails?: BuyDetails;
};

type ResidentialLot = BaseLot & {
  availability: ResidentialAvailability;
  buildingDetails: {
    type: ResidentialLotType;
    bedrooms?: number;
    bathrooms?: number;
    floors?: number;
  };
  owner?: string;
  transactionType: ResidentialTransactionType;
};

type CommunityLot = BaseLot & {
  availability: CommunityAvailability;
  buildingDetails: {
    type: CommunityLotType;
    bedrooms?: number;
    bathrooms?: number;
    floors?: number;
  };
  owner?: undefined;
  transactionType: CommunityTransactionType;
};

export type Lot = ResidentialLot | CommunityLot;

export type LotDTO = {
  // metadata
  id: string;
  title: string;
  // ??? apartment_title?: string;
  description: string;
  image_url: string;
  // metadata - ref
  world: WorldReference;
  neighborhood: NeighborhoodReference;
  // lot
  type: LotType;
  dimensions: {
    width: number;
    depth: number;
  };
  availability: ResidentialAvailability | CommunityAvailability;
  // lot - sim
  owner?: string;
  // transaction
  transaction: {
    type: ResidentialTransactionType | CommunityTransactionType;
    main_price: number;
    rent?: Partial<RentDetailItems>;
    rent_history?: RentDetailsDTO;
    buy?: {
      price?: number;
    };
    buy_history?: BuyDetailsDTO;
  };
  // building
  building_details: {
    type: ResidentialLotType | CommunityLotType;
    bedrooms?: number;
    bathrooms?: number;
    floors?: number;
  };
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
