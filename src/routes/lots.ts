import { getLots, getLotById } from '../controllers/lotsController.js';
import type { FastifyInstance } from 'fastify';

export const lotsRoutes = (app: FastifyInstance) => {
  app.get('/', getLots);
  app.get('/:id', getLotById);
};
