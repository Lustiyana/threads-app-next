/** @format */

import NewThreadReducer from "./reducer";
import * as types from "../../../constants/types";

describe("NewThreadReducer", () => {
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };

  it("should return the initial state when no action is passed", () => {
    expect(NewThreadReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle POST_THREADS_LOADING", () => {
    const action = {
      type: types.POST_THREADS_LOADING,
      payload: true,
    };

    const expectedState = {
      ...initialState,
      loading: true,
    };

    expect(NewThreadReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle POST_THREADS_SUCCESS", () => {
    const mockThreadData = {
      id: 1,
      title: "New Thread",
      content: "Thread content",
    };
    const action = {
      type: types.POST_THREADS_SUCCESS,
      payload: mockThreadData,
    };

    const expectedState = {
      ...initialState,
      loading: false,
      data: mockThreadData,
    };

    expect(NewThreadReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle POST_THREADS_FAILED", () => {
    const mockError = "Error creating thread";
    const action = {
      type: types.POST_THREADS_FAILED,
      payload: mockError,
    };

    const expectedState = {
      ...initialState,
      loading: false,
      error: mockError,
    };

    expect(NewThreadReducer(initialState, action)).toEqual(expectedState);
  });

  it("should return the current state when an unknown action type is dispatched", () => {
    const action = {
      type: "UNKNOWN_ACTION",
    };

    expect(NewThreadReducer(initialState, action)).toEqual(initialState);
  });
});
