import type { FastifyRequest, FastifyReply } from 'fastify';
import { listNeighborhoods } from '../services/neighborhoodsService.js';

export const getNeighborhoods = async (request: FastifyRequest<any>, reply: FastifyReply) => {
  const neighborhoods = listNeighborhoods();
  return reply.send(neighborhoods);
};
