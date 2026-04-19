import type { Neighborhood, NeighborhoodDTO } from '../types/neighborhood.js';
import { worldMapper } from '../types/world.js';

const data: Neighborhood[] = [
  {
    id: 'foundry-cove',
    title: 'Foundry cove',
    description:
      'Located in southern Willow Creek, Foundry Cove has lots of character (and its share of characters). Residents enjoy modest homes with a canal nearby for fishing, and a charming, active railroad.',
    worldId: 'willow-creek',
  },
  {
    id: 'courtyard-lane',
    title: 'Courtyard Lane',
    description:
      'Courtyard Lane offers affordable homes for the upwardly mobile set. Classic styling mingles with larger shotguns and more expansive homes.',
    worldId: 'willow-creek',
  },
  {
    id: 'pendula-view',
    title: 'Pendula View',
    description:
      'This historical section of Willow Creek, the Garden Community boasts large mansions and the cache that comes with living in them.',
    worldId: 'willow-creek',
  },
  {
    id: 'sage-estates',
    title: 'Sage Estates',
    description:
      "Willow Creek's most desirable area, Sage Estates features large, sprawling estates, lush landscaping, and the best high society has to offer.",
    worldId: 'willow-creek',
  },
  {
    id: 'crawdad-quarter',
    title: 'Crawdad Quarter',
    description:
      'Crawdad Quarter is the heart of Willow Creek. All of the towns liveliness, from parks to nightlife, can be found in this neighborhood.',
    worldId: 'willow-creek',
  },
  {
    id: 'undefined',
    title: 'Undefined',
    description: '',
    worldId: 'willow-creek',
  },
  // 'oasis-springs': [
  // {
  //   id: 'bedrock-strait',
  //   title: 'Bedrock Strait',
  //   description: '',
  // },
  // {
  //   id: 'parched-prospect',
  //   title: 'Parched Prospect',
  //   description: '',
  // },
  // {
  //   id: 'akyward-palms',
  //   title: 'Skyward Palms',
  //   description: '',
  // },
  // {
  //   id: 'acquisition-butte',
  //   title: 'Acquisition Butte',
  //   description: '',
  // },
  // {
  //   id: 'mirage-canyon',
  //   title: 'Mirage Canyon',
  //   description: '',
  // },
  // {
  //   id: 'desert-bloom-park',
  //   title: 'Desert Bloom Park',
  //   description: '',
  // },
  // // secret lot
  // {
  //   id: 'forgotten-grotto',
  //   title: 'Forgotten Grotto',
  //   description: '',
  // },
  // ],
];

export const neighborhoods: NeighborhoodDTO[] = data.map((neigh: Neighborhood) => ({
  id: neigh.id,
  title: neigh.title,
  description: neigh.description,
  world: {
    id: neigh.worldId,
    title: worldMapper[neigh.worldId] || '',
  },
}));
