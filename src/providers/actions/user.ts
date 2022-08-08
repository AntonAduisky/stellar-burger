/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import api from '../../api/api-config';
import { setCookie, deleteCookie } from '../../utils/cookie';
import {
  REGISTRATION, REGISTRATION_SUCCESS, REGISTRATION_FAILED,
  LOGIN, LOGIN_SUCCESS, LOGIN_FAILED,
  FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED, SET_FORGOT_PASSWORD_STATE,
  RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED,
  GET_USER_DATA, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILED,
  SEND_USER_DATA, SEND_USER_DATA_SUCCESS, SEND_USER_DATA_FAILED,
  LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILED,
  REFRESH_TOKEN, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILED,
  CHECK_AUTH, CHECK_AUTH_CHECKED,
} from '../constants/user';

import type {
  AppDispatch, AppThunk, IError, ILoginResponse, IUser,
} from '../types/export';

export interface ISetRegistration {
  type: typeof REGISTRATION;
}
export interface ISetRegistrationSuccess {
  type: typeof REGISTRATION_SUCCESS;
  payload: IUser;
}
export interface ISetRegistrationFailed {
  type: typeof REGISTRATION_FAILED;
}

export interface ISetLogin {
  type: typeof LOGIN;
}
export interface ISetLoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: IUser | null;
}
export interface ISetLoginFailed {
  type: typeof LOGIN_FAILED;
  payload: string;
}

export interface ISetForgotPassword {
  type: typeof FORGOT_PASSWORD;
}
export interface ISetForgotPasswordSuccess {
  type: typeof FORGOT_PASSWORD_SUCCESS;
}
export interface ISetForgotPasswordFailed {
  type: typeof FORGOT_PASSWORD_FAILED;
}

export interface ISetResetPassword {
  type: typeof RESET_PASSWORD;
}
export interface ISetResetPasswordSuccess {
  type: typeof RESET_PASSWORD_SUCCESS;
}
export interface ISetResetPasswordFailed {
  type: typeof RESET_PASSWORD_FAILED;
}

export interface ISetGetUserData {
  type: typeof GET_USER_DATA;
}
export interface ISetGetUserDataSuccess {
  type: typeof GET_USER_DATA_SUCCESS;
  payload: IUser;
}
export interface ISetGetUserDataFailed {
  type: typeof GET_USER_DATA_FAILED;
}

export interface ISetSendUserData {
  type: typeof SEND_USER_DATA;
}
export interface ISetSendUserDataSuccess {
  type: typeof SEND_USER_DATA_SUCCESS;
  payload: IUser;
}
export interface ISetSendUserDataFailed {
  type: typeof SEND_USER_DATA_FAILED;
}

export interface ISetLogout {
  type: typeof LOGOUT;
}
export interface ISetLogoutSuccess {
  type: typeof LOGOUT_SUCCESS;
}
export interface ISetLogoutFailed {
  type: typeof LOGOUT_FAILED;
  payload: string;
}

export interface ISetRefreshToken {
  type: typeof REFRESH_TOKEN;
}
export interface ISetRefreshTokenSuccess {
  type: typeof REFRESH_TOKEN_SUCCESS;
}
export interface ISetRefreshTokenFailed {
  type: typeof REFRESH_TOKEN_FAILED;
  payload: string;
}

export interface ISetForgotPasswordState {
  type: typeof SET_FORGOT_PASSWORD_STATE;
  payload: boolean;
}

export interface ISetCheckAuth {
  type: typeof CHECK_AUTH;
}

export interface ISetCheckAuthChecked {
  type: typeof CHECK_AUTH_CHECKED;
}

export type TUserActions =
| ISetRegistration
| ISetRegistrationSuccess
| ISetRegistrationFailed

| ISetLogin
| ISetLoginSuccess
| ISetLoginFailed

| ISetForgotPassword
| ISetForgotPasswordSuccess
| ISetForgotPasswordFailed

| ISetResetPassword
| ISetResetPasswordSuccess
| ISetResetPasswordFailed

| ISetGetUserData
| ISetGetUserDataSuccess
| ISetGetUserDataFailed

| ISetSendUserData
| ISetSendUserDataSuccess
| ISetSendUserDataFailed

| ISetLogout
| ISetLogoutSuccess
| ISetLogoutFailed

| ISetRefreshToken
| ISetRefreshTokenSuccess
| ISetRefreshTokenFailed

| ISetForgotPasswordState

| ISetCheckAuth
| ISetCheckAuthChecked;

export const setRegistration = (): ISetRegistration => ({ type: REGISTRATION });
export const setRegistrationSuccess = (userData: IUser): ISetRegistrationSuccess => ({ type: REGISTRATION_SUCCESS, payload: userData });
export const setRegistrationFailed = (): ISetRegistrationFailed => ({ type: REGISTRATION_FAILED });

export const setLogin = (): ISetLogin => ({ type: LOGIN });
export const setLoginSuccess = (userData: ILoginResponse): ISetLoginSuccess => ({ type: LOGIN_SUCCESS, payload: userData.user });
export const setLoginFailed = (err: IError): ISetLoginFailed => ({ type: LOGIN_FAILED, payload: err.message });

export const setForgotPassword = (): ISetForgotPassword => ({ type: FORGOT_PASSWORD });
export const setForgotPasswordSuccess = (): ISetForgotPasswordSuccess => ({ type: FORGOT_PASSWORD_SUCCESS });
export const setForgotPasswordFailed = (): ISetForgotPasswordFailed => ({ type: FORGOT_PASSWORD_FAILED });
export const setForgotPasswordState = (store: boolean) => ({ type: SET_FORGOT_PASSWORD_STATE, payload: store });

export const setResetPassword = (): ISetResetPassword => ({ type: RESET_PASSWORD });
export const setResetPasswordSuccess = (): ISetResetPasswordSuccess => ({ type: RESET_PASSWORD_SUCCESS });
export const setResetPasswordFailed = (): ISetResetPasswordFailed => ({ type: RESET_PASSWORD_FAILED });

export const setGetUserData = (): ISetGetUserData => ({ type: GET_USER_DATA });
export const setGetUserDataSuccess = (userData: IUser): ISetGetUserDataSuccess => ({ type: GET_USER_DATA_SUCCESS, payload: userData });
export const setGetUserDataFailed = (): ISetGetUserDataFailed => ({ type: GET_USER_DATA_FAILED });

export const setSendUserData = (): ISetSendUserData => ({ type: SEND_USER_DATA });
export const setSendUserDataSuccess = (userData: IUser): ISetSendUserDataSuccess => ({ type: SEND_USER_DATA_SUCCESS, payload: userData });
export const setSendUserDataFailed = (): ISetSendUserDataFailed => ({ type: SEND_USER_DATA_FAILED });

export const setLogout = (): ISetLogout => ({ type: LOGOUT });
export const setLogoutSuccess = (): ISetLogoutSuccess => ({ type: LOGOUT_SUCCESS });
export const setLogoutFailed = (err: IError): ISetLogoutFailed => ({ type: LOGOUT_FAILED, payload: err.message });

export const setRefreshToken = (): ISetRefreshToken => ({ type: REFRESH_TOKEN });
export const setRefreshTokenSuccess = (): ISetRefreshTokenSuccess => ({ type: REFRESH_TOKEN_SUCCESS });
export const setRefreshTokenFailed = (err: IError): ISetRefreshTokenFailed => ({ type: REFRESH_TOKEN_FAILED, payload: err.message });

export const setCheckAuth = (): ISetCheckAuth => ({ type: CHECK_AUTH });
export const setCheckAuthSuccess = (): ISetCheckAuthChecked => ({ type: CHECK_AUTH_CHECKED });

export const registration: AppThunk = (email: string, name: string, password: string) => (dispatch: AppDispatch) => {
  dispatch(setRegistration());
  api.postRegister(email, name, password)
    .then((res) => {
      console.log('registration done');
      setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
      localStorage.setItem('refreshToken', res.refreshToken);
      dispatch(setRegistrationSuccess(res.user));
    })
    .catch(() => {
      console.log('registration failed');
      dispatch(setRegistrationFailed());
    });
};

export const login: AppThunk = (email, password) => (dispatch: AppDispatch) => {
  dispatch(setLogin());
  api.postLogin(email, password)
    .then((res) => {
      console.log('log in success');
      setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
      dispatch(setLoginSuccess(res));
      localStorage.setItem('refreshToken', res.refreshToken);
    })
    .catch((err) => {
      dispatch(setLoginFailed(err));
    });
};

export const logout: AppThunk = (refreshToken) => (dispatch: AppDispatch) => {
  dispatch(setLogout());
  api.postLogout(refreshToken)
    .then(() => {
      console.log('log out,delete cookie');
      deleteCookie('accessToken');
      localStorage.removeItem('refreshToken');
      dispatch(setLogoutSuccess());
    })
    .catch((err) => {
      dispatch(setLoginFailed(err));
    });
};

const refreshToken: AppThunk = (refreshToken: string) => (dispatch: AppDispatch) => {
  dispatch(setRefreshToken());
  api.postRefreshToken(refreshToken)
    .then((res) => {
      console.log('token is refresh');
      setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
      localStorage.setItem('refreshToken', res.refreshToken);
      dispatch(setRefreshTokenSuccess());
    })
    .catch((err) => {
      console.log('token in error');
      dispatch(setRefreshTokenFailed(err));
      logout();
      return Promise.reject(err);
    });
};

export const getUserData = (accessToken: string) => (dispatch: AppDispatch) => {
  dispatch(setGetUserData());
  api.getUserData(accessToken)
    .then((res) => {
      dispatch(setGetUserDataSuccess(res.user));
    })
    .catch((err) => {
      dispatch(setGetUserDataFailed());
      if (err.message === 'jwt expired' || err.message === 'You should be authorised') {
        // При передаче имени ключа возвращается значение этого ключа.
        // @ts-ignore
        dispatch(refreshToken(localStorage.getItem('refreshToken'), 'getUserData'));
      }
    });
};

export const sendUserData = (accessToken: string | null, name: string, email: string, password: string) => (dispatch: AppDispatch) => {
  dispatch(setSendUserData());
  api.patchUserData(accessToken, name, email, password)
    .then((res) => {
      // @ts-ignore
      dispatch(setSendUserDataSuccess(res));
    })
    .catch((err) => {
      if (err.message === 'jwt expired') {
        // @ts-ignore
        dispatch(refreshToken(localStorage.getItem('refreshToken')));
      }
      dispatch(setSendUserDataFailed());
    });
};

export const forgotPassword: AppThunk = (email: string) => (dispatch: AppDispatch) => {
  dispatch(setForgotPassword());
  api.postEmail(email)
    .then(() => {
      setForgotPasswordSuccess();
    })
    .catch(() => {
      setForgotPasswordFailed();
    });
};

export const resetPassword: AppThunk = (password: string, code: string) => (dispatch: AppDispatch) => {
  dispatch(setResetPassword());
  api.postResetPassword(password, code)
    .then(() => {
      setResetPasswordSuccess();
    })
    .catch(() => {
      setResetPasswordFailed();
    });
};

export const checkAuth: AppThunk = (accessToken: string, refreshToken: string | null) => function (dispatch: AppDispatch) {
  dispatch(setCheckAuth());
  if (accessToken) {
    console.log('auth - OK');
    // @ts-ignore
    dispatch(getUserData(accessToken, refreshToken));
  }
  dispatch(setCheckAuthSuccess());
};
