import type { FastifyInstance } from 'fastify';
import { getWorlds } from '../controllers/worldsController.js';

export const worldsRoutes = (app: FastifyInstance) => {
  app.get('/', getWorlds);
};
