import type { WorldDTO, WorldSummaryById } from '../types/world.js';

// [ { <full world info> } ]
export const worlds: WorldDTO[] = [
  {
    id: 'willow-creek',
    title: 'Willow Creek',
    description:
      "Willow Creek is a lush bayou of rolling hills intertwined with marshy riverways. It's home to long-standing reputations and simple lifestyles full of coastal hospitality. Convenient with town comforts, lively neighbors, and a grandeur of property possibilities, Willow Creek is the idyllic place to settle down and settle in.",
  },
  {
    id: 'oasis-springs',
    title: 'Oasis Springs',
    description:
      'An oasis nestled in the austere beauty of the western desert, this haven of eclectic culture is fringed by countless soaring palms, and lent vibrant color through impossibly lush landscaping. Oasis Springs offers relaxing retreats from the sun to any traveler who discovers it.',
  },
  {
    id: 'newcrest',
    title: 'Newcrest',
    description:
      "Don't let the abundance of space fool you. Take a look around, admire the wonderful scenery, and explore the endless possibilities. Do you see it? This is your whole new world! What are you waiting for?",
  },
  {
    id: 'san-myshuno',
    title: 'San Myshuno',
    description:
      'This city is made up of four distinct districts: the Spice Market, the Fashion District, The Arts Quarter and Uptown. In addition, Myshuno Meadows is a large city park tucked beneath the skyscrapers if your Sims need to get away for a touch of nature. Depending on where your Sims choose to live, you\’ll get a very different flavor of the city. You might find yourself in a cramped, roach-infested studio apartment in the Arts Quarter… Or you might be enjoying a breathtaking view of the city from your very own tricked-out rooftop penthouse Jacuzzi in Uptown.',
  },
];

// { 'world-id': { id, title } }
export const worldSummaryById = worlds.reduce<WorldSummaryById>((acc, w) => {
  // only info used by other entities
  acc[w.id] = {
    id: w.id,
    title: w.title,
  };
  return acc;
}, {});
