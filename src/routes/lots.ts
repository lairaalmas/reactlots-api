import type { FastifyInstance } from 'fastify';
import { getLots, getLotById } from '../controllers/lotsController.js';

export const lotsRoutes = (app: FastifyInstance) => {
  app.get('/', getLots);
  app.get('/:id', getLotById);
};
