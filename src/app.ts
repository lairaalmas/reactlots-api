import Fastify from 'fastify';
import cors from '@fastify/cors';
import { lotsRoutes } from './routes/lots.js';
import { worldsRoutes } from './routes/worlds.js';
import { neighborhoodsRoutes } from './routes/neighborhoods.js';

export function buildApp() {
  const app = Fastify({ logger: true });

  app.register(cors, { origin: true });

  app.register(lotsRoutes, { prefix: '/lots' });
  app.register(worldsRoutes, { prefix: '/worlds' });
  app.register(neighborhoodsRoutes, { prefix: '/neighborhoods' });

  return app;
}
