import type { World, WorldDTO, WorldSummaryById } from '../types/world.js';
import { isValidSlug } from '../utils/functions.js';
import { worldData } from './source/worldData.js';

const ERROR_LOG = '❌ Error mapping worlds:';
const WARN_LOG = '⚠️ Warning mapping worlds:';

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

const mapToDTO = (list: World[]) => {
  return list.reduce<WorldDTO[]>((acc, w, index) => {
    if (!validateDomainFields(w.id, w.title, index)) return acc;

    return [...acc, { id: w.id, title: w.title || w.id, description: w.description || '' }];
  }, []);
};
export const worlds = mapToDTO(worldData);

// ref info
export const worldSummaryById = worlds.reduce<WorldSummaryById>((acc, w) => {
  return {
    ...acc,
    [w.id]: {
      id: w.id,
      title: w.title,
    },
  };
}, {});
export const WORLD_KEYS = Object.keys(worldSummaryById) as Array<keyof WorldSummaryById>;

// console.log(WORLD_KEYS);
