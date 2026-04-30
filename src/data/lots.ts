import type { LotDTO, Lot } from '../types/lot.js';
import { worldSummaryById } from './worlds.js';
import { neighborhoodSummaryById } from './neighborhoods.js';
import { lotData } from './source/lotData.js';
import type { LotDataByWorld } from './source/lotData.js';

const ERROR_LOG = '❌ Error mapping lots:';
const WARN_LOG = '⚠️ Warning mapping lots:';

// unfurnished - 1x deposit + Nx weekply
// furniture - 1x deposito + 1x furniture + Nx weekly

const mapLot = (lot: Lot, neighborhoodId: string, worldId: string): LotDTO => ({
  id: lot.id,
  title: lot.title,
  description: lot.description,
  transaction_type: lot.priceDetails?.rent ? 'rent' : 'buy',
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
  world: {
    id: worldId,
    title: worldSummaryById[worldId]?.title || '',
  },
  neighborhood: {
    id: neighborhoodId,
    title: neighborhoodSummaryById[neighborhoodId]?.title || '',
    color: neighborhoodSummaryById[neighborhoodId]?.color || 'default',
  },
});

const lotDataArray = (data: LotDataByWorld): LotDTO[] => {
  const list: LotDTO[] = [];

  // world list
  Object.entries(data).forEach(([worldId, neighborhoodList]) => {
    if (!worldSummaryById[worldId]) console.warn(`${WARN_LOG} world id '${worldId}' from lot list is unknown`);

    // neighborhood list
    Object.entries(neighborhoodList).forEach(([neighborhoodId, lotList]) => {
      if (!neighborhoodSummaryById[neighborhoodId])
        console.warn(`${WARN_LOG} neighborhood id '${neighborhoodId}' from lot list is unknown`);

      // lot list
      lotList.forEach((lot: Lot, index) => {
        if (!lot.id) console.warn(`${ERROR_LOG} Missing id for Lot[${index}]. Not mapped`);
        else {
          list.push(mapLot(lot, neighborhoodId, worldId));
        }
      });
    });
  });

  return list;
};

export const lots = lotDataArray(lotData);
