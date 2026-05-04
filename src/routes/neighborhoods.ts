import { getNeighborhoods } from '../controllers/neighborhoodsController.js';
import type { FastifyInstance } from 'fastify';

export const neighborhoodsRoutes = (app: FastifyInstance) => {
  app.get('/', getNeighborhoods);
};
