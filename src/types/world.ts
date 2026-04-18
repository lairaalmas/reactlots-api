export type World = {
  id: string;
  title: string;
  description: string;
};

export const worldMapper: Record<string, string> = {
  'oasis-springs': 'Oasis Springs',
  'willow-creek': 'Willow Creek',
};
