/** @format */

import * as types from "../../../constants/types";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function NewThreadReducer(state = initialState, action) {
  switch (action.type) {
    case types.POST_THREADS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.POST_THREADS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.POST_THREADS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
