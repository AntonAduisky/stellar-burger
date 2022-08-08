import { SET_INGREDIENT, CLOSE_INGREDIENT_DETAILS } from '../constants/ingredient';

import type { IIngredient } from '../types/data';

export interface ISetCurrentIngredient {
  type: typeof SET_INGREDIENT;
  ingredient:IIngredient;
}

export interface ICloseIngredientModal {
  type: typeof CLOSE_INGREDIENT_DETAILS;
}

export type TIngredientActions =
| ISetCurrentIngredient
| ICloseIngredientModal;

// action creator возвращающий action(object с полем type и какими-либо данными)
export function setCurrentIngredient(item: IIngredient): ISetCurrentIngredient {
  return {
    type: SET_INGREDIENT,
    ingredient: item,
  };
}

export function closeIngredientModal(): ICloseIngredientModal {
  return {
    type: CLOSE_INGREDIENT_DETAILS,
  };
}
