import type { Neighborhood, NeighborhoodDTO } from '../types/neighborhood.js';
import { worldMapper } from '../data/worlds.js';

const data: Neighborhood[] = [
  // willow creek
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
    id: 'willow-creek-undefined',
    title: 'Other',
    description: '',
    worldId: 'willow-creek',
  },
  // oasis springs
  {
    id: 'bedrock-strait',
    title: 'Bedrock Strait',
    description: '',
    worldId: 'oasis-springs',
  },
  {
    id: 'parched-prospect',
    title: 'Parched Prospect',
    description: '',
    worldId: 'oasis-springs',
  },
  {
    id: 'akyward-palms',
    title: 'Skyward Palms',
    description: '',
    worldId: 'oasis-springs',
  },
  {
    id: 'acquisition-butte',
    title: 'Acquisition Butte',
    description: '',
    worldId: 'oasis-springs',
  },
  {
    id: 'mirage-canyon',
    title: 'Mirage Canyon',
    description: '',
    worldId: 'oasis-springs',
  },
  {
    id: 'oasis-springs-undefined',
    title: 'Other',
    description: '',
    worldId: 'oasis-springs',
  },
  // newcrest
  {
    id: 'bridgeview',
    title: 'Bridgeview',
    description: 'TODO',
    worldId: 'newcrest',
  },
  {
    id: 'llama-lagoon',
    title: 'Llama Lagoon',
    description: 'TODO',
    worldId: 'newcrest',
  },
  {
    id: 'ridgeline-drive',
    title: 'Ridgeline Drive',
    description: 'TODO',
    worldId: 'newcrest',
  },
];

export const neighborhoodMapper: Record<string, string> = {
  // willow creek
  'foundry-cove': 'Foundry cove',
  'courtyard-lane': 'Courtyard Lane',
  'pendula-view': 'Pendula View',
  'sage-estates': 'Sage Estates',
  'crawdad-quarter': 'Crawdad Quarter',
  'willow-creek-undefined': 'Other',
  // oasis springs
  'bedrock-strait': 'Bedrock Strait',
  'parched-prospect': 'Parched Prospect',
  'akyward-palms': 'Skyward Palms',
  'acquisition-butte': 'Acquisition Butte',
  'mirage-canyon': 'Mirage Canyon',
  'oasis-springs-undefined': 'Other',
  // newcrest
  bridgeview: 'Bridgeview',
  'llama-lagoon': 'Lama Lagoon',
  'ridgeline-drive': 'Ridgeline Drive',
};

export const neighborhoods: NeighborhoodDTO[] = data.map((neigh: Neighborhood) => ({
  id: neigh.id,
  title: neigh.title,
  description: neigh.description,
  world: {
    id: neigh.worldId,
    title: worldMapper[neigh.worldId] || '',
  },
}));
