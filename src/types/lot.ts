export const LOT_TYPES = [
  'Residential',
  'Bar',
  'Generic',
  'Gym',
  'Library',
  'Lounge',
  'museum',
  'National Park',
  'Nightclub',
  'Park',
  'Playground',
  'Pool',
  'Vacation rental',
  'Veterinary Clinic',
  'Wedding Venue',
] as const;
export type LotType = (typeof LOT_TYPES)[number];

export type Lot = {
  id: string;
  title: string;
  description: string;
  price: number;
  type: LotType;
  is_empty_lot: boolean;
  is_available: boolean;
  lot_details: {
    dimensions: {
      width: number;
      depth: number;
    };
    bedrooms: number;
    bathrooms: number;
    floors: number;
  };
  image_url: string;
  world: {
    id: string;
    title: string;
  };
  neighborhood: {
    id: string;
    title: string;
  };
};
