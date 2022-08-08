/* eslint-disable default-param-last */
import { SET_INGREDIENT, CLOSE_INGREDIENT_DETAILS } from '../constants/export';

import type { TIngredientActions } from '../actions/export';
import type { IIngredientState } from '../types/export';

const $initialState: IIngredientState = {
  isIngredientDetailsOpened: false,
  viewedIngredient: null,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const ingredientReducer = (state = $initialState, action: TIngredientActions): IIngredientState => {
  switch (action.type) {
    case SET_INGREDIENT:
      return {
        ...state,
        viewedIngredient: action.ingredient,
      };
    case CLOSE_INGREDIENT_DETAILS:
      return {
        ...state,
        isIngredientDetailsOpened: false,
        viewedIngredient: null,
      };
    default:
      return state;
  }
};
