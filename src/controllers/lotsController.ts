import type { FastifyRequest, FastifyReply } from 'fastify';
import { listLots, findLotById } from '../services/lotsService.js';

type Query = {
  world?: string;
  neighborhood?: string;
};
type Params = {
  id: string;
};
type ParseLotQueryParam = {
  param: string;
  value: string | undefined;
};

const isValidSlug = (value: string): boolean => {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
};

const parseLotQueryParam = ({ param = 'param', value }: ParseLotQueryParam): string => {
  if (!value) {
    return '';
  }

  const trimmed = typeof value === 'string' ? value?.trim() : '';

  if (!trimmed || trimmed.length > 50 || !isValidSlug(trimmed)) {
    throw new Error(`${param} is invalid`);
  }

  return trimmed;
};

const parseLotId = (value: string): string => {
  if (!value) {
    throw new Error('Lot id is required');
  }

  const trimmed = typeof value === 'string' ? value?.trim() : '';

  if (!trimmed || trimmed.length > 50 || !isValidSlug(trimmed)) {
    throw new Error('Lot id is invalid');
  }

  return trimmed;
};

export const getLots = async (request: FastifyRequest<{ Querystring: Query }>, reply: FastifyReply) => {
  const _world = request.query.world;
  const _neigh = request.query.neighborhood;

  try {
    const filters = {
      world: parseLotQueryParam({ param: 'world', value: _world }),
      neighborhood: parseLotQueryParam({ param: 'neighborhood', value: _neigh }),
    };

    const lots = listLots(filters);

    return reply.send(lots);
  } catch (err: unknown) {
    const error = err as Error;
    return reply.status(404).send({ message: error?.message || 'Error searching lots' });
  }
};

export const getLotById = async (request: FastifyRequest<{ Params: Params }>, reply: FastifyReply) => {
  const _lotId = request.params.id;

  try {
    const lotId = parseLotId(_lotId);

    const lot = findLotById(lotId);

    if (!lot) {
      throw new Error('Lot not found');
    }

    return reply.send(lot);
  } catch (err: unknown) {
    const error = err as Error;
    return reply.status(404).send({ message: error?.message || 'Error getting lot id' });
  }
};
