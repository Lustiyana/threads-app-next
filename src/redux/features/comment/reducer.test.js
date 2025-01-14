/** @format */

import * as types from "../../../constants/types";
import CommentReducer from "./reducer";

describe("CommentReducer", () => {
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };

  it("should return the initial state", () => {
    expect(CommentReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle POST_COMMENT_LOADING", () => {
    const action = {
      type: types.POST_COMMENT_LOADING,
      payload: true,
    };

    const expectedState = {
      ...initialState,
      loading: true,
    };

    expect(CommentReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle POST_COMMENT_SUCCESS", () => {
    const mockData = { id: 1, comment: "Test Comment" };
    const action = {
      type: types.POST_COMMENT_SUCCESS,
      payload: mockData,
    };

    const expectedState = {
      ...initialState,
      data: mockData,
      loading: false,
    };

    expect(CommentReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle POST_COMMENT_FAILED", () => {
    const mockError = "Error posting comment";
    const action = {
      type: types.POST_COMMENT_FAILED,
      payload: mockError,
    };

    const expectedState = {
      ...initialState,
      error: mockError,
      loading: false,
    };

    expect(CommentReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle unknown action type", () => {
    const action = {
      type: "UNKNOWN_ACTION",
    };

    expect(CommentReducer(initialState, action)).toEqual(initialState);
  });
});
