import { WORLD_ID_SET } from './worlds.js';
import { NEIGHBORHOOD_IDS, NEIGHBORHOOD_ID_SET, neighborhoodSummaryById } from './neighborhoods.js';
import { lotData } from './source/lotData.js';
import { isValidSlug } from '../utils/functions.js';
import type { Lot, LotDTO, MainPriceDTO, RentDetailsDTO, BuyDetailsDTO } from '../types/lot.js';
import type { LotDataByNeighborhood, LotDataByWorld } from './source/lotData.js';

const ERROR_LOG = '❌ Error mapping lots:';
const WARN_LOG = '⚠️ Warning mapping lots:';

/**
 * Validations:
 * error: id missing
 * error: id invalid
 * warn: title missing
 */
const validateSource = (id?: string, title?: string, entityTextInsert?: string) => {
  let isValid = true;
  const entity = entityTextInsert ? `${entityTextInsert} ` : '';

  if (!id) {
    console.error(`${ERROR_LOG} Missing ${entity}id. Skipping.`);
    isValid = false;
  } else {
    if (!isValidSlug(id)) {
      console.error(`${ERROR_LOG} Invalid ${entity}id format '${id}'. Skipping.`);
      isValid = false;
    }
  }
  if (!title) {
    console.warn(`${WARN_LOG} Missing title for ${entity}'${id}'. Fallbacking to id.`);
  }
  return isValid;
};

const getMainPrice = (lot: Lot): MainPriceDTO => {
  return lot?.rentDetails?.inGame?.rent ?? lot?.buyDetails?.inGame ?? null;
};

const mapRentDetails = (lot: Lot): RentDetailsDTO => {
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
  if (lot.rentDetails) {
    const { inGame, preGame } = lot.rentDetails;
    rentDetails = {
      rent: inGame?.rent ?? null,
      deposit: inGame?.deposit ?? null,
      furniture: inGame?.furniture ?? null,
      period: inGame?.period ?? null,
      price_history: {
        in_game: { furniture: inGame?.furniture ?? null },
        pre_game: { furniture: preGame?.furniture ?? null },
      },
    };
  }
  return rentDetails;
};

const mapBuyDetails = (lot: Lot): BuyDetailsDTO => {
  let buyDetails: BuyDetailsDTO = {
    price: null,
    price_history: {
      pre_game: null,
      in_game: null,
    },
  };
  if (lot.buyDetails) {
    const { inGame, preGame } = lot.buyDetails;
    buyDetails = {
      price: inGame ?? null,
      price_history: {
        pre_game: preGame ?? null,
        in_game: inGame ?? null,
      },
    };
  }
  return buyDetails;
};

const mapLot = (lot: Lot, neighborhood: LotDTO['neighborhood'], world: LotDTO['world']): LotDTO => {
  const mainPrice = getMainPrice(lot);
  const rentDetails = mapRentDetails(lot);
  const buyDetails = mapBuyDetails(lot);

  return {
    // metadata
    id: lot.id,
    title: lot.title || lot.id,
    description: lot.description ?? '',
    image_url: lot.imageURL ?? '',
    // metadata - ref
    world,
    neighborhood,
    // lot
    type: lot.type,
    dimensions: {
      width: lot.dimensions?.width ?? null,
      depth: lot.dimensions?.depth ?? null,
    },
    availability: lot.availability,
    // lot - sim
    owner: lot.owner ?? null,
    // building
    building_details: {
      type: lot.buildingDetails?.type,
      apartment_title: lot.buildingDetails?.apartmentTitle ?? null,
      bedrooms: lot.buildingDetails?.bedrooms ?? null,
      bathrooms: lot.buildingDetails?.bathrooms ?? null,
      floors: lot.buildingDetails?.floors ?? null,
    },
    // transaction
    transaction: {
      type: lot?.transactionType ?? null,
      main_price: mainPrice,
      rent_details: rentDetails,
      buy_details: buyDetails,
    },
  };
};

const createLotsByNeighborhood = (lotsByWorld: LotDataByWorld): LotDataByNeighborhood => {
  const result: LotDataByNeighborhood = {};
  const mappedNeighIds = new Set<string>();

  for (const [worldId, neighborhoods] of Object.entries(lotsByWorld)) {
    if (!WORLD_ID_SET.has(worldId)) {
      console.warn(`${WARN_LOG} World '${worldId}' from lot list is unknown. Skipped.`);
      continue;
    }

    for (const [neighId, lots] of Object.entries(neighborhoods)) {
      if (!NEIGHBORHOOD_ID_SET.has(neighId)) {
        console.warn(`${WARN_LOG} Neighborhood '${neighId}' from lot list is unknown. Skipped.`);
        continue;
      }

      if (mappedNeighIds.has(neighId)) {
        console.error(`${ERROR_LOG} Duplicate neighborhood id '${neighId}' in lot data. Skipping.`);
        continue;
      }
      mappedNeighIds.add(neighId);

      result[neighId] = lots;
    }
  }

  return result;
};

const mapToDTO = (lotsByWorld: LotDataByWorld) => {
  const result: LotDTO[] = [];
  const mappedIds = new Set<string>();

  const lotsByNeighborhood = createLotsByNeighborhood(lotsByWorld);

  // for each ref world key
  for (const neighId of NEIGHBORHOOD_IDS) {
    const neighborhood = neighborhoodSummaryById[neighId];
    const neighTitle = neighborhood?.title || neighId;
    const neighColor = neighborhood?.color || 'default';

    const world = neighborhood?.world;
    const worldId = world?.id || '';
    const worldTitle = world?.title || worldId;

    const lots = lotsByNeighborhood[neighId];

    // if there are no lots for that neighborhood, skip
    if (!lots) {
      console.warn(`${WARN_LOG} Known neighborhood '${neighId}' is not present in lot data. Skipping.`);
      continue;
    }
    if (lots.length === 0) {
      console.warn(`${WARN_LOG} Known neighborhood '${neighId}' has no lots mapped. Skipping.`);
      continue;
    }

    if (
      !validateSource(worldId, worldTitle, 'ref to world') ||
      !validateSource(neighId, neighTitle, 'ref to neighborhood')
    )
      continue;

    const worldRef = {
      id: worldId,
      title: worldTitle,
    };
    const neighborhoodRef = {
      id: neighId,
      title: neighTitle,
      color: neighColor,
    };

    // for each lot
    for (const lot of lots) {
      const { id, title } = lot;

      if (!validateSource(id, title)) continue;

      // If there are duplicate lot ids, skip
      if (mappedIds.has(id)) {
        console.error(`${ERROR_LOG} Duplicate lot id '${id}'. Skipping.`);
        continue;
      }
      mappedIds.add(id);

      result.push(mapLot(lot, neighborhoodRef, worldRef));
    }
  }

  return result;
};

export const lots = mapToDTO(lotData);
