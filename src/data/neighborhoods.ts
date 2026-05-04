import { worldSummaryById, WORLD_IDS, WORLD_ID_SET } from './worlds.js';
import { isValidSlug } from '../utils/functions.js';
import { neighborhoodData } from './source/neighborhoodData.js';
import type { NeighborhoodDTO, NeighborhoodSummaryById } from '../types/neighborhood.js';
import type { NeighborhoodData } from './source/neighborhoodData.js';

/**
 * (Sequence)
 * source data
 * validate source
 * map to DTO
 * create lookup/index
 * export keys
 */

const ERROR_LOG = '❌ Error mapping neighborhoods:';
const WARN_LOG = '⚠️ Warning mapping neighborhoods:';

/**
 * Validations:
 *
 * error: id missing
 * error: id invalid
 * warn: title missing
 */
const validateSource = (id: string, title: string) => {
  let isValid = true;

  if (!id) {
    console.error(`${ERROR_LOG} Missing id. Skipping.`);
    isValid = false;
  } else if (!isValidSlug(id)) {
    console.error(`${ERROR_LOG} Invalid id format '${id}'. Skipping.`);
    isValid = false;
  }
  if (!title) {
    console.warn(`${WARN_LOG} Missing title for '${id}'. Fallbacking to id.`);
  }
  return isValid;
};

const mapToDTO = (neighborhoodsByWorld: NeighborhoodData) => {
  const result: NeighborhoodDTO[] = [];
  const mappedIds = new Set<string>();

  // for each ref world key
  for (const worldId of WORLD_IDS) {
    const world = worldSummaryById[worldId];
    const worldTitle = world?.title || worldId;
    const neighborhoods = neighborhoodsByWorld[worldId];

    // if there are no neighborhoods for that world, skip
    if (!neighborhoods) {
      console.warn(`${WARN_LOG} Known world '${worldId}' is not present in neighborhood data. Skipping.`);
      continue;
    }
    if (neighborhoods.length === 0) {
      console.warn(`${WARN_LOG} Known world '${worldId}' has no neighborhoods mapped. Skipping.`);
      continue;
    }

    // inform of missing world title
    if (!world?.title) console.warn(`${WARN_LOG} Missing ref to world title of '${worldId}'. Fallbacking to world id.`);

    // for each neighborhood
    for (const neighborhood of neighborhoods) {
      const { id, title, description, color } = neighborhood;

      if (!validateSource(id, title)) continue;

      // If there are duplicate neighborhood ids, skip
      if (mappedIds.has(id)) {
        console.error(`${ERROR_LOG} Duplicate neighborhood id '${id}'. Skipping.`);
        continue;
      }

      mappedIds.add(id);

      result.push({
        id,
        title: title || id,
        description: description || '',
        color: color || 'default',
        world: {
          id: worldId,
          title: worldTitle,
        },
      });
    }
  }

  // Log worlds in neighborhood list that are not in worldSummaryById
  for (const worldId of Object.keys(neighborhoodsByWorld)) {
    if (!WORLD_ID_SET.has(worldId))
      console.warn(`${WARN_LOG} World '${worldId}' from neighborhood list is unknown. Skipped.`);
  }

  return result;
};

export const neighborhoods = mapToDTO(neighborhoodData);

// ref
const createNeighborhoodSummaryById = (list: NeighborhoodDTO[]) =>
  list.reduce<NeighborhoodSummaryById>((acc, n) => {
    acc[n.id] = {
      id: n.id,
      title: n.title,
      color: n.color,
      world: {
        id: n.world.id,
        title: n.world.title,
      },
    };
    return acc;
  }, {});

export const neighborhoodSummaryById = createNeighborhoodSummaryById(neighborhoods);

export const NEIGHBORHOOD_IDS = Object.keys(neighborhoodSummaryById) as Array<keyof NeighborhoodSummaryById>;
export const NEIGHBORHOOD_ID_SET = new Set(NEIGHBORHOOD_IDS);
