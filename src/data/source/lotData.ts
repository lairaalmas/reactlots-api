import { stringValueDoesntExist, numberValueDoesntExist, numberValueTBD, imgValueTBD } from '../../utils/constants.js';
import type { Lot } from '../../types/lot.js';

export type LotDataByNeighborhood = Record<string, Lot[]>;
export type LotDataByWorld = Record<string, LotDataByNeighborhood>;

export const lotData: LotDataByWorld = {
  'willow-creek': {
    'foundry-cove': [
      {
        id: 'bargain-bend',
        title: 'Bargain Bend',
        description: 'A sizeable Backwater lot, perfect for building your dream home.',
        priceHistory: { wiki: 2000, preGame: 2000, inGame: numberValueTBD },
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/0/06/Bargain_Bend.png/revision/latest?cb=20140912235111',
      },
      {
        id: 'streamlet-single',
        title: 'Streamlet Single',
        description: 'A simple starter home for a singleton or a couple.',
        priceHistory: { wiki: 15875, preGame: 15415, inGame: 15415 },
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
      },
      {
        id: 'crick-cabana',
        title: 'Crick Cabana',
        description: 'This small shotgun-style home is perfect for a small family.',
        priceHistory: { wiki: 13418, preGame: 13268, inGame: 13268 },
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/c/cb/Crick_Cabana.png/revision/latest?cb=20140913000119',
      },
      {
        id: 'daisy-hovel',
        title: 'Daisy Hovel',
        description: "This home's open concept design is flexible with plenty of outdoor space.",
        priceHistory: { wiki: 16311, preGame: 14583, inGame: 15891 },
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/6/6c/Daisy_Hovel.png/revision/latest?cb=20140913000538',
      },
      {
        id: 'garden-essence',
        title: 'Garden Essence',
        description: 'A sprawling colonial with landscaping perfect for outdoor entertaining.',
        priceHistory: { wiki: 85545, preGame: numberValueDoesntExist, inGame: 85545 },
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
        owner: 'BFF',
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/b/b3/Garden_Essence_Patch_174.jpg/revision/latest?cb=20250323144938',
      },
      {
        id: 'sylvian-glade',
        title: 'Sylvan Glade',
        description: stringValueDoesntExist,
        priceHistory: {
          wiki: numberValueDoesntExist,
          preGame: numberValueDoesntExist,
          inGame: numberValueDoesntExist,
        },
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/4/46/Sylvan_Tree.png/revision/latest?cb=20140913002758',
      },
    ],
    'courtyard-lane': [
      {
        id: 'potters-splay',
        title: 'Potters Splay',
        description: 'With this large waterfront lot, your only limit is your imagination.',
        priceHistory: { wiki: 2500, preGame: 2500, inGame: 2500 },
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/9/9e/Potters_Splay.png/revision/latest?cb=20140913014124',
      },
      {
        id: 'brook-bungalow',
        title: 'Brook Bungalow',
        description: 'Built for outdoor living, this colonial features a wraparound porch and balcony.',
        priceHistory: { wiki: 95721, preGame: numberValueDoesntExist, inGame: 91681 },
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/d/d6/Brook_Bungalow.png/revision/latest?cb=20140913014454',
      },
      {
        id: 'riverside-roost',
        title: 'Riverside Roost',
        description: 'This modified double shotgun has plenty of space for a comfort and entertaining.',
        priceHistory: { wiki: 41329, preGame: numberValueDoesntExist, inGame: 40114 },
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
      },
      {
        id: 'pique-hearth',
        title: 'Pique Hearth',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 129940, preGame: numberValueDoesntExist, inGame: 120945 },
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
        owner: 'Pancakes',
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/f/f7/Pique_Hearth_Patch_174.jpg/revision/latest?cb=20250323145817',
      },
      {
        id: 'rindle-rose',
        title: 'Rindle Rose',
        description: 'A cozy cottage with a welcoming porch that just screams, "RELAX!"',
        priceHistory: { wiki: 36149, preGame: numberValueDoesntExist, inGame: 35074 },
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/6/65/Rindle_Rose.png/revision/latest?cb=20140913021305',
      },
    ],
    'pendula-view': [
      {
        id: 'hallow-slough',
        title: 'Hallow Slough',
        description: 'An expansive lot in a much-sought-after enclave, this is your potential paradise.',
        priceHistory: { wiki: 5500, preGame: 5500, inGame: 5500 },
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/9/93/Hallow_Slough.png/revision/latest?cb=20140913235805',
      },
      {
        id: 'umbrage-manor',
        title: 'Umbrage Manor',
        description: 'A huge colonial with lovely grounds, this home is sure to impress.',
        priceHistory: { wiki: 157882, preGame: numberValueDoesntExist, inGame: 157882 },
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/3/3c/Umbrage_manor.png/revision/latest?cb=20150324165452',
      },
      {
        id: 'parkstore',
        title: 'Parkshore',
        description: 'A large, traditional home with verandas and balconies galore.',
        priceHistory: { wiki: 105336, preGame: numberValueDoesntExist, inGame: 101951 },
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
      },
      {
        id: 'ophelia-villa',
        title: 'Ophelia Villa',
        description: 'History (and mystery) emanates from this tri-story Gothic mansion.',
        priceHistory: { wiki: 226386, preGame: numberValueDoesntExist, inGame: 226386 },
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
        owner: 'Goth',
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/d/db/Ophelia_Villa_Patch_174.png/revision/latest?cb=20250118161732',
      },
    ],
    'sage-estates': [
      {
        id: 'oakenstead',
        title: 'Oakenstead',
        description: 'A large property with classical styling, this is the quintessential Garden Estates home.',
        priceHistory: { wiki: 253863, preGame: 232512, inGame: 231138 },
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
      },
      {
        id: 'cypress-terrace',
        title: 'Cypress Terrace',
        description: 'Modern meets traditional in this three-story home with extensive landscaping.',
        priceHistory: { wiki: 254137, preGame: numberValueDoesntExist, inGame: 232512 },
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
        owner: 'Spencer-Kim-Lewis',
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/6/6f/Cypress_Terrace.png/revision/latest?cb=20140915231101',
      },
    ],
    'crawdad-quarter': [
      {
        id: 'municipal-muses',
        title: 'Municipal Muses',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 129533, preGame: numberValueDoesntExist, inGame: 122873 },
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
      },
      {
        id: 'the-blue-velvet',
        title: 'The Blue Velvet',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 93468, preGame: numberValueDoesntExist, inGame: 93558 },
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
      },
      {
        id: 'movers-and-shakers',
        title: 'Movers & Shakers',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 85115, preGame: numberValueDoesntExist, inGame: 85139 },
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
      },
      {
        id: 'willow-creek-archive',
        title: 'Willow Creek Archive',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 103410, preGame: numberValueDoesntExist, inGame: 103410 },
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
      },
    ],
    'willow-creek-undefined': [
      {
        id: 'magnolia-blossom',
        title: 'Magnolia Blossom',
        description:
          'Magnolia Blossom Park is a historic park where Willow Creek inhabitants from all walks of life can come together to enjoy nature in a lush, green environment.',
        priceHistory: { wiki: 82671, preGame: numberValueDoesntExist, inGame: 69642 },
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
      },
    ],
  },
  'oasis-springs': {
    'bedrock-strait': [
      {
        id: 'sandtrap-flat',
        title: 'Sandtrap Flat',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 16982, preGame: 15842, inGame: 15842 },
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/4/41/Sandtrap_Flat.png/revision/latest?cb=20151219231159',
      },
      {
        id: 'nookstone',
        title: 'Nookstone',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 13019, preGame: 12925, inGame: 12959 },
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
      },
      {
        id: 'pebble-burrow',
        title: 'Pebble Burrow',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 1500, preGame: 1500, inGame: 1500 },
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/1/10/Pebble_Burrow.png/revision/latest?cb=20151219231111',
      },
      {
        id: 'slipshod-mesquite',
        title: 'Slipshod Mesquite',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 25519, preGame: numberValueDoesntExist, inGame: 35974 },
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
        owner: 'Zest',
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/3/3c/Slipshod_Mesquite.png/revision/latest?cb=20140908005205',
      },
      {
        id: 'agave-abode',
        title: 'Agave Abode',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 18239, preGame: 17704, inGame: 17704 },
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
          'https://static.wikia.nocookie.net/sims/images/1/12/Agave_Abode.png/revision/latest?cb=20151219230924',
      },
    ],
    'parched-prospect': [
      {
        id: 'vista-quarry',
        title: 'Vista Quarry',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 48023, preGame: numberValueDoesntExist, inGame: 44368 },
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
      },
      {
        id: 'raffia-quinta',
        title: 'Raffia Quinta',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 39072, preGame: numberValueDoesntExist, inGame: 37562 },
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
      },
      {
        id: 'dusty-turf',
        title: 'Dusty Turf',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 3500, preGame: 3500, inGame: numberValueTBD },
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
      },
      {
        id: 'springscape',
        title: 'Springscape',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 64678, preGame: numberValueDoesntExist, inGame: 63488 },
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/8/89/Springscape.png/revision/latest?cb=20151220011212',
      },
      {
        id: 'cacti-casa',
        title: 'Cacti Casa',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 74701, preGame: numberValueDoesntExist, inGame: 133086 },
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
        owner: 'Roomies',
        imageURL: 'https://static.wikia.nocookie.net/sims/images/e/e6/Cacti_Casa.png/revision/latest?cb=20151220010956',
      },
    ],
    'skyward-palms': [
      {
        id: 'granada-place',
        title: 'Granada Place',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 116860, preGame: numberValueDoesntExist, inGame: 114595 },
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/a/ad/Granada_Place.png/revision/latest?cb=20151221233433',
      },
      {
        id: 'arid-ridge',
        title: 'Arid Ridge',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 5500, preGame: 5500, inGame: 5500 },
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
      },
      {
        id: 'sultry-springside',
        title: 'Sultry Springside',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 146560, preGame: numberValueDoesntExist, inGame: 174922 },
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
        owner: 'Caliente',
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/7/76/Sultry_Springside.png/revision/latest?cb=20151221233717',
      },
      {
        id: 'rio-verde',
        title: 'Rio Verde',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 175822, preGame: numberValueDoesntExist, inGame: 172947 },
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
      },
    ],
    'acquisition-butte': [
      {
        // Landgraab
        id: 'affluista-mansion',
        title: 'Affluista Mansion',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 227609, preGame: numberValueDoesntExist, inGame: 278612 },
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
      },
      {
        id: 'yuma-heights',
        title: 'Yuma Heights',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 311508, preGame: numberValueDoesntExist, inGame: 297883 },
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
      },
    ],
    'mirage-canyon': [
      {
        id: 'the-futures-past',
        title: 'The Futures Past',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 91791, preGame: numberValueDoesntExist, inGame: 90036 },
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
      },
      {
        id: 'the-solar-flare',
        title: 'The Solar Flare',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 61980, preGame: numberValueDoesntExist, inGame: 59015 },
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
      },
      {
        id: 'burners-and-builders',
        title: 'Burners & Builders',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 95043, preGame: numberValueDoesntExist, inGame: 93083 },
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
      },
      {
        id: 'rattlesnake-juice',
        title: 'Rattlesnake Juice',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 84683, preGame: numberValueDoesntExist, inGame: 81078 },
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
      },
    ],
    'oasis-springs-undefined': [
      {
        id: 'desert-bloom',
        title: 'Desert Bloom',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 110866, preGame: numberValueDoesntExist, inGame: 102086 },
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/4/4c/Desert_Bloom.png/revision/latest?cb=20151223005748',
      },
      {
        id: 'forgotten-grotto',
        title: 'Forgotten Grotto',
        description: stringValueDoesntExist,
        priceHistory: {
          wiki: numberValueDoesntExist,
          preGame: numberValueDoesntExist,
          inGame: numberValueDoesntExist,
        },
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
      },
    ],
  },
  newcrest: {
    bridgeview: [
      {
        id: 'fern-park',
        title: 'Fern Park',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 2000, preGame: 2000, inGame: 2000 },
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/f/f2/Fern_Park.png/revision/latest/scale-to-width-down/250?cb=20230312045545',
      },
      {
        id: 'beech-byway',
        title: 'Beech Byway',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 2000, preGame: 2000, inGame: 2000 },
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/b/bb/Beech_Byway.png/revision/latest/scale-to-width-down/250?cb=20230312045255',
      },
      {
        id: 'midtown-meadows',
        title: 'Midtown Meadows',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 3000, preGame: 3000, inGame: 3000 },
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/1/10/Midtown_Meadows.png/revision/latest/scale-to-width-down/250?cb=20230312044803',
      },
      {
        id: 'oak-alcove',
        title: 'Oak Alcove',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 1500, preGame: 1500, inGame: 1500 },
        dimensions: {
          width: 20,
          depth: 15,
        },
        type: 'residential',
        availability: 'available',
        buildingDetails: {
          type: 'empty',
          bedrooms: numberValueDoesntExist,
          bathrooms: numberValueDoesntExist,
          floors: numberValueDoesntExist,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/6/64/Oak_Alcove.png/revision/latest/scale-to-width-down/250?cb=20230312045758',
      },
      {
        id: 'comfy-cubby',
        title: 'Comfy Cubby',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 1500, preGame: 1500, inGame: 1500 },
        dimensions: {
          width: 20,
          depth: 15,
        },
        type: 'residential',
        availability: 'available',
        buildingDetails: {
          type: 'empty',
          bedrooms: numberValueDoesntExist,
          bathrooms: numberValueDoesntExist,
          floors: numberValueDoesntExist,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/9/9e/Comfy_Cubby.png/revision/latest/scale-to-width-down/250?cb=20230312045855',
      },
    ],
    'ridgeline-drive': [
      {
        id: 'optimists-outlook',
        title: "Optimist's Outlook",
        description: stringValueDoesntExist,
        priceHistory: { wiki: 3000, preGame: 3000, inGame: 3000 },
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
        imageURL: imgValueTBD,
      },
      {
        id: 'hillside-highlands',
        title: 'Hillside Highlands',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 2000, preGame: 2000, inGame: 2000 },
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
        imageURL: imgValueTBD,
      },
      {
        id: 'civic-cliffs',
        title: 'Civic Cliffs',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 2000, preGame: 2000, inGame: 2000 },
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
        imageURL: imgValueTBD,
      },
      {
        id: 'cookout-lookout',
        title: 'Cookout Lookout',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 2000, preGame: 2000, inGame: 2000 },
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
        imageURL: imgValueTBD,
      },
      {
        id: 'sandy-run',
        title: 'Sandy Run',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 25000, preGame: 2500, inGame: 2500 },
        dimensions: {
          width: 40,
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
        imageURL: imgValueTBD,
      },
    ],
    'llama-lagoon': [
      {
        id: 'twin-oracle-point',
        title: 'Twin Oracle Point',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 8500, preGame: 8500, inGame: 8500 },
        dimensions: {
          width: 50,
          depth: 40,
        },
        type: 'residential',
        availability: 'available',
        buildingDetails: {
          type: 'empty',
          bedrooms: numberValueDoesntExist,
          bathrooms: numberValueDoesntExist,
          floors: numberValueDoesntExist,
        },
        imageURL: imgValueTBD,
      },
      {
        id: 'rippling-flats',
        title: 'Rippling Flats',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 3000, preGame: 3000, inGame: 3000 },
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
        imageURL: imgValueTBD,
      },
      {
        id: 'avarice-acres',
        title: 'Avarice Acres',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 3000, preGame: 3000, inGame: 3000 },
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
        imageURL: imgValueTBD,
      },
      {
        id: 'tranquil-crescent',
        title: 'Tranquil Crescent',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 2500, preGame: 2500, inGame: 2500 },
        dimensions: {
          width: 30,
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
        imageURL: imgValueTBD,
      },
      {
        id: 'asphalt-abodes',
        title: 'Asphalt Abodes',
        description: stringValueDoesntExist,
        priceHistory: { wiki: 2000, preGame: 2000, inGame: 2000 },
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
        imageURL: imgValueTBD,
      },
    ],
  },
  'san-myshuno': {
    'spice-market': [
      // culpepper apartments
      {
        id: 'culpepper-house-a',
        title: '17 Culpepper House',
        description: 'A snug apartment in the heart of the desirable Spice Market district.',
        priceHistory: {
          // wiki: numberValueDoesntExist,
          // preGame: 800,
          // inGame: 800,
        },
        rentDetails: {
          rent: 400,
          deposit: 800,
          furniture: 7950,
        },
        dimensions: {
          width: 10,
          depth: 12,
        },
        type: 'residential',
        availability: 'available',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 1,
          bathrooms: 1,
          floors: 1,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/2/20/Culpepper_Apartments.jpg/revision/latest?cb=20161220230728',
      },
      {
        id: 'culpepper-house-b',
        title: '18 Culpepper House',
        description:
          'Once home to a famous local Chef, legend holds that Pufferfish Nigiri was invented in this very kitchen. Additionally, the dining room boasts brand new clean floors and fresh paint throughout.',
        priceHistory: {
          // wiki: numberValueDoesntExist,
          // preGame: 1000,
          // inGame: 1000,
        },
        rentDetails: {
          rent: 600,
          deposit: 1000,
          furniture: 11275,
        },
        dimensions: {
          width: 10,
          depth: 16,
        },
        type: 'residential',
        availability: 'available',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 1,
          bathrooms: 1,
          floors: 1,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/2/20/Culpepper_Apartments.jpg/revision/latest?cb=20161220230728',
      },
      {
        id: 'culpepper-house-c',
        title: '19 Culpepper House',
        description: 'A fixer-upper apartment with very reasonable rent and a spacious balcony.',
        priceHistory: {
          // wiki: numberValueDoesntExist,
          // preGame: 550,
          // inGame: 550,
        },
        rentDetails: {
          rent: 600,
          deposit: 550,
          furniture: 18210,
        },
        dimensions: {
          width: 18,
          depth: 10,
        },
        type: 'residential',
        availability: 'available',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 2,
          bathrooms: 1,
          floors: 1,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/2/20/Culpepper_Apartments.jpg/revision/latest?cb=20161220230728',
      },
      {
        id: 'culpepper-house-d',
        title: '20 Culpepper House',
        description: 'A spacious brownstone apartment with bay windows, dockside views and an open plan kitchen.',
        priceHistory: {
          // wiki: numberValueDoesntExist,
          // preGame: numberValueDoesntExist,
          // inGame: 4800,
        },
        rentDetails: {
          rent: 1200,
          deposit: 4800,
          furniture: numberValueTBD,
        },
        dimensions: {
          width: 18,
          depth: 16,
        },
        type: 'residential',
        availability: 'occupied',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 2,
          bathrooms: 2,
          floors: 1,
        },
        owner: 'Rasoya family',
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/2/20/Culpepper_Apartments.jpg/revision/latest?cb=20161220230728',
      },
      // jasmine suites apartments
      {
        id: 'jasmine-suites-a',
        title: '2A Jasmine Suites',
        description: 'A compact apartment with character in a family friendly neighborhood.',
        priceHistory: {
          // wiki: numberValueDoesntExist,
          // preGame: numberValueDoesntExist,
          // inGame: 800,
        },
        rentDetails: {
          rent: 400,
          deposit: 800,
          furniture: numberValueDoesntExist,
        },
        dimensions: {
          width: 18,
          depth: 16,
        },
        type: 'residential',
        availability: 'occupied',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 1,
          bathrooms: 1,
          floors: 1,
        },
        owner: 'Bheeda family',
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/5/5f/Jasmine_Suits.jpg/revision/latest?cb=20161220230808',
      },
      {
        id: 'jasmine-suites-b',
        title: '2B Jasmine Suites',
        description: "A charming family home overlooking the Spice Market's famous festival square.",
        priceHistory: {
          // wiki: numberValueDoesntExist,
          // preGame: 1000,
          // inGame: 1000,
        },
        rentDetails: {
          rent: 500,
          deposit: 1000,
          furniture: 8350,
        },
        dimensions: {
          width: 18,
          depth: 7,
        },
        type: 'residential',
        availability: 'available',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 2,
          bathrooms: 1,
          floors: 1,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/5/5f/Jasmine_Suits.jpg/revision/latest?cb=20161220230808',
      },
      // the old salt house
      {
        id: 'the-old-salt-house',
        title: 'The Old Salt House',
        description:
          'A sleek family home in a converted docklands building, The Old Salt House is a triumph of urban renewal.',
        priceHistory: { wiki: 113443, preGame: numberValueDoesntExist, inGame: 113378 },
        dimensions: {
          width: 30,
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
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/3/3e/Old_Salt_House.jpg/revision/latest?cb=20161220230832',
      },
      // community
      {
        id: 'waterside-warble',
        title: 'waterside-warble',
        description:
          "Constructed from a converted cannery, Waterside Warble's original warehouse layout was the perfect canvas to section off some intimate karaoke rooms.",
        priceHistory: { wiki: 91516, preGame: numberValueDoesntExist, inGame: 88361 },
        dimensions: {
          width: 30,
          depth: 30,
        },
        type: 'community',
        availability: 'unavailable',
        buildingDetails: {
          type: 'karaoke bar',
          bedrooms: 3,
          bathrooms: 2,
          floors: 2,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/2/24/Waterside_Warble.jpg/revision/latest?cb=20161220230855',
      },
    ],
    'arts-quarter': [
      // medina studios
      {
        id: 'medina-studios-a',
        title: '910 Medina Studios',
        description:
          "A cramped apartment with... personality that overlooks the Art Quarter's lovely center plaza. The cozy kitchen is just big enough and the living room boasts a classic mauve carpet.",
        priceHistory: {
          // preGame: numberValueDoesntExist,
          // inGame: 500,
        },
        rentDetails: {
          rent: 400,
          deposit: 500,
          furniture: numberValueTBD,
        },
        dimensions: {
          width: 9,
          depth: 9,
        },
        type: 'residential',
        availability: 'occupied',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 1,
          bathrooms: 1,
          floors: 1,
        },
        owner: 'benali',
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/b/bc/Medina_Studios.jpg/revision/latest?cb=20161220234428',
      },
      {
        id: 'medina-studios-b',
        title: '920 Medina Studios',
        description:
          "It's said a medium once lived in this spooky little place. Who knows what strange after effects may linger here...",
        priceHistory: {
          wiki: numberValueTBD,
          preGame: numberValueDoesntExist,
          inGame: 800,
        },
        rentDetails: {
          rent: 1000,
          deposit: 800,
          furniture: 28830,
        },
        dimensions: {
          width: 12,
          depth: 16,
        },
        type: 'residential',
        availability: 'available',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 2,
          bathrooms: 1,
          floors: 1,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/b/bc/Medina_Studios.jpg/revision/latest?cb=20161220234428',
      },
      {
        id: 'medina-studios-c',
        title: '930 Medina Studios',
        description: 'Surprisingly cheap for its size, this fine old apartment is the most grand in the building.',
        priceHistory: {
          // wiki:
          // preGame:
          // inGame:
        },
        rentDetails: {
          rent: 1200,
          deposit: 1000,
          furniture: 16560,
        },
        dimensions: {
          width: 13,
          depth: 28,
        },
        type: 'residential',
        availability: 'available',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 3,
          bathrooms: 1,
          floors: 1,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/b/bc/Medina_Studios.jpg/revision/latest?cb=20161220234428',
      },
      // hakim house apartments
      {
        id: 'hakim-house-a',
        title: '121 Hakim House',
        description:
          'Though not the largest apartment in the building, the home studio and funky furnishings are certainly a desirable plus!',
        priceHistory: {
          // wiki: numberValueTBD,
          // preGame: numberValueDoesntExist,
          // inGame: 4800,
        },
        rentDetails: {
          rent: 1200,
          deposit: 4800,
          furniture: numberValueTBD,
        },
        dimensions: {
          width: 11,
          depth: 18,
        },
        type: 'residential',
        availability: 'occupied',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 2,
          bathrooms: 1,
          floors: 1,
        },
        owner: 'Jang',
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/8/89/Hakim_House.jpg/revision/latest?cb=20161220234457',
      },
      {
        id: 'hakim-house-b',
        title: '122 Hakim House',
        description: 'Spacious and luxurious, this apartment also has a historical connection to a famous local artist',
        priceHistory: {
          // wiki: numberValueTBD,
          // preGame: numberValueDoesntExist,
          // inGame: 5600,
        },
        rentDetails: {
          rent: 1400,
          deposit: 5600,
          furniture: 67820,
        },
        dimensions: {
          width: 16,
          depth: 17,
        },
        type: 'residential',
        availability: 'available',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 3,
          bathrooms: 2,
          floors: 1,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/8/89/Hakim_House.jpg/revision/latest?cb=20161220234457',
      },
      // fountainview penthouse
      {
        id: 'fountainview-penthouse',
        title: 'FountainView Penthouse',
        description:
          'Boasting some of the finest views in the Arts Quarter, this penthouse is prime real estate indeed.',
        priceHistory: { wiki: 83188, preGame: numberValueDoesntExist, inGame: 84188 },
        dimensions: {
          width: 30,
          depth: 20,
        },
        type: 'residential',
        availability: 'available',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 1,
          bathrooms: 1,
          floors: 1,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/9/99/FountainView_Penthouse.jpg/revision/latest?cb=20161220234523',
      },
      // community
      {
        id: 'cashbah-gallery',
        title: 'Cashbah Gallery',
        description:
          'This modern glass structure in the heart of the Arts Quarter is a chic destination for a date or a recreational day devoted to improving your artistic skills.',
        priceHistory: { wiki: 201329, preGame: numberValueDoesntExist, inGame: 201329 },
        dimensions: {
          width: 40,
          depth: 30,
        },
        type: 'community',
        availability: 'unavailable',
        buildingDetails: {
          type: 'arts center',
          bedrooms: numberValueTBD,
          bathrooms: numberValueTBD,
          floors: numberValueTBD,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/c/c1/Casbah_Gallery.jpg/revision/latest?cb=20161220234604',
      },
    ],
    'fashion-district': [
      // zenview apartments
      {
        id: 'zenview-a',
        title: '701 ZenView',
        description: 'A snug multi-floor apartment with amazing balcony views of the Fashion District.',
        priceHistory: {
          // wiki: numberValueTBD,
          // preGame: numberValueDoesntExist,
          // inGame: numberValueTBD,
        },
        rentDetails: {
          rent: 700,
          deposit: 2100,
          furniture: numberValueTBD,
        },
        dimensions: {
          width: 6,
          depth: 11,
        },
        type: 'residential',
        availability: 'occupied',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 2,
          bathrooms: 2,
          floors: 2,
        },
        owner: 'karaoke legends',
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/5/58/ZenView_Apartments.jpg/revision/latest?cb=20161221005831',
      },
      {
        id: 'zenview-b',
        title: '702 ZenView',
        description: 'A highly modern two floor apartment in the heart of the Fashion District.',
        priceHistory: {
          // wiki: numberValueTBD,
          // preGame: numberValueDoesntExist,
          // inGame: numberValueTBD,
        },
        rentDetails: {
          rent: 1200,
          deposit: 4800,
          furniture: 36840,
        },
        dimensions: {
          width: 14,
          depth: 12,
        },
        type: 'residential',
        availability: 'available',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 2,
          bathrooms: 2,
          floors: 2,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/5/58/ZenView_Apartments.jpg/revision/latest?cb=20161221005831',
      },
      // 21 chic street
      {
        id: 'twenty-one-chic-street-a',
        title: '1310 21 Chic Street',
        description:
          "This quaint apartment's generous windows are front-row seats for watching the city dwellers outside. This space makes perfect living quarters for a small group of roommates needing easy access to the center of the bustling city!",
        priceHistory: {
          // wiki: 1000,
          // preGame: 1000,
          // inGame: numberValueTBD,
        },
        rentDetails: {
          rent: 500,
          deposit: 1000,
          furniture: 13680,
        },
        dimensions: {
          width: 6,
          depth: 12,
        },
        type: 'residential',
        availability: 'available',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 2,
          bathrooms: 1,
          floors: 1,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/8/89/Chic_Street.jpg/revision/latest?cb=20161221005904',
      },
      {
        id: 'twenty-one-chic-street-b',
        title: '1312 21 Chic Street',
        description: 'The perfect starter apartment, this compact studio commands great views of the Fashion District.',
        priceHistory: {
          // wiki: numberValueTBD,
          // preGame: numberValueDoesntExist,
          // inGame: numberValueTBD,
        },
        rentDetails: {
          rent: 400,
          deposit: 600,
          furniture: numberValueTBD,
        },
        dimensions: {
          width: 9,
          depth: 10,
        },
        type: 'residential',
        availability: 'occupied',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 1,
          bathrooms: 1,
          floors: 1,
        },
        owner: 'Pizzazz',
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/8/89/Chic_Street.jpg/revision/latest?cb=20161221005904',
      },
      {
        id: 'twenty-one-chic-street-c',
        title: '1313 21 Chic Street',
        description: "This place is incredibly, suspiciously cheap. It's like the Landlord can't give it away...",
        priceHistory: {
          // wiki: 600,
          // preGame: 600,
          // inGame: numberValueTBD,
        },
        rentDetails: {
          rent: 300,
          deposit: 600,
          furniture: 7080,
        },
        dimensions: {
          width: 16,
          depth: 7,
        },
        type: 'residential',
        availability: 'available',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 2,
          bathrooms: 1,
          floors: 1,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/8/89/Chic_Street.jpg/revision/latest?cb=20161221005904',
      },
      // penthouse
      {
        id: 'torendi-tower-penthouse',
        title: '1 Torendi Tower Penthouse',
        description:
          'This huge penthouse with a priceless view of the Fashion District has room for everything! With permits for complete interior remodeling, owners will be able to create the perfect home, no matter how grand their visions.',
        priceHistory: { wiki: 244264, preGame: numberValueDoesntExist, inGame: 240429 },
        dimensions: {
          width: 40,
          depth: 30,
        },
        type: 'residential',
        availability: 'available',
        buildingDetails: {
          type: 'apartment',
          bedrooms: 3,
          bathrooms: 3,
          floors: 1,
        },
        imageURL:
          'http://static.wikia.nocookie.net/sims/images/1/11/Torendi_Tower.jpg/revision/latest?cb=20161221005932',
      },
      // community
      {
        id: 'planet-honey-popl',
        title: 'Planet Honey Popl',
        description:
          "Built in the center of the Fashion District, Planet Honey Pop! Karaoke Bar's sprightly melodies are in perfect harmony with the songs of the metro train below",
        priceHistory: { wiki: 91944, preGame: numberValueDoesntExist, inGame: 91464 },
        dimensions: {
          width: 30,
          depth: 20,
        },
        type: 'community',
        availability: 'unavailable',
        buildingDetails: {
          type: 'karaoke bar',
          bedrooms: numberValueTBD,
          bathrooms: numberValueTBD,
          floors: numberValueTBD,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/6/63/Planet_Honey_Pop.jpg/revision/latest?cb=20161221005951',
      },
    ],
    uptown: [
      //landgraab tem 2 andartes
      //spire tem 3 andares
      // -----
      // alto apartments
      {
        id: 'alto-apartments-a',
        title: '1010 Alto Apartments',
        description:
          "A huge family home with luxury Chef's kitchen, this apartment is the epitome of Uptown chic living.",
        priceHistory: { wiki: numberValueDoesntExist, preGame: numberValueDoesntExist, inGame: numberValueTBD },
        dimensions: {
          width: 37,
          depth: 18,
        },
        type: 'residential',
        availability: 'available',
        buildingDetails: {
          type: 'apartment',
          bedrooms: numberValueTBD,
          bathrooms: numberValueTBD,
          floors: numberValueTBD,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/7/70/Alto_Apartments.jpg/revision/latest?cb=20161221011356',
      },
      {
        id: 'alto-apartments-b',
        title: '1020 Alto Apartments',
        description:
          'Huge floor to ceiling windows combined with a beautiful feature fireplace and a striking view of the Spice Market neighborhood makes this apartment an unforgettable home.',
        priceHistory: { wiki: numberValueDoesntExist, preGame: numberValueDoesntExist, inGame: numberValueTBD },
        dimensions: {
          width: 36,
          depth: 18,
        },
        type: 'residential',
        availability: 'occupied',
        buildingDetails: {
          type: 'apartment',
          bedrooms: numberValueTBD,
          bathrooms: numberValueTBD,
          floors: numberValueTBD,
        },
        owner: 'Lobo',
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/7/70/Alto_Apartments.jpg/revision/latest?cb=20161221011356',
      },
      // landgraab apartments
      {
        id: 'viii-landgraab',
        title: 'VIII Landgraab',
        description:
          'While many are stunned by the panoramic vistas including a fantastic view of a helicopter landing pad, visitors will note the exclusive address and luxury walk-in closets as the prime qualities of this spacious residence.',
        priceHistory: { wiki: numberValueDoesntExist, preGame: numberValueDoesntExist, inGame: numberValueTBD },
        dimensions: {
          width: 16,
          depth: 14,
        },
        type: 'residential',
        availability: 'available',
        buildingDetails: {
          type: 'apartment',
          bedrooms: numberValueTBD,
          bathrooms: numberValueTBD,
          floors: numberValueTBD,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/0/03/Landgraab_Apartments.jpg/revision/latest?cb=20161221011709',
      },
      {
        id: 'ix-landgraab',
        title: 'IX Landgraab',
        description:
          'Though the exclusive address is reason enough to take this dazzling suite, the upper-level loft and floor to ceiling windows certainly add to the appeal.',
        priceHistory: { wiki: numberValueDoesntExist, preGame: numberValueDoesntExist, inGame: numberValueTBD },
        dimensions: {
          width: 14,
          depth: 18,
        },
        type: 'residential',
        availability: 'occupied',
        buildingDetails: {
          type: 'apartment',
          bedrooms: numberValueTBD,
          bathrooms: numberValueTBD,
          floors: numberValueTBD,
        },
        owner: 'Feng family',
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/0/03/Landgraab_Apartments.jpg/revision/latest?cb=20161221011709',
      },
      // spire
      {
        id: 'spire-apartments',
        title: '888 Spire Apartments',
        description:
          "With commanding views of the bay, the secluded 888 Spire Apartments is perhaps the most prestigious apartment for rent in the entire city. One glimpse through the floor to ceiling windows and you'll understand why.",
        priceHistory: { wiki: 7500, preGame: numberValueDoesntExist, inGame: numberValueTBD },
        dimensions: {
          width: 18,
          depth: 13,
        },
        type: 'residential',
        availability: 'occupied',
        buildingDetails: {
          type: 'apartment',
          bedrooms: numberValueTBD,
          bathrooms: numberValueTBD,
          floors: numberValueTBD,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/4/44/Spire_Apartments.jpg/revision/latest?cb=20161221011755',
      },
      // community
      {
        id: 'stargazer-lounge',
        title: 'Stargazer Lounge',
        description:
          "Rooftop party, anyone? This decadent penthouse property overlooking the city has arguably the best bird's eye view of San Myshuno the market has to offer!",
        priceHistory: { wiki: 124821, preGame: numberValueDoesntExist, inGame: numberValueTBD },
        dimensions: {
          width: 40,
          depth: 30,
        },
        type: 'community',
        availability: 'unavailable',
        buildingDetails: {
          type: 'lounge',
          bedrooms: numberValueTBD,
          bathrooms: numberValueTBD,
          floors: numberValueTBD,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/8/8a/Stargazer_Lounge.jpg/revision/latest?cb=20161221012343',
      },
      {
        id: 'skye-fitness',
        title: 'Skye Fitness',
        description:
          "Skye Fitness Gym sits at the head of Uptown's behemoth architectural complex. Enjoy breathtaking views of the city while shooting hoops on the gorgeous open-air basketball court.",
        priceHistory: { wiki: 123989, preGame: numberValueDoesntExist, inGame: numberValueTBD },
        dimensions: {
          width: 39,
          depth: 20,
        },
        type: 'community',
        availability: 'unavailable',
        buildingDetails: {
          type: 'gym',
          bedrooms: numberValueTBD,
          bathrooms: numberValueTBD,
          floors: numberValueTBD,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/8/8a/Skye_Fitness.jpg/revision/latest?cb=20161221012519',
      },
    ],
    'san-myshuno-undefined': [
      {
        id: 'mysuno-meadows',
        title: 'Myshuno Meadows',
        description:
          'Surrounded by both trees and the cityscape, Myshuno Meadows is a great place for a relaxed wedding or outdoor birthday party. Centered on Barnabas Skye’s old Observatory, part of the area has been converted into an event space while still retaining the original telescope.',
        priceHistory: { wiki: 224568, preGame: numberValueDoesntExist, inGame: 210927 },
        dimensions: {
          width: 64,
          depth: 64,
        },
        type: 'community',
        availability: 'unavailable',
        buildingDetails: {
          type: 'central park',
          bedrooms: numberValueDoesntExist,
          bathrooms: numberValueDoesntExist,
          floors: 2,
        },
        imageURL:
          'https://static.wikia.nocookie.net/sims/images/7/70/Alto_Apartments.jpg/revision/latest?cb=20161221011356',
      },
    ],
  },
  // 'test-world': {
  //   'test-neighborhood': [{ id: 'test-lot' }],
  // },
};

export default lotData;
