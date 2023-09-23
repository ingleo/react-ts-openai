import { useEffect, useReducer } from 'react';

import { traitsReducer } from '../reducers/traitsReducer';
import { getPairOptions } from '../helpers/getPairOptions';
import { PairOptions } from '../interfaces';

const initialization = () => {
  return getPairOptions();
};

export const useTraits = () => {
  const [traitListState, dispatchTraitsAction] = useReducer(
    traitsReducer,
    [],
    initialization
  );

  useEffect(() => {}, [traitListState]);

  const handleToggleTrait = (newPair: PairOptions) => {
    const toggleAction = {
      type: 'TOGGLE_TRAIT',
      payload: newPair,
    };

    dispatchTraitsAction(toggleAction);
  };

  return {
    traitListState,
    handleToggleTrait,
  };
};
