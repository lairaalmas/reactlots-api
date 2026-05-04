import { listWorlds } from '../services/worldsService.js';
import type { FastifyRequest, FastifyReply } from 'fastify';

export const getWorlds = async (request: FastifyRequest<any>, reply: FastifyReply) => {
  const worlds = listWorlds();

  return reply.send(worlds);
};
