import { PairOptions } from '../interfaces';

export type Action = {
  type: string;
  payload: PairOptions;
};

export const traitsReducer = (
  initialState: Array<PairOptions>,
  action: Action
) => {
  switch (action.type) {
    case 'TOGGLE_TRAIT':
      return initialState.map((pair: PairOptions) => {
        if (pair.name === action.payload.name) {
          const newPair: PairOptions = action.payload;
          return {
            ...pair,
            ...newPair,
          };
        }
        return pair;
      });
    default:
      return initialState;
  }
};
