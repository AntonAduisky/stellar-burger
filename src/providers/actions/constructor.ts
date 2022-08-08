import { v4 as uuidv4 } from 'uuid';

import {
  ADD, DELETE, RESET, CHANGE_ORDER,
} from '../constants/constructor';

import type { IIngredient } from '../types/data';

export interface IAddItemAction {
  type: typeof ADD;
  item: IIngredient;
}

export interface IRemoveItemAction {
  type: typeof DELETE;
  item: IIngredient;
}

export interface IResetConstructorAction {
  type: typeof RESET;
}

export interface IChangeOrderIngredientAction {
  type: typeof CHANGE_ORDER;
  dragIndex: number;
  hoverIndex: number;
}

export type TConstructorActions =
  | IAddItemAction
  | IRemoveItemAction
  | IResetConstructorAction
  | IChangeOrderIngredientAction;

// dnd
export function addItem(item: IIngredient): IAddItemAction {
  return {
    type: ADD,
    item: {
      ...item,
      uId: uuidv4(),
    },
  };
}

export function removeItem(item: IIngredient): IRemoveItemAction {
  return {
    type: DELETE,
    item,
  };
}

export function resetConstructor(): IResetConstructorAction {
  return {
    type: RESET,
  };
}

export function changeOrder(dragIndex: number, hoverIndex: number): IChangeOrderIngredientAction {
  return {
    type: CHANGE_ORDER,
    dragIndex,
    hoverIndex,
  };
}
