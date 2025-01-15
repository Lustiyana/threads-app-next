/** @format */

import * as types from '../../../constants/types';

export const initialState = {
  data: null,
  loading: false,
  error: null,
  token: '',
};

export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
  case types.POST_LOGIN_LOADING:
    return {
      ...state,
      loading: action.payload,
      error: null,
    };
  case types.POST_LOGIN_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload,
      error: null,
    };
  case types.POST_LOGIN_FAILED:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  case types.SET_TOKEN:
    return {
      ...state,
      token: action.payload,
    };
  case types.CLEAR_LOGIN:
    return initialState;
  default:
    return state;
  }
}
