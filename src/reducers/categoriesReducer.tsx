import { CategoryOptions } from '../interfaces';

export type Action = {
  type: string;
  payload: { id: string };
};

export const categoriesReducer = (
  initialState: Array<CategoryOptions>,
  action: Action
) => {
  switch (action.type) {
    case 'TOGGLE_CATEGORY':
      return initialState.map((category: CategoryOptions) => {
        if (category.id === action.payload.id) {
          return {
            ...category,
            valid: true,
          };
        } else {
          return {
            ...category,
            valid: false,
          };
        }
      });
    default:
      return initialState;
  }
};
