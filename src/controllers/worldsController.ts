import type { FastifyRequest, FastifyReply } from 'fastify';
import { listWorlds } from '../services/worldsService.js';

export const getWorlds = async (request: FastifyRequest<any>, reply: FastifyReply) => {
  const worlds = listWorlds();

  return reply.send(worlds);
};
