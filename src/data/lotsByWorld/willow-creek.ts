import type { Lot } from '../../types/lot.js';
import { stringValueDoesntExist, numberValueDoesntExist, numberValueTBD } from '../../utils/constants.js';

export const willowCreekData: Lot[] = [
  // foundry cove
  {
    id: 'bargain-bend',
    title: 'Bargain Bend',
    description: 'A sizeable Backwater lot, perfect for building your dream home.',
    priceDetails: { wiki: 2000, preGame: 2000, inGame: numberValueTBD },
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
    imageURL: 'https://static.wikia.nocookie.net/sims/images/0/06/Bargain_Bend.png/revision/latest?cb=20140912235111',
    worldId: 'willow-creek',
    neighborhoodId: 'foundry-cove',
  },
  {
    id: 'streamlet-single',
    title: 'Streamlet Single',
    description: 'A simple starter home for a singleton or a couple.',
    priceDetails: { wiki: 15875, preGame: 15415, inGame: 15415 },
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
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/a/ae/Streamlet_Single.png/revision/latest?cb=20140912235553',
    worldId: 'willow-creek',
    neighborhoodId: 'foundry-cove',
  },
  {
    id: 'crick-cabana',
    title: 'Crick Cabana',
    description: 'This small shotgun-style home is perfect for a small family.',
    priceDetails: { wiki: 13418, preGame: 13268, inGame: 13268 },
    dimensions: {
      width: 20,
      depth: 15,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'house',

      bedrooms: 2,
      bathrooms: 1,
      floors: 1,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/c/cb/Crick_Cabana.png/revision/latest?cb=20140913000119',
    worldId: 'willow-creek',
    neighborhoodId: 'foundry-cove',
  },
  {
    id: 'daisy-hovel',
    title: 'Daisy Hovel',
    description: "This home's open concept design is flexible with plenty of outdoor space.",
    priceDetails: { wiki: 16311, preGame: 14583, inGame: 15891 },
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
    imageURL: 'https://static.wikia.nocookie.net/sims/images/6/6c/Daisy_Hovel.png/revision/latest?cb=20140913000538',
    worldId: 'willow-creek',
    neighborhoodId: 'foundry-cove',
  },
  {
    // BFF
    id: 'garden-essence',
    title: 'Garden Essence',
    description: 'A sprawling colonial with landscaping perfect for outdoor entertaining.',
    priceDetails: { wiki: 85545, preGame: numberValueDoesntExist, inGame: 85545 },
    dimensions: {
      width: 40,
      depth: 30,
    },
    type: 'residential',
    availability: 'occupied',
    buildingDetails: {
      type: 'house',

      bedrooms: 3,
      bathrooms: 1,
      floors: 1,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/b/b3/Garden_Essence_Patch_174.jpg/revision/latest?cb=20250323144938',
    worldId: 'willow-creek',
    neighborhoodId: 'foundry-cove',
  },
  {
    id: 'sylvian-glade',
    title: 'Sylvan Glade',
    description: stringValueDoesntExist,
    priceDetails: { wiki: numberValueDoesntExist, preGame: numberValueDoesntExist, inGame: numberValueDoesntExist },
    dimensions: {
      width: 15,
      depth: 10,
    },
    type: 'special',
    availability: 'unavailable',
    buildingDetails: {
      type: 'secret',

      bedrooms: numberValueDoesntExist,
      bathrooms: numberValueDoesntExist,
      floors: numberValueDoesntExist,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/4/46/Sylvan_Tree.png/revision/latest?cb=20140913002758',
    worldId: 'willow-creek',
    neighborhoodId: 'foundry-cove',
  },
  // courtyard lane
  {
    id: 'potters-splay',
    title: 'Potters Splay',
    description: 'With this large waterfront lot, your only limit is your imagination.',
    priceDetails: { wiki: 2500, preGame: 2500, inGame: 2500 },
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
    imageURL: 'https://static.wikia.nocookie.net/sims/images/9/9e/Potters_Splay.png/revision/latest?cb=20140913014124',
    worldId: 'willow-creek',
    neighborhoodId: 'courtyard-lane',
  },
  {
    id: 'brook-bungalow',
    title: 'Brook Bungalow',
    description: 'Built for outdoor living, this colonial features a wraparound porch and balcony.',
    priceDetails: { wiki: 95721, preGame: numberValueDoesntExist, inGame: 91681 },
    dimensions: {
      width: 40,
      depth: 30,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'house',

      bedrooms: 3,
      bathrooms: 2,
      floors: 2,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/d/d6/Brook_Bungalow.png/revision/latest?cb=20140913014454',
    worldId: 'willow-creek',
    neighborhoodId: 'courtyard-lane',
  },
  {
    id: 'riverside-roost',
    title: 'Riverside Roost',
    description: 'This modified double shotgun has plenty of space for a comfort and entertaining.',
    priceDetails: { wiki: 41329, preGame: numberValueDoesntExist, inGame: 40114 },
    dimensions: {
      width: 30,
      depth: 20,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'house',

      bedrooms: 2,
      bathrooms: 2,
      floors: 2,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/c/c1/Riverside_Roost.png/revision/latest?cb=20140913015318',
    worldId: 'willow-creek',
    neighborhoodId: 'courtyard-lane',
  },
  {
    // Pancakes
    id: 'pique-hearth',
    title: 'Pique Hearth',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 129940, preGame: numberValueDoesntExist, inGame: 120945 },
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
      'https://static.wikia.nocookie.net/sims/images/f/f7/Pique_Hearth_Patch_174.jpg/revision/latest?cb=20250323145817',
    worldId: 'willow-creek',
    neighborhoodId: 'courtyard-lane',
  },
  {
    id: 'rindle-rose',
    title: 'Rindle Rose',
    description: 'A cozy cottage with a welcoming porch that just screams, "RELAX!"',
    priceDetails: { wiki: 36149, preGame: numberValueDoesntExist, inGame: 35074 },
    dimensions: {
      width: 20,
      depth: 15,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'house',

      bedrooms: 2,
      bathrooms: 1,
      floors: 1,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/6/65/Rindle_Rose.png/revision/latest?cb=20140913021305',
    worldId: 'willow-creek',
    neighborhoodId: 'courtyard-lane',
  },
  // pendula view
  {
    id: 'hallow-slough',
    title: 'Hallow Slough',
    description: 'An expansive lot in a much-sought-after enclave, this is your potential paradise.',
    priceDetails: { wiki: 5500, preGame: 5500, inGame: 5500 },
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
    imageURL: 'https://static.wikia.nocookie.net/sims/images/9/93/Hallow_Slough.png/revision/latest?cb=20140913235805',
    worldId: 'willow-creek',
    neighborhoodId: 'pendula-view',
  },
  {
    id: 'umbrage-manor',
    title: 'Umbrage Manor',
    description: 'A huge colonial with lovely grounds, this home is sure to impress.',
    priceDetails: { wiki: 157882, preGame: numberValueDoesntExist, inGame: 157882 },
    dimensions: {
      width: 40,
      depth: 30,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'house',

      bedrooms: 3,
      bathrooms: 2,
      floors: 2,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/3/3c/Umbrage_manor.png/revision/latest?cb=20150324165452',
    worldId: 'willow-creek',
    neighborhoodId: 'pendula-view',
  },
  {
    id: 'parkstore',
    title: 'Parkshore',
    description: 'A large, traditional home with verandas and balconies galore.',
    priceDetails: { wiki: 105336, preGame: numberValueDoesntExist, inGame: 101951 },
    dimensions: {
      width: 40,
      depth: 30,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'house',

      bedrooms: 4,
      bathrooms: 3,
      floors: 2,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/f/f4/Parkshore.png/revision/latest?cb=20140914000724',
    worldId: 'willow-creek',
    neighborhoodId: 'pendula-view',
  },
  {
    // Goth
    id: 'ophelia-villa',
    title: 'Ophelia Villa',
    description: 'History (and mystery) emanates from this tri-story Gothic mansion.',
    priceDetails: { wiki: 226386, preGame: numberValueDoesntExist, inGame: 226386 },
    dimensions: {
      width: 30,
      depth: 20,
    },
    type: 'residential',
    availability: 'occupied',
    buildingDetails: {
      type: 'house',

      bedrooms: 3,
      bathrooms: 2,
      floors: 3,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/d/db/Ophelia_Villa_Patch_174.png/revision/latest?cb=20250118161732',
    worldId: 'willow-creek',
    neighborhoodId: 'pendula-view',
  },
  // sage states
  {
    id: 'oakenstead',
    title: 'Oakenstead',
    description: 'A large property with classical styling, this is the quintessential Garden Estates home.',
    priceDetails: { wiki: 253863, preGame: 232512, inGame: 231138 },
    dimensions: {
      width: 50,
      depth: 50,
    },
    type: 'residential',
    availability: 'available',
    buildingDetails: {
      type: 'house',

      bedrooms: 4,
      bathrooms: 3,
      floors: 2,
    },
    imageURL: 'https://static.wikia.nocookie.net/sims/images/2/2c/Oakenstead.png/revision/latest?cb=20140915230818',
    worldId: 'willow-creek',
    neighborhoodId: 'sage-estates',
  },
  {
    // Spencer-Kim-Lewis
    id: 'cypress-terrace',
    title: 'Cypress Terrace',
    description: 'Modern meets traditional in this three-story home with extensive landscaping.',
    priceDetails: { wiki: 254137, preGame: numberValueDoesntExist, inGame: 232512 },
    dimensions: {
      width: 40,
      depth: 30,
    },
    type: 'residential',
    availability: 'occupied',
    buildingDetails: {
      type: 'house',

      bedrooms: 5,
      bathrooms: 4,
      floors: 3,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/6/6f/Cypress_Terrace.png/revision/latest?cb=20140915231101',
    worldId: 'willow-creek',
    neighborhoodId: 'sage-estates',
  },
  // crawdad quarter
  {
    id: 'municipal-muses',
    title: 'Municipal Muses',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 129533, preGame: numberValueDoesntExist, inGame: 122873 },
    dimensions: {
      width: 40,
      depth: 30,
    },
    type: 'community',
    availability: 'unavailable',
    buildingDetails: {
      type: 'museum',

      bedrooms: numberValueDoesntExist,
      bathrooms: numberValueDoesntExist,
      floors: numberValueDoesntExist,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/7/7c/Municipal_Muses_Museum.png/revision/latest?cb=20140915233730',
    worldId: 'willow-creek',
    neighborhoodId: 'crawdad-quarter',
  },
  {
    id: 'the-blue-velvet',
    title: 'The Blue Velvet',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 93468, preGame: numberValueDoesntExist, inGame: 93558 },
    dimensions: {
      width: 30,
      depth: 20,
    },
    type: 'community',
    availability: 'unavailable',
    buildingDetails: {
      type: 'nightclub',

      bedrooms: numberValueDoesntExist,
      bathrooms: numberValueDoesntExist,
      floors: numberValueDoesntExist,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/3/38/The_Blue_Velvet_Nightclub.png/revision/latest?cb=20140915233839',
    worldId: 'willow-creek',
    neighborhoodId: 'crawdad-quarter',
  },
  {
    id: 'movers-and-shakers',
    title: 'Movers & Shakers',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 85115, preGame: numberValueDoesntExist, inGame: 85139 },
    dimensions: {
      width: 30,
      depth: 20,
    },
    type: 'community',
    availability: 'unavailable',
    buildingDetails: {
      type: 'gym',
      bedrooms: numberValueTBD,
      bathrooms: numberValueTBD,
      floors: 2,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/5/56/Movers_%26_Shakers_Gym.png/revision/latest?cb=20140915234156',
    worldId: 'willow-creek',
    neighborhoodId: 'crawdad-quarter',
  },
  {
    id: 'willow-creek-archive',
    title: 'Willow Creek Archive',
    description: stringValueDoesntExist,
    priceDetails: { wiki: 103410, preGame: numberValueDoesntExist, inGame: 103410 },
    dimensions: {
      width: 30,
      depth: 20,
    },
    type: 'community',
    availability: 'unavailable',
    buildingDetails: {
      type: 'library',

      bedrooms: numberValueDoesntExist,
      bathrooms: numberValueDoesntExist,
      floors: numberValueDoesntExist,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/c/cb/Willow_Creek_Archive_Library.png/revision/latest?cb=20140915234556',
    worldId: 'willow-creek',
    neighborhoodId: 'crawdad-quarter',
  },
  // other (willow-creek-undefined)
  {
    id: 'magnolia-blossom',
    title: 'Magnolia Blossom',
    description:
      'Magnolia Blossom Park is a historic park where Willow Creek inhabitants from all walks of life can come together to enjoy nature in a lush, green environment.',
    priceDetails: { wiki: 82671, preGame: numberValueDoesntExist, inGame: 69642 },
    dimensions: {
      width: 50,
      depth: 50,
    },
    type: 'community',
    availability: 'unavailable',
    buildingDetails: {
      type: 'park',

      bedrooms: numberValueDoesntExist,
      bathrooms: numberValueDoesntExist,
      floors: numberValueDoesntExist,
    },
    imageURL:
      'https://static.wikia.nocookie.net/sims/images/3/39/Magnolia_Blossom_Park.png/revision/latest?cb=20250204125814',
    worldId: 'willow-creek',
    neighborhoodId: 'willow-creek-undefined',
  },
];
