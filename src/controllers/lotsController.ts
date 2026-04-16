import type { FastifyRequest, FastifyReply } from 'fastify';
import { listLots, findLotById } from '../services/lotsService.js';

type Query = {
  world?: string;
  neighborhood?: string;
};
type Params = {
  id: string;
};

export const getLots = async (request: FastifyRequest<{ Querystring: Query }>, reply: FastifyReply) => {
  const filters = request.query;

  const lots = listLots(filters);
  return reply.send(lots);
};

export const getLotById = async (request: FastifyRequest<{ Params: Params }>, reply: FastifyReply) => {
  const lotId = request.params.id;

  if (!lotId) {
    return reply.status(404).send({ message: 'Lot not found for undefined id' });
  }

  const lot = findLotById(lotId);

  if (!lot) {
    return reply.status(404).send({ message: 'Lot not found' });
  }

  return reply.send(lot);
};
