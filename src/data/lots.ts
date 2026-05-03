import { worldSummaryById } from './worlds.js';
import { WORLD_KEYS } from './worlds.js';
import { NEIGHBORHOOD_KEYS, neighborhoodSummaryById } from './neighborhoods.js';
import { lotData } from './source/lotData.js';
import { isValidSlug } from '../utils/functions.js';
import type { LotDTO, Lot } from '../types/lot.js';
import type { Neighborhood } from '../types/neighborhood.js';
import type { World } from '../types/world.js';
import type { LotDataByNeighborhood, LotDataByWorld } from './source/lotData.js';
import type { MainPriceDTO, RentDetailsDTO, BuyDetailsDTO } from '../types/lot.js';

const ERROR_LOG = '❌ Error mapping lots:';
const WARN_LOG = '⚠️ Warning mapping lots:';

/**
 * Validations:
 * error: id missing
 * error: id invalid
 * warn: title missing
 */
const validateSource = (id: string, title: string, index: number) => {
  let isValid = true;
  if (!id) {
    console.error(`${ERROR_LOG} Missing id. Data[${index}] was not mapped.`);
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
  let mainPrice: MainPriceDTO = null;
  let rentDetails: RentDetailsDTO = {
    rent: null,
    deposit: null,
    furniture: null,
    period: null,
    price_history: {
      in_game: { furniture: null },
      pre_game: { furniture: null },
    },
  };
  let buyHistory: BuyDetailsDTO = {
    price: null,
    price_history: {
      pre_game: null,
      in_game: null,
    },
  };

  if (lot.type === 'residential') {
    if (lot.rentDetails) {
      const { inGame, preGame } = lot.rentDetails;
      mainPrice = inGame?.rent || null;
      rentDetails = {
        rent: inGame?.rent || null,
        deposit: inGame?.deposit || null,
        furniture: inGame?.furniture || null,
        period: inGame?.period || null,
        price_history: {
          in_game: { furniture: inGame?.furniture || null },
          pre_game: { furniture: preGame?.furniture || null },
        },
      };
    }
    if (lot.buyDetails) {
      const { inGame, preGame } = lot.buyDetails;
      if (!mainPrice) mainPrice = inGame || null;
      buyHistory = {
        price: inGame || null,
        price_history: {
          pre_game: preGame || null,
          in_game: inGame || null,
        },
      };
    }
  }

  return {
    // metadata
    id: lot.id,
    title: lot.title,
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
    owner: lot.owner || null,
    // building
    building_details: {
      type: lot.buildingDetails?.type,
      apartment_title: lot.buildingDetails?.apartmentTitle || null,
      bedrooms: lot.buildingDetails?.bedrooms || null,
      bathrooms: lot.buildingDetails?.bathrooms || null,
      floors: lot.buildingDetails?.floors || null,
    },
    // transaction
    transaction: {
      type: lot?.transactionType || null,
      main_price: mainPrice,
      rent_details: rentDetails,
      buy_details: buyHistory,
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
      if (!validateSource(l.id, l.title, index)) return accL;

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
