import type { ThemeColors } from './neighborhood.js';

// -------- LOT --------

// SPECIFIC INFO - residential x community x special
type LotCategory = 'residential' | 'community' | 'special';

type ResidentialBuildingType = 'empty' | 'house' | 'apartment';
type ResidentialAvailability = 'available' | 'occupied';
type ResidentialTransactionType = 'rent' | 'buy' | 'both';
type ResidentialOwner = string;

const COMMUNITY_BUILDING_TYPES = [
  'bar',
  'gym',
  'library',
  'lounge',
  'museum',
  'nightclub',
  'park',
  'karaoke bar',
  'arts center',
  'center park',
  // unused
  'generic',
  'national park',
  'playground',
  'pool',
  'vacation rental',
  'veterinary clinic',
  'wedding venue',
] as const;
type CommunityBuildingType = (typeof COMMUNITY_BUILDING_TYPES)[number];
type CommunityAvailability = 'unavailable';

type SpecialBuildingType = 'secret';
type SpecialAvailability = 'unavailable';

// SPECIFIC INFO - rent x buy
type RentPeriod = 'week' | 'month';

type RentDetails = {
  rent: number;
  deposit: number;
  furniture?: number;
  period?: RentPeriod;
};
type RentHistory = {
  preGame?: RentDetails;
  inGame: RentDetails;
};
type BuyHistory = {
  preGame?: number;
  inGame: number;
};

// BASE INFO
type BaseLot = {
  id: string;
  title: string;
  description: string;
  dimensions: {
    width: number;
    depth: number;
  };
  imageURL: string;
};

type ResidentialLot = BaseLot & {
  type: 'residential';
  availability: ResidentialAvailability;
  buildingDetails: {
    type: ResidentialBuildingType;
    apartmentTitle?: string;
    // TBD: only lots that are not empty have bedroom, bathrooms and floors
    bedrooms?: number;
    bathrooms?: number;
    floors?: number;
  };
  // TBD: only occupied has owner
  owner?: ResidentialOwner;
  transactionType: ResidentialTransactionType;
  rentDetails?: RentHistory;
  buyDetails?: BuyHistory;
};
type CommunityLot = BaseLot & {
  type: 'community';
  availability: CommunityAvailability;
  buildingDetails: {
    type: CommunityBuildingType;
    apartmentTitle?: never;
    bedrooms?: never;
    bathrooms?: number;
    floors?: number;
  };
  owner?: never;
  // TBD: community lots are not listed for transaction, but may expose in-game/pre-game value data.
  transactionType?: never;
  rentDetails?: never;
  buyDetails?: BuyHistory;
};
type SpecialLot = BaseLot & {
  type: 'special';
  availability: SpecialAvailability;
  buildingDetails: {
    type: SpecialBuildingType;
    apartmentTitle?: never;
    bedrooms?: never;
    bathrooms?: never;
    floors?: never;
  };
  owner?: never;
  transactionType?: never;
  rentDetails?: never;
  buyDetails?: never;
};

export type Lot = ResidentialLot | CommunityLot | SpecialLot;

// -------- LOT DTO --------

type WorldReference = {
  id: string;
  title: string;
};
type NeighborhoodReference = {
  id: string;
  title: string;
  color: ThemeColors;
};

export type MainPriceDTO = number | null;
export type RentDetailsDTO = {
  rent: number | null;
  deposit: number | null;
  furniture: number | null;
  period: RentPeriod | null;
  price_history: {
    in_game: { furniture: number | null };
    pre_game: { furniture: number | null };
  };
};
export type BuyDetailsDTO = {
  price: number | null;
  price_history: {
    pre_game: number | null;
    in_game: number | null;
  };
};

export type LotDTO = {
  // metadata
  id: string;
  title: string;
  description: string;
  image_url: string;
  // metadata - ref
  world: WorldReference;
  neighborhood: NeighborhoodReference;
  // lot
  type: LotCategory;
  dimensions: {
    width: number | null;
    depth: number | null;
  };
  availability: ResidentialAvailability | CommunityAvailability | SpecialAvailability;
  // lot - sim
  owner: ResidentialOwner | null;
  // building
  building_details: {
    type: ResidentialBuildingType | CommunityBuildingType | SpecialBuildingType;
    apartment_title: string | null;
    bedrooms: number | null;
    bathrooms: number | null;
    floors: number | null;
  };
  // transaction
  transaction: {
    type: ResidentialTransactionType | null;
    main_price: MainPriceDTO;
    rent_details: RentDetailsDTO;
    buy_details: BuyDetailsDTO;
  };
};

// -------- FILTERS --------

type LotQueryParamSort = 'asc' | 'desc';
type LotQueryParamSortBy = 'price' | 'bedrooms' | 'bathrooms' | 'floors';

// LotQueryParams -> LotFilters
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
  sort?: string;
  sort_by?: string;
};
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
// export type LotFilters = {
//   world?: string;
//   neighborhood?: string;
//   type?: LotCategory;
//   availability?: ResidentialAvailability | CommunityAvailability | SpecialAvailability;
//   transactionType?: ResidentialTransactionType;
//   buildingType?: ResidentialBuildingType | CommunityBuildingType | SpecialBuildingType;
//   bedrooms?: number;
//   bathrooms?: number;
//   floors?: number;
//   minPrice?: number;
//   maxPrice?: number;
//   sort?: LotQueryParamSort;
//   sortBy?: LotQueryParamSortBy;
// };
