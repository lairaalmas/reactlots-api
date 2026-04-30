import type { LotDTO, Lot } from '../types/lot.js';
import type { Neighborhood } from '../types/neighborhood.js';
import type { World } from '../types/world.js';
import { worldSummaryById } from './worlds.js';
import { WORLD_KEYS } from './worlds.js';
import { NEIGHBORHOOD_KEYS, neighborhoodSummaryById } from './neighborhoods.js';
import { lotData } from './source/lotData.js';
import type { LotDataByNeighborhood, LotDataByWorld } from './source/lotData.js';
import type { LotSummaryById } from '../types/lot.js';
import { isValidSlug } from '../utils/functions.js';
import type { WorldSummaryById } from '../types/world.js';
import type { NeighborhoodSummaryById } from '../types/neighborhood.js';
// unfurnished - 1x deposit + Nx weekply
// furniture - 1x deposito + 1x furniture + Nx weekly

const ERROR_LOG = '❌ Error mapping lots:';
const WARN_LOG = '⚠️ Warning mapping lots:';

/**
 * Validations:
 * error: id missing
 * error: id invalid
 * warn: title missing
 */
const validateDomainFields = (id: string, title: string, index: number) => {
  let isValid = true;
  if (!id) {
    console.error(`${ERROR_LOG} Missing id. Data${index}] was not mapped.`);
    isValid = false;
  }
  if (!isValidSlug(id)) {
    console.error(`${ERROR_LOG} Invalid id format '${id}'. Data was not mapped.`);
    isValid = false;
  }
  if (!title) {
    console.warn(`${WARN_LOG} Missing title. Fallbacked to id.`);
  }
  return isValid;
};

const mapLot = (
  lot: Lot,
  neighborhood: Pick<Neighborhood, 'id' | 'title' | 'color'>,
  world: Pick<World, 'id' | 'title'>
): LotDTO => ({
  id: lot.id,
  title: lot.title || lot.id,
  description: lot.description || '',
  transaction_type: lot.priceDetails?.rent ? 'rent' : 'buy',
  price: lot.priceDetails?.rent ? lot.priceDetails.rent : lot.priceDetails?.wiki || -5,
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
    type: lot.buildingDetails?.type,
    bedrooms: lot.buildingDetails?.bedrooms,
    bathrooms: lot.buildingDetails?.bathrooms,
    floors: lot.buildingDetails?.floors,
  },
  image_url: lot.imageURL || '',
  world,
  neighborhood,
});

const transformLotData = (list: LotDataByWorld): LotDataByNeighborhood => {
  const neighsList = Object.values(list);
  return neighsList.reduce<LotDataByNeighborhood>((acc, neighList) => {
    return { ...acc, ...neighList };
  }, {});
};

const mapToDTO = (lotsByWorld: LotDataByWorld): LotDTO[] => {
  const lotsByNeighborhood = transformLotData(lotsByWorld);

  // for each neighborhood key
  const validLots = NEIGHBORHOOD_KEYS.reduce<any>((accN, neighborhoodId) => {
    // if there is no info for that neighborhood, skip
    if (!lotsByNeighborhood[neighborhoodId]) {
      console.warn(`${WARN_LOG} Known neighborhood '${neighborhoodId}' is not mapped in lots. Skipping.`);
      return accN;
    }

    // for lots listed in the neighborhood
    const lots = lotsByNeighborhood[neighborhoodId].reduce<any>((accL, l, index) => {
      if (!validateDomainFields(l.id, l.title, index)) return accL;

      const neighborhoodRef = neighborhoodSummaryById[neighborhoodId];
      const worldRef = neighborhoodRef?.world;

      if (!worldRef?.id) {
        console.warn(`${WARN_LOG} Missing ref to world id in lot '${l.id}'. Skipping.`);
        return accL;
      }

      const world = {
        id: worldRef.id,
        title: worldSummaryById[worldRef.id]?.title || worldRef.id,
      };
      const neighborhood = {
        id: neighborhoodId,
        title: neighborhoodRef?.title || neighborhoodId,
        color: neighborhoodRef?.color || 'default',
      };

      // if lot is valid, map to DTO w/ world and neighborhoodref
      return [...accL, mapLot(l, neighborhood, world)];
    }, []);

    return [...accN, ...lots];
  }, []);

  return validLots;
};

export const lots = mapToDTO(lotData);

export const lotSummaryById = lots.reduce<LotSummaryById>((acc, l) => {
  return {
    ...acc,
    [l.id]: l,
  };
}, {});
export const LOT_KEYS = Object.keys(lotSummaryById) as Array<keyof LotSummaryById>;

// console.log(LOT_KEYS);
