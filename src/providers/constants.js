export const INITIAL_STATE = { ingredients: [] };

export const INITIAL_CONTEXT = { state: INITIAL_STATE, dispatch: () => null };

export const BURGER_CONSTRUCTOR_ACTION_TYPE = {
  SET_INGREDIENTS: 'SET_INGREDIENTS',
};
