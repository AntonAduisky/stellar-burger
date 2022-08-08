/* eslint-disable func-names */
import api from '../../api/api-config';
import {
  RESET_INGREDIENTS_ERROR_STATUS, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED,
} from '../constants/ingredients';

import type {
  AppDispatch, IIngredient, IIngredientsResponse,
} from '../types/export';

export interface IResetIngredientsError {
  type: typeof RESET_INGREDIENTS_ERROR_STATUS;
}

export interface IGetIngredientsRequest {
  type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccess {
  type: typeof GET_INGREDIENTS_SUCCESS;
  ingredients: IIngredient[];
}

export interface IGetIngredientsFailed {
  type: typeof GET_INGREDIENTS_FAILED;
}

export type TIngredientsActions =
  | IResetIngredientsError
  | IGetIngredientsRequest
  | IGetIngredientsSuccess
  | IGetIngredientsFailed;

export function resetIngredientsError(): IResetIngredientsError {
  return {
    type: RESET_INGREDIENTS_ERROR_STATUS,
  };
}

export function getIngredientsSuccess(res: IIngredientsResponse): IGetIngredientsSuccess {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    ingredients: res.data,
  };
}

export function getIngredientsRequest(): IGetIngredientsRequest {
  return {
    type: GET_INGREDIENTS_REQUEST,
  };
}

export function getIngredientsFailed(): IGetIngredientsFailed {
  return {
    type: GET_INGREDIENTS_FAILED,
  };
}

export function getIngredients() {
  return function (dispatch: AppDispatch) {
    dispatch(getIngredientsRequest());
    api.takeIngredients()
      .then((res) => {
        dispatch(getIngredientsSuccess(res));
      })
      .catch(() => dispatch(getIngredientsFailed()));
  };
}
