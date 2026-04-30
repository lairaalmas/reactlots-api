import type { NeighborhoodDTO, NeighborhoodSummaryById } from '../types/neighborhood.js';
import { worldSummaryById, WORLD_KEYS } from '../data/worlds.js';
import { isValidSlug } from '../utils/functions.js';

import type { NeighborhoodData } from './source/neighborhoodData.js';
import { neighborhoodData } from './source/neighborhoodData.js';

const ERROR_LOG = '❌ Error mapping neighborhoods:';
const WARN_LOG = '⚠️ Warning mapping neighborhoods:';

const mapNeighborhoods = (list: NeighborhoodData) => {
  const validKeys = [];

  // for each world key
  const validNeigh = WORLD_KEYS.reduce<NeighborhoodDTO[]>((acc, worldId) => {
    if (!list[worldId]) {
      console.warn(`${WARN_LOG} No neighborhoods mapped for world id '${worldId}'`);
      return acc;
    }

    // for each neighborhood (list) from that world
    const neighFromWorld = list[worldId].reduce<NeighborhoodDTO[]>((accN, n, index) => {
      if (!n.id) {
        console.error(`${ERROR_LOG} Missing neighborhood id from world '${worldId}'. Neigh[${index}] was not mapped.`);
        return accN;
      }
      if (!isValidSlug(n.id)) {
        console.error(`${ERROR_LOG} Invalid id format of '${n.id}'. Not mapped.`);
        return accN;
      }
      if (!n.title) {
        if (!n.title) console.warn(`${WARN_LOG} Missing title for '${n.id}'. Fallbacked to id.`);
        return accN;
      }
      if (!worldSummaryById[worldId]?.title) {
        if (!n.title)
          console.warn(`${WARN_LOG} Missing reference to world '${worldId}' title. Fallbacked to world id.`);
        return accN;
      }

      const neigh = {
        id: n.id,
        title: n.title || n.id,
        description: n.description || '',
        color: n.color || 'default',
        world: {
          id: worldId,
          title: worldSummaryById[worldId]?.title || worldId,
        },
      };
      return [...accN, neigh];
    }, []);

    validKeys.push(worldId);

    return [...acc, ...neighFromWorld];
  }, []);

  const keysDiff = Object.keys(neighborhoodData).length - validKeys.length;
  if (keysDiff > 0) {
    console.warn(`${WARN_LOG} There are neighborhoods mapped to ${keysDiff} unknown world(s).`);
  }

  return validNeigh;
};

export const neighborhoods = mapNeighborhoods(neighborhoodData);

// { 'neigh-id': { <full neighborhood info> } }
export const neighborhoodSummaryById = neighborhoods.reduce<NeighborhoodSummaryById>((acc, n) => {
  const neigh = {
    id: n.id,
    title: n.title,
    color: n.color,
    world: { ...n.world },
  };
  acc[n.id] = neigh;
  return acc;
}, {});

export const NEIGHBORHOOD_KEYS = Object.keys(neighborhoodSummaryById) as Array<keyof NeighborhoodSummaryById>;
