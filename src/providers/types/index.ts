import type { Action, ActionCreator } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import type { store } from '../store';
import type {
  TConstructorActions, TIngredientsActions, TOrderActions, TWsActions, TIngredientActions, TUserActions,
} from '../actions/export';

export type TApplicationActions =
| TConstructorActions
| TIngredientActions
| TIngredientsActions
| TOrderActions
| TWsActions
| TUserActions;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TApplicationActions>>;
