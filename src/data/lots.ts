import { worldSummaryById } from './worlds.js';
import { WORLD_KEYS } from './worlds.js';
import { NEIGHBORHOOD_KEYS, neighborhoodSummaryById } from './neighborhoods.js';
import { lotData } from './source/lotData.js';
import { isValidSlug } from '../utils/functions.js';
import { numberValueTBD } from '../utils/constants.js';
import type { LotDTO, Lot } from '../types/lot.js';
import type { Neighborhood } from '../types/neighborhood.js';
import type { World } from '../types/world.js';
import type { LotDataByNeighborhood, LotDataByWorld } from './source/lotData.js';
import type { LotSummaryById } from '../types/lot.js';

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
    console.warn(`${WARN_LOG} Missing title for '${id}'. Fallbacked to id.`);
  }
  return isValid;
};

const mapLot = (
  lot: Lot,
  neighborhood: Pick<Neighborhood, 'id' | 'title' | 'color'>,
  world: Pick<World, 'id' | 'title'>
): LotDTO => {
  const price = lot.rentDetails?.inGame?.rent
    ? lot.rentDetails?.inGame?.rent
    : lot.buyDetails?.inGame || numberValueTBD;

  return {
    // metadata
    id: lot.id,
    title: lot.title || lot.id,
    description: lot.description || '',
    image_url: lot.imageURL || '',
    // metadata - ref
    world,
    neighborhood,
    // lot
    type: lot.type,
    dimensions: {
      width: lot.dimensions?.width,
      depth: lot.dimensions?.depth,
    },
    availability: lot.availability,
    // lot - sim
    owner: lot.owner || '',
    // transaction
    transaction: {
      type: lot?.transactionType,
      main_price: price,
      rent: {
        rent: lot.rentDetails?.inGame?.rent,
        deposit: lot.rentDetails?.inGame?.deposit,
        furniture: lot.rentDetails?.inGame?.furniture,
        period: lot.rentDetails?.inGame?.period || 'week',
      },
      rent_history: {
        pre_game: lot.rentDetails?.preGame,
        in_game: lot.rentDetails?.inGame,
      },
      buy: {
        price: lot.buyDetails?.inGame,
      },
      buy_history: {
        pre_game: lot.buyDetails?.preGame,
        in_game: lot.buyDetails?.inGame,
      },
    },
    // building
    building_details: {
      type: lot.buildingDetails?.type,
      bedrooms: lot.buildingDetails?.bedrooms,
      bathrooms: lot.buildingDetails?.bathrooms,
      floors: lot.buildingDetails?.floors,
    },
  };
};

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

  Object.keys(lotsByWorld)
    .filter((id) => !WORLD_KEYS.includes(id))
    .forEach((id) => {
      console.warn(`${WARN_LOG} World '${id}' from lot list is unknown. Not mapped.`);
    });
  Object.keys(lotsByNeighborhood)
    .filter((id) => !NEIGHBORHOOD_KEYS.includes(id))
    .forEach((id) => {
      console.warn(`${WARN_LOG} Neighborhood '${id}' from lot list is unknown. Not mapped.`);
    });

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
