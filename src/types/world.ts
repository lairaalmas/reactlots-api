export type World = {
  id: string;
  title: string;
  description: string;
};

export type WorldDTO = World;

export type WorldSummaryDTO = Pick<WorldDTO, 'id' | 'title'>;
export type WorldSummaryById = Record<string, WorldSummaryDTO>;
