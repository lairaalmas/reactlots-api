export type World = {
  id: string;
  title: string;
  description: string;
};

export type WorldDTO = {
  id: string;
  title: string;
  description: string;
};

export type WorldSummaryDTO = Pick<WorldDTO, 'id' | 'title'>;
export type WorldSummaryById = Record<string, WorldSummaryDTO>;
