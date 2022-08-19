import type { TIngredients } from 'src/providers/types/export';

export interface IIngredientsNav {
  tabs: TIngredients[];
  current: string;
  handleClick: (type: string) => void;
}
