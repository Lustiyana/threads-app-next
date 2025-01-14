/** @format */

import * as types from "../../../constants/types";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

function CommentReducer(state = initialState, action) {
  switch (action.type) {
    case types.POST_COMMENT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.POST_COMMENT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case types.POST_COMMENT_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default CommentReducer;
export { initialState };
