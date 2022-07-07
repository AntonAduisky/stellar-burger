/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import api from '../../api/api-config';
import { setCookie, deleteCookie } from '../../utils/cookie';

export const REGISTRATION = 'REGISTRATION';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SECCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILED = 'GET_USER_DATA_FAILED';

export const SEND_USER_DATA = 'SEND_USER_DATA';
export const SEND_USER_DATA_SUCCESS = 'SEND_USER_DATA_SUCCESS';
export const SEND_USER_DATA_FAILED = 'SEND_USER_DATA_FAILED';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';

export const SET_FORGOT_PASSWORD_STATE = 'SET_FORGOT_PASSWORD_STATE';

export const CHECK_AUTH = 'CHECK_AUTH';
export const CHECK_AUTH_CHECKED = 'CHECK_AUTH_CHECKED';

export const setRegistration = () => ({ type: REGISTRATION });
export const setRegistrationSuccess = (token) => ({ type: REGISTRATION_SUCCESS, payload: token });
export const setRegistrationFailed = () => ({ type: REGISTRATION_FAILED });

export const setLogin = () => ({ type: LOGIN });
export const setLoginSuccess = (token) => ({ type: LOGIN_SUCCESS, payload: token });
export const setLoginFailed = () => ({ type: LOGIN_FAILED });

export const setForgotPassword = () => ({ type: FORGOT_PASSWORD });
export const setForgotPasswordSuccess = () => ({ type: FORGOT_PASSWORD_SUCCESS });
export const setForgotPasswordFailed = () => ({ type: FORGOT_PASSWORD_FAILED });
export const setForgotPasswordState = (store) => ({ type: SET_FORGOT_PASSWORD_STATE, payload: store });

export const setResetPassword = () => ({ type: RESET_PASSWORD });
export const setResetPasswordSuccess = () => ({ type: RESET_PASSWORD_SUCCESS });
export const setResetPasswordFailed = () => ({ type: RESET_PASSWORD_FAILED });

export const setGetUserData = () => ({ type: GET_USER_DATA });
export const setGetUserDataSuccess = (userData) => ({ type: GET_USER_DATA_SUCCESS, payload: userData });
export const setGetUserDataFailed = () => ({ type: GET_USER_DATA_FAILED });

export const setSendUserData = () => ({ type: SEND_USER_DATA });
export const setSendUserDataSuccess = (userData) => ({ type: SEND_USER_DATA_SUCCESS, payload: userData });
export const setSendUserDataFailed = () => ({ type: SEND_USER_DATA_FAILED });

export const setLogout = () => ({ type: LOGOUT });
export const setLogoutSuccess = () => ({ type: LOGOUT_SUCCESS });
export const setLogoutFailed = () => ({ type: LOGOUT_FAILED });

export const setRefreshToken = () => ({ type: REFRESH_TOKEN });
export const setRefreshTokenSuccess = () => ({ type: REFRESH_TOKEN_SUCCESS });
export const setRefreshTokenFailed = (err) => ({ type: REFRESH_TOKEN_FAILED, err: err.message });

export const setCheckAuth = () => ({ type: CHECK_AUTH });
export const setCheckAuthSuccess = () => ({ type: CHECK_AUTH_CHECKED });

export const registration = (email, name, password) => (dispatch) => {
  dispatch(setRegistration());
  api.postRegister(email, name, password)
    .then((res) => {
      setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
      dispatch(setRegistrationSuccess(res.accessToken));
      localStorage.setItem('refreshToken', res.refreshToken);
    })
    .catch(() => {
      dispatch(setRegistrationFailed());
    });
};

export const login = (email, password) => (dispatch) => {
  dispatch(setLogin());
  api.postLogin(email, password)
    .then((res) => {
      setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
      dispatch(setLoginSuccess(res));
      // При передаче имени и значения ключа этот ключ будет добавлен в хранилище
      // или обновлено значение этого ключа, если оно уже существует.
      // ---------------------------------------------------------------------------
      // keyName - Строка, содержащая имя ключа, который вы хотите создать/обновить.
      // keyValue - Строка, содержащая значение, которое вы хотите присвоить ключу, который вы создаете/обновляете.
      localStorage.setItem('refreshToken', res.refreshToken);
    })
    .catch(() => {
      dispatch(setLoginFailed());
    });
};

const refreshToken = (refreshToken) => (dispatch) => {
  dispatch(setRefreshToken());
  api.postRefreshToken(refreshToken)
    .then((res) => {
      setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
      localStorage.setItem('refreshToken', res.refreshToken);
      dispatch(setRefreshTokenSuccess(res.accessToken));
    })
    .catch(() => {
      dispatch(setRefreshTokenFailed());
    });
};

export const getUserData = (accessToken) => (dispatch) => {
  dispatch(setGetUserData());
  api.getUserData(accessToken)
    .then((res) => {
      dispatch(setGetUserDataSuccess(res.user));
    })
    .catch((err) => {
      dispatch(setGetUserDataFailed());
      if (err.message === 'jwt expired' || err.message === 'You should be authorised') {
        // При передаче имени ключа возвращается значение этого ключа.
        dispatch(refreshToken(localStorage.getItem('refreshToken'), 'getUserData'));
      }
    });
};

export const sendUserData = (accessToken, name, email, password) => (dispatch) => {
  dispatch(setSendUserData());
  api.patchUserData(accessToken, name, email, password)
    .then((res) => {
      dispatch(setSendUserDataSuccess(res.user));
    })
    .catch((err) => {
      if (err.message === 'jwt expired') {
        dispatch(refreshToken(localStorage.getItem('refreshToken')));
      }
      dispatch(setSendUserDataFailed());
    });
};

export const forgotPassword = (email) => (dispatch) => {
  dispatch(setForgotPassword());
  api.postEmail(email)
    .then(() => {
      setForgotPasswordSuccess();
    })
    .catch(() => {
      setForgotPasswordFailed();
    });
};

export const resetPassword = (password, code) => (dispatch) => {
  dispatch(setResetPassword());
  api.postResetPassword(password, code)
    .then(() => {
      setResetPasswordSuccess();
    })
    .catch(() => {
      setResetPasswordFailed();
    });
};

export const logout = (refreshToken) => (dispatch) => {
  dispatch(setLogout());
  api.postLogout(refreshToken)
    .then(() => {
      deleteCookie('accessToken');
      localStorage.removeItem('refreshToken');
      dispatch(setLogoutSuccess());
    })
    .catch(() => {
      dispatch(setLoginFailed());
    });
};

// eslint-disable-next-line func-names
export const checkAuth = (accessToken, refreshToken) => function (dispatch) {
  dispatch(setCheckAuth());
  if (accessToken) {
    dispatch(getUserData(accessToken, refreshToken));
  }

  dispatch(setCheckAuthSuccess());
};
