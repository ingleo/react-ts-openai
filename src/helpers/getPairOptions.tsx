import { PairOptions } from '../interfaces';

export const getPairOptions = (): Array<PairOptions> => {
  return [
    {
      name: 'pairOne',
      traits: [
        { name: 'Funny', valid: true },
        { name: 'Serious', valid: false },
      ],
    },
    {
      name: 'pairTwo',
      traits: [
        { name: 'Introverted', valid: true },
        { name: 'Extroverted', valid: false },
      ],
    },
    {
      name: 'pairThree',
      traits: [
        { name: 'Excited', valid: true },
        { name: 'Calm', valid: false },
      ],
    },
    {
      name: 'pairFour',
      traits: [
        { name: 'Passive', valid: true },
        { name: 'Proactive', valid: false },
      ],
    },
    {
      name: 'pairFive',
      traits: [
        { name: 'Certain', valid: true },
        { name: 'Doubtful', valid: false },
      ],
    },
  ];
};
