import type { WorldDTO, WorldSummaryById } from '../types/world.js';
import { isValidSlug } from '../utils/functions.js';
import { worldData } from './source/worldData.js';

const mapWorlds = (list: WorldDTO[]) => {
  const ERROR_LOG = '❌ Error mapping worlds:';
  const WARN_LOG = '⚠️ Warning mapping worlds:';

  return list.reduce<WorldDTO[]>((acc, w, index) => {
    if (!w.id) {
      console.error(`${ERROR_LOG} Missing world id. Data[${index}] was not mapped.`);
      return acc;
    }

    if (!isValidSlug(w.id)) {
      console.error(`${ERROR_LOG} Invalid id format of '${w.id}'. Not mapped.`);
      return acc;
    }

    if (!w.title) console.warn(`${WARN_LOG} Missing title field for id '${w.id}'. Fallbacked to id.`);

    return [...acc, { id: w.id, title: w.title || w.id, description: w.description || '' }];
  }, []);
};

export const worlds = mapWorlds(worldData);

export const worldSummaryById = worlds.reduce<WorldSummaryById>((acc, w) => {
  // only info used by other entities
  acc[w.id] = {
    id: w.id,
    title: w.title,
  };
  return acc;
}, {});

export const WORLD_KEYS = Object.keys(worldSummaryById) as Array<keyof WorldSummaryById>;
