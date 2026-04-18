export type Neighborhood = {
  id: string;
  title: string;
  description: string;
  worldId: string;
};

export type NeighborhoodDTO = {
  id: string;
  title: string;
  description: string;
  world: {
    id: string;
    title: string;
  };
};
