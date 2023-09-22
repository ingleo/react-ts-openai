import { useEffect, useReducer } from 'react';

import { categoriesReducer } from '../reducers/categoriesReducer';
import { getCategories } from '../helpers/getCategories';

const initialization = () => {
  return getCategories();
};

export const useCategories = () => {
  const [categoriesListState, dispatchCategoriesAction] = useReducer(
    categoriesReducer,
    [],
    initialization
  );

  useEffect(() => {}, [categoriesListState]);

  const handleToggleCategory = (categoryId: string) => {
    const toggleAction = {
      type: 'TOGGLE_CATEGORY',
      payload: { id: categoryId },
    };

    dispatchCategoriesAction(toggleAction);
  };

  return {
    categoriesListState,
    handleToggleCategory,
  };
};
