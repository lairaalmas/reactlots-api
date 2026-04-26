import type { Lot } from '../../types/lot.js';
import { stringValueDoesntExist, numberValueDoesntExist, numberValueTBD } from '../../utils/constants.js';

export const oasisSpringsData: Lot[] = [
  // bedrock strait
  {
    id: 'sandtrap-flat',
    title: 'Sandtrap Flat',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 16982, preGame: 15842, inGame: 15842 },
    dimensions: {
      width: 30,
      depth: 20,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'house',

      bedrooms: 1,
      bathrooms: 1,
      floors: 1,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/4/41/Sandtrap_Flat.png/revision/latest?cb=20151219231159',
    worldId: 'oasis-springs',
    neighborhoodId: 'bedrock-strait',
  },
  {
    id: 'nookstone',
    title: 'Nookstone',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 13019, preGame: 12925, inGame: 12959 },
    dimensions: {
      width: 20,
      depth: 15,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'house',

      bedrooms: 1,
      bathrooms: 1,
      floors: 1,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/0/0a/Nookstone.png/revision/latest?cb=20151219231021',
    worldId: 'oasis-springs',
    neighborhoodId: 'bedrock-strait',
  },
  {
    id: 'pebble-burrow',
    title: 'Pebble Burrow',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 1500, preGame: 1500, inGame: 1500 },
    dimensions: {
      width: 30,
      depth: 20,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'empty',
      bedrooms: numberValueDoesntExist,
      bathrooms: numberValueDoesntExist,
      floors: numberValueDoesntExist,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/1/10/Pebble_Burrow.png/revision/latest?cb=20151219231111',
    worldId: 'oasis-springs',
    neighborhoodId: 'bedrock-strait',
  },
  {
    // Zest
    id: 'slipshod-mesquite',
    title: 'Slipshod Mesquite',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 25519, preGame: numberValueDoesntExist, inGame: 35974 },
    dimensions: {
      width: 40,
      depth: 30,
    },
    type: 'residential',
    availability: 'occupied',
    buildingDetails: {
      type: 'house',

      bedrooms: 1,
      bathrooms: 1,
      floors: 1,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/3/3c/Slipshod_Mesquite.png/revision/latest?cb=20140908005205',
    worldId: 'oasis-springs',
    neighborhoodId: 'bedrock-strait',
  },
  {
    id: 'agave-abode',
    title: 'Agave Abode',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 18239, preGame: 17704, inGame: 17704 },
    dimensions: {
      width: 20,
      depth: 15,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'house',

      bedrooms: 1,
      bathrooms: 1,
      floors: 1,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/1/12/Agave_Abode.png/revision/latest?cb=20151219230924',
    worldId: 'oasis-springs',
    neighborhoodId: 'bedrock-strait',
  },
  // parched prospect
  {
    id: 'vista-quarry',
    title: 'Vista Quarry',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 48023, preGame: numberValueDoesntExist, inGame: 44368 },
    dimensions: {
      width: 30,
      depth: 20,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'house',

      bedrooms: 2,
      bathrooms: 1,
      floors: 1,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/6/67/Vista_Quarry.png/revision/latest/scale-to-width-down/1000?cb=20151220011254',
    worldId: 'oasis-springs',
    neighborhoodId: 'parched-prospect',
  },
  {
    id: 'raffia-quinta',
    title: 'Raffia Quinta',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 39072, preGame: numberValueDoesntExist, inGame: 37562 },
    dimensions: {
      width: 20,
      depth: 15,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'house',

      bedrooms: 2,
      bathrooms: 2,
      floors: 1,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/d/df/Raffia_Quinta.png/revision/latest/scale-to-width-down/1000?cb=20151220011126',
    worldId: 'oasis-springs',
    neighborhoodId: 'parched-prospect',
  },
  {
    id: 'dusty-turf',
    title: 'Dusty Turf',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 3500, preGame: 3500, inGame: numberValueTBD },
    dimensions: {
      width: 30,
      depth: 20,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'empty',
      bedrooms: numberValueDoesntExist,
      bathrooms: numberValueDoesntExist,
      floors: numberValueDoesntExist,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/f/fe/Dusty_Turf.png/revision/latest?cb=20151220011038',
    worldId: 'oasis-springs',
    neighborhoodId: 'parched-prospect',
  },
  {
    id: 'springscape',
    title: 'Springscape',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 64678, preGame: numberValueDoesntExist, inGame: 63488 },
    dimensions: {
      width: 30,
      depth: 20,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'house',

      bedrooms: 3,
      bathrooms: 2,
      floors: 1,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/8/89/Springscape.png/revision/latest?cb=20151220011212',
    worldId: 'oasis-springs',
    neighborhoodId: 'parched-prospect',
  },
  {
    // roomies
    id: 'cacti-casa',
    title: 'Cacti Casa',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 74701, preGame: numberValueDoesntExist, inGame: 133086 },
    dimensions: {
      width: 40,
      depth: 30,
    },
    type: 'residential',
    availability: 'occupied',
    buildingDetails: {
      type: 'house',

      bedrooms: 4,
      bathrooms: 5,
      floors: 1,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/e/e6/Cacti_Casa.png/revision/latest?cb=20151220010956',
    worldId: 'oasis-springs',
    neighborhoodId: 'parched-prospect',
  },
  // skyward-palms
  {
    id: 'granada-place',
    title: 'Granada Place',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 116860, preGame: numberValueDoesntExist, inGame: 114595 },
    dimensions: {
      width: 30,
      depth: 20,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'house',

      bedrooms: 3,
      bathrooms: 3,
      floors: 2,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/a/ad/Granada_Place.png/revision/latest?cb=20151221233433',
    worldId: 'oasis-springs',
    neighborhoodId: 'skyward-palms',
  },
  {
    id: 'arid-ridge',
    title: 'Arid Ridge',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 5500, preGame: 5500, inGame: 5500 },
    dimensions: {
      width: 40,
      depth: 30,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'empty',
      bedrooms: numberValueDoesntExist,
      bathrooms: numberValueDoesntExist,
      floors: numberValueDoesntExist,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/3/35/Arid_Ridge.png/revision/latest?cb=20151221233316',
    worldId: 'oasis-springs',
    neighborhoodId: 'skyward-palms',
  },
  {
    // caliente
    id: 'sultry-springside',
    title: 'Sultry Springside',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 146560, preGame: numberValueDoesntExist, inGame: 174922 },
    dimensions: {
      width: 30,
      depth: 20,
    },
    type: 'residential',
    availability: 'occupied',
    buildingDetails: {
      type: 'house',

      bedrooms: 3,
      bathrooms: 3,
      floors: 2,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/7/76/Sultry_Springside.png/revision/latest?cb=20151221233717',
    worldId: 'oasis-springs',
    neighborhoodId: 'skyward-palms',
  },
  {
    id: 'rio-verde',
    title: 'Rio Verde',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 175822, preGame: numberValueDoesntExist, inGame: 172947 },
    dimensions: {
      width: 40,
      depth: 30,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'house',

      bedrooms: 5,
      bathrooms: 4,
      floors: 3,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/6/63/Rio_Verde.png/revision/latest?cb=20151221233549',
    worldId: 'oasis-springs',
    neighborhoodId: 'skyward-palms',
  },
  // acquisition butte
  {
    // Landgraab
    id: 'affluista-mansion',
    title: 'Affluista Mansion',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 227609, preGame: numberValueDoesntExist, inGame: 278612 },
    dimensions: {
      width: 50,
      depth: 50,
    },
    type: 'residential',
    availability: 'occupied',
    buildingDetails: {
      type: 'house',

      bedrooms: 2,
      bathrooms: 3,
      floors: 3,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/2/2b/Affluista_Mansion_High_Quality.png/revision/latest?cb=20170630122812',
    worldId: 'oasis-springs',
    neighborhoodId: 'acquisition-butte',
  },
  {
    id: 'yuma-heights',
    title: 'Yuma Heights',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 311508, preGame: numberValueDoesntExist, inGame: 297883 },
    dimensions: {
      width: 40,
      depth: 30,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      bedrooms: 4,
      type: 'house',

      bathrooms: 4,
      floors: 3,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/6/64/Yuma_Heights_High_Quality.png/revision/latest?cb=20170630122858',
    worldId: 'oasis-springs',
    neighborhoodId: 'acquisition-butte',
  },
  // mirage canyon
  {
    id: 'the-futures-past',
    title: 'The Futures Past',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 91791, preGame: numberValueDoesntExist, inGame: 90036 },
    dimensions: {
      width: 30,
      depth: 20,
    },
    type: 'community',
    availability: 'unavailable',
    buildingDetails: {
      type: 'museum',

      bedrooms: numberValueTBD,
      bathrooms: numberValueTBD,
      floors: 3,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/8/85/The_Futures_Past.png/revision/latest?cb=20151223022036',
    worldId: 'oasis-springs',
    neighborhoodId: 'mirage-canyon',
  },
  {
    id: 'the-solar-flare',
    title: 'The Solar Flare',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 61980, preGame: numberValueDoesntExist, inGame: 59015 },
    dimensions: {
      width: 30,
      depth: 20,
    },
    type: 'community',
    availability: 'unavailable',
    buildingDetails: {
      type: 'lounge',
      bedrooms: numberValueTBD,
      bathrooms: 4,
      floors: 2,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/0/01/The_Solar_Flare.png/revision/latest?cb=20250216023444',
    worldId: 'oasis-springs',
    neighborhoodId: 'mirage-canyon',
  },
  {
    id: 'burners-and-builders',
    title: 'Burners & Builders',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 95043, preGame: numberValueDoesntExist, inGame: 93083 },
    dimensions: {
      width: 40,
      depth: 30,
    },
    type: 'community',
    availability: 'unavailable',
    buildingDetails: {
      type: 'gym',
      bedrooms: numberValueTBD,
      bathrooms: numberValueTBD,
      floors: 1,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/2/2c/Burners_%26_Builders.png/revision/latest?cb=20151223021344',
    worldId: 'oasis-springs',
    neighborhoodId: 'mirage-canyon',
  },
  {
    id: 'rattlesnake-juice',
    title: 'Rattlesnake Juice',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 84683, preGame: numberValueDoesntExist, inGame: 81078 },
    dimensions: {
      width: 30,
      depth: 20,
    },
    type: 'community',
    availability: 'unavailable',
    buildingDetails: {
      type: 'bar',
      bedrooms: numberValueTBD,
      bathrooms: numberValueTBD,
      floors: 1,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/1/18/Rattlesnake_Juice_1.png/revision/latest?cb=20141225235017',
    worldId: 'oasis-springs',
    neighborhoodId: 'mirage-canyon',
  },
  // other (oasis-springs-undefined)
  {
    id: 'desert-bloom',
    title: 'Desert Bloom',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 110866, preGame: numberValueDoesntExist, inGame: 102086 },
    type: 'community',
    availability: 'unavailable',
    dimensions: {
      width: 50,
      depth: 50,
    },
    buildingDetails: {
      type: 'park',

      bedrooms: numberValueDoesntExist,
      bathrooms: numberValueDoesntExist,
      floors: numberValueDoesntExist,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/4/4c/Desert_Bloom.png/revision/latest?cb=20151223005748',
    worldId: 'oasis-springs',
    neighborhoodId: 'oasis-springs-undefined',
  },
  {
    id: 'forgotten-grotto',
    title: 'Forgotten Grotto',
    description: stringValueDoesntExist,
    priceDetails: { wiki: numberValueDoesntExist, preGame: numberValueDoesntExist, inGame: numberValueDoesntExist },
    type: 'special',
    availability: 'unavailable',
    dimensions: {
      width: 15,
      depth: 10,
    },
    buildingDetails: {
      type: 'secret',

      bedrooms: numberValueDoesntExist,
      bathrooms: numberValueDoesntExist,
      floors: numberValueDoesntExist,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/d/d9/Sims4_forgotten_grotto_entrance.jpg/revision/latest/scale-to-width-down/1000?cb=20150818121602',
    worldId: 'oasis-springs',
    neighborhoodId: 'oasis-springs-undefined',
  },
];
