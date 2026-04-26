import type { LotDTO, Lot } from '../types/lot.js';
import { worldMapper, worlds } from './worlds.js';
import { neighborhoodMapper } from './neighborhoods.js';

import { willowCreekData } from './lotsByWorld/willow-creek.js';
import { oasisSpringsData } from './lotsByWorld/oasis-springs.js';
import { newcrestData } from './lotsByWorld/newcrest.js';
import { sanMyshunoData } from './lotsByWorld/san-myshuno.js';

// unfurnished - 1x deposit + Nx weekply
// furniture - 1x deposito + 1x furniture + Nx weekly

const data: Record<string, Lot[]> = {
  'willow-creek': willowCreekData,
  'oasis-springs': oasisSpringsData,
  newcrest: newcrestData,
  'san-myshuno': Object.values(sanMyshunoData).reduce((acc, n) => [...acc, ...n], [] as Lot[]),
};

const mapLot = (lot: Lot): LotDTO => ({
  id: lot.id,
  title: lot.title,
  description: lot.description,
  // dynamic
  transaction_type: lot.priceDetails?.rent ? 'rent' : 'buy',
  // dynamic
  price: lot.priceDetails?.rent ? lot.priceDetails?.rent : lot.priceDetails?.wiki || -5,
  price_details: {
    wiki: lot.priceDetails?.wiki,
    pre_game: lot.priceDetails?.preGame,
    in_game: lot.priceDetails?.inGame,
    rent: lot.priceDetails?.rent,
    deposit: lot.priceDetails?.deposit,
    furniture: lot.priceDetails?.furniture,
  },
  dimensions: lot.dimensions,
  type: lot.type,
  availability: lot.availability,
  building_details: {
    type: lot.buildingDetails.type,
    bedrooms: lot.buildingDetails.bedrooms,
    bathrooms: lot.buildingDetails.bathrooms,
    floors: lot.buildingDetails.floors,
  },
  image_url: lot.imageURL,
  // dynamic
  world: {
    id: lot.worldId,
    title: worldMapper[lot.worldId]?.title || lot.worldId,
  },
  // dynamic
  neighborhood: {
    id: lot.neighborhoodId,
    title: neighborhoodMapper[lot.neighborhoodId]?.title || lot.neighborhoodId,
    color: neighborhoodMapper[lot.neighborhoodId]?.color || 'default',
  },
});

// { _: [ {} ], _, [ {} ] } -> [ {}, {} ]
const mapLots = () =>
  Object.values(data).reduce((acc, world) => {
    const worldLots = world.map((lot) => mapLot(lot));

    return [...acc, ...worldLots];
  }, [] as LotDTO[]);

export const lots: LotDTO[] = mapLots();

export const lotsMapper = lots.reduce(
  (acc, n: LotDTO) => {
    acc[n.id] = n;
    return acc;
  },
  {} as Record<string, LotDTO>
);
// console.log(lotsMapper);
