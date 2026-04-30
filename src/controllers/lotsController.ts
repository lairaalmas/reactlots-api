import type { FastifyRequest, FastifyReply } from 'fastify';
import { listLots, findLotById, sortLots } from '../services/lotsService.js';
import type { LotFilters, LotQueryParams } from '../types/lot.js';
import { isValidSlug } from '../utils/functions.js';

type Params = {
  id: string;
};
type ParseLotQueryParam = {
  param: string;
  value: string | undefined;
};

const isValidNumber = (value: number): boolean => {
  if (isNaN(value) || value < 0 || value > 10) return false;

  return true;
};

const parseLotQueryParamString = ({ param = 'param', value }: ParseLotQueryParam): string => {
  if (!value) {
    return '';
  }

  const trimmed = typeof value === 'string' ? value?.trim() : '';

  if (!trimmed || trimmed.length > 50 || !isValidSlug(trimmed)) {
    throw new Error(`${param} is invalid`);
  }

  return trimmed;
};

const parseLotQueryParamNumber = ({ param = 'param', value }: ParseLotQueryParam): number => {
  if (!value) {
    return 0;
  }

  const trimmed = typeof value === 'string' ? value?.trim() : '';

  if (!trimmed || trimmed.length > 50) {
    throw new Error(`${param} is invalid`);
  }

  const numericValue = parseInt(trimmed);

  if (!isValidNumber(numericValue)) {
    throw new Error(`${param} is invalid`);
  }

  return numericValue;
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

export const getLots = async (request: FastifyRequest<{ Querystring: LotQueryParams }>, reply: FastifyReply) => {
  const _world = request.query.world;
  const _neigh = request.query.neighborhood;

  const _type = request.query.type;
  const _availability = request.query.availability;
  const _transactionType = request.query.transaction_type;

  const _buildingType = request.query.building_type;
  const _bedrooms = request.query.bedrooms;
  const _bathrooms = request.query.bathrooms;
  const _floors = request.query.floors;

  // const _min_price = request.query.minPrice;
  // const _max_price = request.query.maxPrice;

  const _sort = request.query.sort;
  const _sortBy = request.query.sort_by;

  try {
    const filters: LotFilters = {
      world: parseLotQueryParamString({ param: 'world', value: _world }),
      neighborhood: parseLotQueryParamString({ param: 'neighborhood', value: _neigh }),
      type: parseLotQueryParamString({ param: 'type', value: _type }),
      availability: parseLotQueryParamString({ param: 'availability', value: _availability }),
      transactionType: parseLotQueryParamString({ param: 'transaction_type', value: _transactionType }),
      buildingType: parseLotQueryParamString({ param: 'building_type', value: _buildingType }),
      bedrooms: parseLotQueryParamNumber({ param: 'bedrooms', value: _bedrooms }),
      bathrooms: parseLotQueryParamNumber({ param: 'bathrooms', value: _bathrooms }),
      floors: parseLotQueryParamNumber({ param: 'floors', value: _floors }),
      sort: parseLotQueryParamString({ param: 'sort', value: _sort }),
      sortBy: parseLotQueryParamString({ param: 'sort_by', value: _sortBy }),
    };

    const lots = listLots(filters);

    const sortedLots = sortLots(lots, filters?.sort, filters?.sortBy);

    return reply.send(sortedLots);
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
