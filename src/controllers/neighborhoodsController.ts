import { listNeighborhoods } from '../services/neighborhoodsService.js';
import type { FastifyRequest, FastifyReply } from 'fastify';

export const getNeighborhoods = async (request: FastifyRequest<any>, reply: FastifyReply) => {
  const neighborhoods = listNeighborhoods();
  return reply.send(neighborhoods);
};
