import { worlds } from '../data/worlds.js';
import type { WorldDTO } from '../types/world.js';

export const listWorlds = (): WorldDTO[] => {
  return worlds;
};
