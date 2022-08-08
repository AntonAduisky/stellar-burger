import type {
  WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS,
  WS_GET_ALL_ORDERS, WS_GET_USER_ORDERS, WS_USER_ORDERS_CONNECTION_CLOSED, WS_USER_ORDERS_CONNECTION_ERROR,
  WS_USER_ORDERS_CONNECTION_START, WS_USER_ORDERS_CONNECTION_SUCCESS,
} from '../constants/ws';

export interface IConstructorState {
  bun: IIngredient | null;
  filling: IIngredient[];
  ingredientIds: string[];
  totalPrice: number;
}

export interface IIngredientState {
  isIngredientDetailsOpened ?: boolean ;
  viewedIngredient: IIngredient | null;
}

export interface IIngredientsState {
  ingredientsArray: IIngredient[];
  ingredientsRequest: boolean;
  ingredientsRequestFailed: boolean;
}

export interface IOrderState {
  orderNumber: number | null;
  orderRequest: boolean;
  orderRequestFailed: boolean;
  isOrderDetailsOpened: boolean;
}

export interface IUserState {
  registrationRequest: boolean,
  registrationRequestFailed: boolean,

  loginRequest: boolean,
  loginRequestFailed: boolean,

  forgotPasswordRequest: boolean,
  forgotPasswordRequestFailed: boolean,

  resetPasswordRequest: boolean,
  resetPasswordRequestFailed: boolean,

  getUserDataRequest: boolean,
  getUserDataRequestFailed: boolean,

  logoutRequest: boolean,
  logoutRequestFailed: boolean,

  refreshTokenRequest: boolean,
  refreshTokenRequestFailed: boolean,

  sendUserDataRequest: boolean,
  sendUserDataRequestFailed: boolean,

  isPasswordForgot: boolean,

  userData: IUser | null,

  isAuthChecked: boolean,
  checkAuthRequest: boolean,
  checkAuthFailed: boolean,
}

export interface IWsState {
  wsAllOrders: boolean,
  wsUserOrders: boolean,
  orders: IOrder[],
  userOrders: IOrder[],
  total: number | null,
  totalToday: number,
  orderInfoRequest: boolean,
  orderInfoFailed: boolean,
  orderInfo: IOrder | null,
  allOrdersError?: Event,
  userOrdersError?: Event,
}
export interface IWsUserActions {
  wsInitWithToken?: typeof WS_USER_ORDERS_CONNECTION_START,
  onOpen: typeof WS_USER_ORDERS_CONNECTION_SUCCESS,
  onClose: typeof WS_USER_ORDERS_CONNECTION_CLOSED,
  onError: typeof WS_USER_ORDERS_CONNECTION_ERROR,
  onMessage: typeof WS_GET_USER_ORDERS,
}

export interface IWsActions {
  wsInit?: typeof WS_CONNECTION_START,
  onOpen: typeof WS_CONNECTION_SUCCESS,
  onClose: typeof WS_CONNECTION_CLOSED,
  onError: typeof WS_CONNECTION_ERROR,
  onMessage: typeof WS_GET_ALL_ORDERS,
}

export interface IIngredient {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
  uId?: string;
  qty?: number;
}

export interface IIngredientsResponse {
  data: IIngredient[];
  success: boolean;
}

export interface IOwner {
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface IOrder {
  orders: IOrder[];
  total: number;
  totalToday: number;
  createdAt: string;
  ingredients: IIngredient[];
  name: string;
  number: number;
  price: number;
  status: string;
  updatedAt: string;
  _id: string;
  owner: IOwner;
}

export interface IError {
  success: boolean;
  message: string;
}

export interface IUser {
  email: string;
  name: string;
}

export interface IOrderResponse {
  name: string;
  success: boolean;
  order: IOrder;
}

export interface ILoginResponse {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
