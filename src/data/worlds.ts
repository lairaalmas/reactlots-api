import { isValidSlug } from '../utils/functions.js';
import { worldData } from './source/worldData.js';
import type { World, WorldDTO, WorldSummaryById } from '../types/world.js';

const ERROR_LOG = '❌ Error mapping worlds:';
const WARN_LOG = '⚠️ Warning mapping worlds:';

/**
 * (Sequence)
 * source data
 * validate source
 * map to DTO
 * create lookup/index
 * export keys
 */

/**
 * Validations:
 * error: id missing
 * error: id invalid
 * warn: title missing
 */
const validateWorldSource = (id: string, title: string, index: number) => {
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
  return list.reduce<WorldDTO[]>((acc, w, index) => {
    if (!validateWorldSource(w.id, w.title, index)) return acc;

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

export const WORLD_KEYS = Object.keys(worldSummaryById) as Array<keyof WorldSummaryById>;

// console.log(WORLD_KEYS);
