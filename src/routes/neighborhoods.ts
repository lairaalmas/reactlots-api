import type { FastifyInstance } from 'fastify';
import { getNeighborhoods } from '../controllers/neighborhoodsController.js';

export const neighborhoodsRoutes = (app: FastifyInstance) => {
  app.get('/', getNeighborhoods);
};
