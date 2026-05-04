import { getWorlds } from '../controllers/worldsController.js';
import type { FastifyInstance } from 'fastify';

export const worldsRoutes = (app: FastifyInstance) => {
  app.get('/', getWorlds);
};
