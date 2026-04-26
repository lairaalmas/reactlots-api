import type { Lot } from '../../types/lot.js';
import { numberValueDoesntExist, numberValueTBD } from '../../utils/constants.js';

export const sanMyshunoData: Record<string, Lot[]> = {
  'spice-market': [
    // culpepper apartments
    {
      id: 'culpepper-house-a',
      title: '17 Culpepper House',
      description: 'A snug apartment in the heart of the desirable Spice Market district.',
      priceDetails: {
        // wiki: numberValueDoesntExist,
        // preGame: 800,
        // inGame: 800,
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
      worldId: 'san-myshuno',
      neighborhoodId: 'spice-market',
    },
    {
      id: 'culpepper-house-b',
      title: '18 Culpepper House',
      description:
        'Once home to a famous local Chef, legend holds that Pufferfish Nigiri was invented in this very kitchen. Additionally, the dining room boasts brand new clean floors and fresh paint throughout.',
      priceDetails: {
        // wiki: numberValueDoesntExist,
        // preGame: 1000,
        // inGame: 1000,
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
      worldId: 'san-myshuno',
      neighborhoodId: 'spice-market',
    },
    {
      id: 'culpepper-house-c',
      title: '19 Culpepper House',
      description: 'A fixer-upper apartment with very reasonable rent and a spacious balcony.',
      priceDetails: {
        // wiki: numberValueDoesntExist,
        // preGame: 550,
        // inGame: 550,
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
      worldId: 'san-myshuno',
      neighborhoodId: 'spice-market',
    },
    {
      //  Rasoya family
      id: 'culpepper-house-d',
      title: '20 Culpepper House',
      description: 'A spacious brownstone apartment with bay windows, dockside views and an open plan kitchen.',

      priceDetails: {
        // wiki: numberValueDoesntExist,
        // preGame: numberValueDoesntExist,
        // inGame: 4800,
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
      imageURL:
        'https://static.wikia.nocookie.net/sims/images/2/20/Culpepper_Apartments.jpg/revision/latest?cb=20161220230728',
      worldId: 'san-myshuno',
      neighborhoodId: 'spice-market',
    },
    // jasmine suites apartments
    {
      // bheeda family
      id: 'jasmine-suites-a',
      title: '2A Jasmine Suites',
      description: 'A compact apartment with character in a family friendly neighborhood.',
      priceDetails: {
        // wiki: numberValueDoesntExist,
        // preGame: numberValueDoesntExist,
        // inGame: 800,
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
      imageURL:
        'https://static.wikia.nocookie.net/sims/images/5/5f/Jasmine_Suits.jpg/revision/latest?cb=20161220230808',
      worldId: 'san-myshuno',
      neighborhoodId: 'spice-market',
    },
    {
      id: 'jasmine-suites-b',
      title: '2B Jasmine Suites',
      description: "A charming family home overlooking the Spice Market's famous festival square.",
      priceDetails: {
        // wiki: numberValueDoesntExist,
        // preGame: 1000,
        // inGame: 1000,
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
      worldId: 'san-myshuno',
      neighborhoodId: 'spice-market',
    },
    // the old salt house
    {
      id: 'the-old-salt-house',
      title: 'The Old Salt House',
      description:
        'A sleek family home in a converted docklands building, The Old Salt House is a triumph of urban renewal.',

      priceDetails: { wiki: 113443, preGame: numberValueDoesntExist, inGame: 113378 },
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
      worldId: 'san-myshuno',
      neighborhoodId: 'spice-market',
    },
    // community lots
    {
      id: 'waterside-warble',
      title: 'waterside-warble',
      description:
        "Constructed from a converted cannery, Waterside Warble's original warehouse layout was the perfect canvas to section off some intimate karaoke rooms.",

      priceDetails: { wiki: 91516, preGame: numberValueDoesntExist, inGame: 88361 },
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
      worldId: 'san-myshuno',
      neighborhoodId: 'spice-market',
    },
  ],
  'arts-quarter': [
    // medina studios
    {
      // benali
      id: 'medina-studios-a',
      title: '910 Medina Studios',
      description:
        "A cramped apartment with... personality that overlooks the Art Quarter's lovely center plaza. The cozy kitchen is just big enough and the living room boasts a classic mauve carpet.",

      priceDetails: {
        // preGame: numberValueDoesntExist,
        // inGame: 500,
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
      imageURL:
        'https://static.wikia.nocookie.net/sims/images/b/bc/Medina_Studios.jpg/revision/latest?cb=20161220234428',
      worldId: 'san-myshuno',
      neighborhoodId: 'arts-quarter',
    },
    {
      id: 'medina-studios-b',
      title: '920 Medina Studios',
      description:
        "It's said a medium once lived in this spooky little place. Who knows what strange after effects may linger here...",

      priceDetails: {
        wiki: numberValueTBD,
        preGame: numberValueDoesntExist,
        inGame: 800,
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
      worldId: 'san-myshuno',
      neighborhoodId: 'arts-quarter',
    },
    {
      id: 'medina-studios-c',
      title: '930 Medina Studios',
      description: 'Surprisingly cheap for its size, this fine old apartment is the most grand in the building.',

      priceDetails: {
        // wiki:
        // preGame:
        // inGame:
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
      worldId: 'san-myshuno',
      neighborhoodId: 'arts-quarter',
    },
    // hakim house apartments
    {
      // jang family
      id: 'hakim-house-a',
      title: '121 Hakim House',
      description:
        'Though not the largest apartment in the building, the home studio and funky furnishings are certainly a desirable plus!',

      priceDetails: {
        // wiki: numberValueTBD,
        // preGame: numberValueDoesntExist,
        // inGame: 4800,
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
      imageURL: 'https://static.wikia.nocookie.net/sims/images/8/89/Hakim_House.jpg/revision/latest?cb=20161220234457',
      worldId: 'san-myshuno',
      neighborhoodId: 'arts-quarter',
    },
    {
      id: 'hakim-house-b',
      title: '122 Hakim House',
      description: 'Spacious and luxurious, this apartment also has a historical connection to a famous local artist',

      priceDetails: {
        // wiki: numberValueTBD,
        // preGame: numberValueDoesntExist,
        // inGame: 5600,
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
      imageURL: 'https://static.wikia.nocookie.net/sims/images/8/89/Hakim_House.jpg/revision/latest?cb=20161220234457',
      worldId: 'san-myshuno',
      neighborhoodId: 'arts-quarter',
    },
    // fountainview penthouse
    {
      id: 'fountainview-penthouse',
      title: 'FountainView Penthouse',
      description: 'Boasting some of the finest views in the Arts Quarter, this penthouse is prime real estate indeed.',

      priceDetails: { wiki: 83188, preGame: numberValueDoesntExist, inGame: 84188 },
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
      worldId: 'san-myshuno',
      neighborhoodId: 'arts-quarter',
    },
    // community
    {
      id: 'cashbah-gallery',
      title: 'Cashbah Gallery',
      description:
        'This modern glass structure in the heart of the Arts Quarter is a chic destination for a date or a recreational day devoted to improving your artistic skills.',

      priceDetails: { wiki: 201329, preGame: numberValueDoesntExist, inGame: 201329 },
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
      worldId: 'san-myshuno',
      neighborhoodId: 'arts-quarter',
    },
  ],
  'fashion-district': [
    // zenview apartments
    {
      // karaoke legends
      id: 'zenview-a',
      title: '701 ZenView',
      description: 'A snug multi-floor apartment with amazing balcony views of the Fashion District.',
      priceDetails: {
        // wiki: numberValueTBD,
        // preGame: numberValueDoesntExist,
        // inGame: numberValueTBD,
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
      imageURL:
        'https://static.wikia.nocookie.net/sims/images/5/58/ZenView_Apartments.jpg/revision/latest?cb=20161221005831',
      worldId: 'san-myshuno',
      neighborhoodId: 'fashion-district',
    },
    {
      id: 'zenview-b',
      title: '702 ZenView',
      description: 'A highly modern two floor apartment in the heart of the Fashion District.',
      priceDetails: {
        // wiki: numberValueTBD,
        // preGame: numberValueDoesntExist,
        // inGame: numberValueTBD,
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
      worldId: 'san-myshuno',
      neighborhoodId: 'fashion-district',
    },
    // 21 chic street
    {
      id: 'twenty-one-chic-street-a',
      title: '1310 21 Chic Street',
      description:
        "This quaint apartment's generous windows are front-row seats for watching the city dwellers outside. This space makes perfect living quarters for a small group of roommates needing easy access to the center of the bustling city!",

      priceDetails: {
        // wiki: 1000, preGame: 1000, inGame: numberValueTBD,
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
      imageURL: 'https://static.wikia.nocookie.net/sims/images/8/89/Chic_Street.jpg/revision/latest?cb=20161221005904',
      worldId: 'san-myshuno',
      neighborhoodId: 'fashion-district',
    },
    {
      // pizzazz family
      id: 'twenty-one-chic-street-b',
      title: '1312 21 Chic Street',
      description: 'The perfect starter apartment, this compact studio commands great views of the Fashion District.',

      priceDetails: {
        // wiki: numberValueTBD,
        // preGame: numberValueDoesntExist,
        // inGame: numberValueTBD,
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
      imageURL: 'https://static.wikia.nocookie.net/sims/images/8/89/Chic_Street.jpg/revision/latest?cb=20161221005904',
      worldId: 'san-myshuno',
      neighborhoodId: 'fashion-district',
    },
    {
      id: 'twenty-one-chic-street-c',
      title: '1313 21 Chic Street',
      description: "This place is incredibly, suspiciously cheap. It's like the Landlord can't give it away...",

      priceDetails: {
        // wiki: 600,
        // preGame: 600,
        // inGame: numberValueTBD,
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
      imageURL: 'https://static.wikia.nocookie.net/sims/images/8/89/Chic_Street.jpg/revision/latest?cb=20161221005904',
      worldId: 'san-myshuno',
      neighborhoodId: 'fashion-district',
    },
    // penthouse
    {
      id: 'torendi-tower-penthouse',
      title: '1 Torendi Tower Penthouse',
      description:
        'This huge penthouse with a priceless view of the Fashion District has room for everything! With permits for complete interior remodeling, owners will be able to create the perfect home, no matter how grand their visions.',

      priceDetails: { wiki: 244264, preGame: numberValueDoesntExist, inGame: 240429 },
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
      imageURL: 'http://static.wikia.nocookie.net/sims/images/1/11/Torendi_Tower.jpg/revision/latest?cb=20161221005932',
      worldId: 'san-myshuno',
      neighborhoodId: 'fashion-district',
    },
    // community
    {
      id: 'planet-honey-popl',
      title: 'Planet Honey Popl',
      description:
        "Built in the center of the Fashion District, Planet Honey Pop! Karaoke Bar's sprightly melodies are in perfect harmony with the songs of the metro train below",

      priceDetails: { wiki: 91944, preGame: numberValueDoesntExist, inGame: 91464 },
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
      worldId: 'san-myshuno',
      neighborhoodId: 'fashion-district',
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
      priceDetails: { wiki: numberValueDoesntExist, preGame: numberValueDoesntExist, inGame: numberValueTBD },
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
      worldId: 'san-myshuno',
      neighborhoodId: 'uptown',
    },
    {
      // lobo family
      id: 'alto-apartments-b',
      title: '1020 Alto Apartments',
      description:
        'Huge floor to ceiling windows combined with a beautiful feature fireplace and a striking view of the Spice Market neighborhood makes this apartment an unforgettable home.',
      priceDetails: { wiki: numberValueDoesntExist, preGame: numberValueDoesntExist, inGame: numberValueTBD },
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
      imageURL:
        'https://static.wikia.nocookie.net/sims/images/7/70/Alto_Apartments.jpg/revision/latest?cb=20161221011356',
      worldId: 'san-myshuno',
      neighborhoodId: 'uptown',
    },
    // landgraab apartments
    {
      id: 'viii-landgraab',
      title: 'VIII Landgraab',
      description:
        'While many are stunned by the panoramic vistas including a fantastic view of a helicopter landing pad, visitors will note the exclusive address and luxury walk-in closets as the prime qualities of this spacious residence.',
      priceDetails: { wiki: numberValueDoesntExist, preGame: numberValueDoesntExist, inGame: numberValueTBD },
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
      worldId: 'san-myshuno',
      neighborhoodId: 'uptown',
    },
    {
      // Feng family
      id: 'ix-landgraab',
      title: 'IX Landgraab',
      description:
        'Though the exclusive address is reason enough to take this dazzling suite, the upper-level loft and floor to ceiling windows certainly add to the appeal.',
      priceDetails: { wiki: numberValueDoesntExist, preGame: numberValueDoesntExist, inGame: numberValueTBD },
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
      imageURL:
        'https://static.wikia.nocookie.net/sims/images/0/03/Landgraab_Apartments.jpg/revision/latest?cb=20161221011709',
      worldId: 'san-myshuno',
      neighborhoodId: 'uptown',
    },
    // spire
    {
      id: 'spire-apartments',
      title: '888 Spire Apartments',
      description:
        "With commanding views of the bay, the secluded 888 Spire Apartments is perhaps the most prestigious apartment for rent in the entire city. One glimpse through the floor to ceiling windows and you'll understand why.",
      priceDetails: { wiki: 7500, preGame: numberValueDoesntExist, inGame: numberValueTBD },
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
      worldId: 'san-myshuno',
      neighborhoodId: 'uptown',
    },
    // community
    {
      id: 'stargazer-lounge',
      title: 'Stargazer Lounge',
      description:
        "Rooftop party, anyone? This decadent penthouse property overlooking the city has arguably the best bird's eye view of San Myshuno the market has to offer!",
      priceDetails: { wiki: 124821, preGame: numberValueDoesntExist, inGame: numberValueTBD },
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
      worldId: 'san-myshuno',
      neighborhoodId: 'uptown',
    },
    {
      id: 'skye-fitness',
      title: 'Skye Fitness',
      description:
        "Skye Fitness Gym sits at the head of Uptown's behemoth architectural complex. Enjoy breathtaking views of the city while shooting hoops on the gorgeous open-air basketball court.",
      priceDetails: { wiki: 123989, preGame: numberValueDoesntExist, inGame: numberValueTBD },
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
      imageURL: 'https://static.wikia.nocookie.net/sims/images/8/8a/Skye_Fitness.jpg/revision/latest?cb=20161221012519',
      worldId: 'san-myshuno',
      neighborhoodId: 'uptown',
    },
  ],
  'san-myshuno-undefined': [
    {
      id: 'mysuno-meadows',
      title: 'Myshuno Meadows',
      description:
        'Surrounded by both trees and the cityscape, Myshuno Meadows is a great place for a relaxed wedding or outdoor birthday party. Centered on Barnabas Skye’s old Observatory, part of the area has been converted into an event space while still retaining the original telescope.',
      priceDetails: { wiki: 224568, preGame: numberValueDoesntExist, inGame: 210927 },
      dimensions: {
        width: 64,
        depth: 64,
      },
      type: 'residential',
      availability: 'available',
      buildingDetails: {
        type: 'central park',
        bedrooms: numberValueDoesntExist,
        bathrooms: numberValueDoesntExist,
        floors: 2,
      },
      imageURL:
        'https://static.wikia.nocookie.net/sims/images/7/70/Alto_Apartments.jpg/revision/latest?cb=20161221011356',
      worldId: 'san-myshuno',
      neighborhoodId: 'other',
    },
  ],
};
