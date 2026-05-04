import { isValidSlug } from '../utils/functions.js';
import { worldData } from './source/worldData.js';
import type { World, WorldDTO, WorldSummaryById } from '../types/world.js';

/**
 * (Sequence)
 * source data
 * validate source
 * map to DTO
 * create lookup/index
 * export keys
 */

const ERROR_LOG = '❌ Error mapping worlds:';
const WARN_LOG = '⚠️ Warning mapping worlds:';

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
  } else if (!isValidSlug(id)) {
    console.error(`${ERROR_LOG} Invalid id format '${id}'. Data was not mapped.`);
    isValid = false;
  }
  if (!title) {
    console.warn(`${WARN_LOG} Missing title for '${id}'. Fallbacked to id.`);
  }
  return isValid;
};

const mapToDTO = (list: World[]) => {
  const mappedIds = new Set<string>();
  return list.reduce<WorldDTO[]>((acc, w, index) => {
    if (!validateSource(w.id, w.title, index)) return acc;

    if (mappedIds.has(w.id)) {
      console.error(`${ERROR_LOG} Duplicate neighborhood id '${w.id}'. Skipping.`);
      return acc;
    }
    mappedIds.add(w.id);

    acc.push({
      id: w.id,
      title: w.title || w.id,
      description: w.description || '',
    });

    return acc;
  }, []);
};

export const worlds = mapToDTO(worldData);

// ref info
const createWorldSummaryById = (list: WorldDTO[]) => {
  const worldSummaryById: WorldSummaryById = {};

  for (const world of list) {
    worldSummaryById[world.id] = {
      id: world.id,
      title: world.title,
    };
  }

  return worldSummaryById;
};

export const worldSummaryById = createWorldSummaryById(worlds);

// worldData -> worldSummaryById -> WORLD_IDS -> WORLD_ID_SET
// (valid) neighborhoodData -> uses WORLD_IDS -> neighborhoodSummaryById -> NEIGHBORHOOD_IDS -> NEIGHBORHOOD_ID_SET
// (valid) lotData -> uses NEIGHBORHOOD_IDS
export const WORLD_IDS = Object.keys(worldSummaryById) as Array<keyof WorldSummaryById>;
export const WORLD_ID_SET = new Set(WORLD_IDS);
