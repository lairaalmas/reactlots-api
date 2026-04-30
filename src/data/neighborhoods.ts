import type { NeighborhoodDTO, NeighborhoodSummaryById } from '../types/neighborhood.js';
import { worldSummaryById, WORLD_KEYS } from '../data/worlds.js';
import { isValidSlug } from '../utils/functions.js';

import type { NeighborhoodData } from './source/neighborhoodData.js';
import { neighborhoodData } from './source/neighborhoodData.js';

const ERROR_LOG = '❌ Error mapping neighborhoods:';
const WARN_LOG = '⚠️ Warning mapping neighborhoods:';

/**
 * Validations:
 *
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

const mapToDTO = (list: NeighborhoodData) => {
  // for each world key
  const validNeighborhoods = WORLD_KEYS.reduce<NeighborhoodDTO[]>((acc, worldId) => {
    // if there is no info for that world, skip
    if (!list[worldId]) {
      console.warn(`${WARN_LOG} Known world '${worldId}' is not mapped in neighborhoods. Skipping.`);
      return acc;
    }

    // for each neighborhood listed in the world key
    const neighborhoods = list[worldId].reduce<NeighborhoodDTO[]>((accN, n, index) => {
      if (!validateDomainFields(n.id, n.title, index)) return acc;

      if (!worldSummaryById[worldId]?.title)
        console.warn(`${WARN_LOG} Missing ref to neighborhood title '${worldId}'. Fallbacking to world id.`);

      // if neighborhood is valid, map to DTO w/ world ref
      return [
        ...accN,
        {
          id: n.id,
          title: n.title || n.id,
          description: n.description || '',
          color: n.color || 'default',
          world: {
            id: worldId,
            title: worldSummaryById[worldId]?.title || worldId,
          },
        },
      ];
    }, []);

    return [...acc, ...neighborhoods];
  }, []);

  // Log worlds in neighborhood list that are not in worldSummaryById
  Object.keys(list)
    .filter((worldId) => !WORLD_KEYS.includes(worldId))
    .forEach((worldId) => {
      console.warn(`${WARN_LOG} World '${worldId}' from neighborhood list is unknown. Not mapped.`);
    });

  return validNeighborhoods;
};
export const neighborhoods = mapToDTO(neighborhoodData);

// ref
export const neighborhoodSummaryById = neighborhoods.reduce<NeighborhoodSummaryById>((acc, n) => {
  return {
    ...acc,
    [n.id]: {
      id: n.id,
      title: n.title,
      color: n.color,
      world: {
        id: n.world.id,
        title: n.world.title,
      },
    },
  };
}, {});
export const NEIGHBORHOOD_KEYS = Object.keys(neighborhoodSummaryById) as Array<keyof NeighborhoodSummaryById>;

// console.log(NEIGHBORHOOD_KEYS);
