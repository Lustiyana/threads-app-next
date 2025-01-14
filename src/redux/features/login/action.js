/** @format */

import * as types from "../../../constants/types";
import { loginService } from "../../../services/auth";

export const postLogin = (dataParams) => async (dispatch) => {
  try {
    dispatch({
      type: types.POST_LOGIN_LOADING,
      payload: true,
    });
    const data = await loginService(dataParams);

    dispatch({
      type: types.POST_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.POST_LOGIN_FAILED,
      payload: error,
    });
  }
};

export const clearLogin = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_LOGIN,
  });
};

export const setToken = (token) => (dispatch) => {
  dispatch({
    type: types.SET_TOKEN,
    payload: token,
  });
};
