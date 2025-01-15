/** @format */

import * as types from '../../../constants/types';

const initialState = {
  threads: [],
  loading: false,
  error: null,
};

export default function ThreadsReducer(state = initialState, action) {
  switch (action.type) {
  case types.GET_THREADS_LOADING:
    return {
      ...state,
      loading: action.payload,
    };
  case types.GET_THREADS_SUCCESS:
    return {
      ...state,
      threads: action.payload,
      loading: false,
    };
  case types.GET_THREADS_FAILED:
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  default:
    return state;
  }
}
