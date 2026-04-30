import type { Neighborhood } from '../../types/neighborhood.js';
import { stringValueDoesntExist } from '../../utils/constants.js';

export type NeighborhoodData = Record<string, Neighborhood[]>;

export const neighborhoodData: NeighborhoodData = {
  'willow-creek': [
    {
      id: 'foundry-cove',
      title: 'Foundry cove',
      description:
        'Located in southern Willow Creek, Foundry Cove has lots of character (and its share of characters). Residents enjoy modest homes with a canal nearby for fishing, and a charming, active railroad.',
      color: 'red',
    },
    {
      id: 'courtyard-lane',
      title: 'Courtyard Lane',
      description:
        'Courtyard Lane offers affordable homes for the upwardly mobile set. Classic styling mingles with larger shotguns and more expansive homes.',
      color: 'purple',
    },
    {
      id: 'pendula-view',
      title: 'Pendula View',
      description:
        'This historical section of Willow Creek, the Garden Community boasts large mansions and the cache that comes with living in them.',
      color: 'green',
    },
    {
      id: 'sage-estates',
      title: 'Sage Estates',
      description:
        "Willow Creek's most desirable area, Sage Estates features large, sprawling estates, lush landscaping, and the best high society has to offer.",
      color: 'orange',
    },
    {
      id: 'crawdad-quarter',
      title: 'Crawdad Quarter',
      description:
        'Crawdad Quarter is the heart of Willow Creek. All of the towns liveliness, from parks to nightlife, can be found in this neighborhood.',
      color: 'olive',
    },
    {
      id: 'willow-creek-undefined',
      title: 'Other',
      description: stringValueDoesntExist,
      color: 'default',
    },
  ],
  'oasis-springs': [
    {
      id: 'bedrock-strait',
      title: 'Bedrock Strait',
      description: stringValueDoesntExist,
      color: 'light_blue',
    },
    {
      id: 'parched-prospect',
      title: 'Parched Prospect',
      description: stringValueDoesntExist,
      color: 'green',
    },
    {
      id: 'skyward-palms',
      title: 'Skyward Palms',
      description: stringValueDoesntExist,
      color: 'red',
    },
    {
      id: 'acquisition-butte',
      title: 'Acquisition Butte',
      description: stringValueDoesntExist,
      color: 'orange',
    },
    {
      id: 'mirage-canyon',
      title: 'Mirage Canyon',
      description: stringValueDoesntExist,
      color: 'purple',
    },
    {
      id: 'oasis-springs-undefined',
      title: 'Other',
      description: stringValueDoesntExist,
      color: 'default',
    },
  ],
  newcrest: [
    {
      id: 'bridgeview',
      title: 'Bridgeview',
      description: 'This family-friendly neighborhood has a lovely picnic area and a striking city skyline backdrop.',
      color: 'green',
    },
    {
      id: 'llama-lagoon',
      title: 'Llama Lagoon',
      description:
        "With lakeside walkways and public playground equipment, this neighborhood's just the right amount of cosmopolitan.",
      color: 'orange',
    },
    {
      id: 'ridgeline-drive',
      title: 'Ridgeline Drive',
      description:
        'This busy strip of real estate lining the streets of the Newcrest suburbs boasts ample hiking trails.',
      color: 'purple',
    },
  ],
  'san-myshuno': [
    {
      id: 'spice-market',
      title: 'Spice Market',
      description: 'A family neighborhood famous for its Spice Festival, Flea Market and dockland views.',
      color: 'orange',
    },
    {
      id: 'arts-quarter',
      title: 'Arts Quarter',
      description:
        'Home to the Humor and Hijinks Festival, the bohemian Arts Quarter is beloved by musicians, artists and all manner of creative types.',
      color: 'purple',
    },
    {
      id: 'fashion-district',
      title: 'Fashion District',
      description:
        'Popular with young and trendy Sims, the Fashion District is also home to the Romance Festival and GeekCon.',
      color: 'teal',
    },
    {
      id: 'uptown',
      title: 'Uptown',
      description: 'The luxurious heart of the City, Uptown is home to the rich, powerful... and slightly odd.',
      color: 'blue',
    },
    {
      id: 'san-myshuno-undefined',
      title: 'Other',
      description: stringValueDoesntExist,
      color: 'default',
    },
  ],
};
