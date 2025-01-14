/** @format */

import DetailReducer from "./reducer";
import * as types from "../../../constants/types";

describe("DetailReducer", () => {
  const initialState = {
    thread: null,
    error: null,
    loading: false,
  };

  it("should return the initial state when no action is passed", () => {
    expect(DetailReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_DETAIL_LOADING", () => {
    const action = {
      type: types.GET_DETAIL_LOADING,
      payload: true,
    };

    const expectedState = {
      ...initialState,
      loading: true,
    };

    expect(DetailReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle GET_DETAIL_SUCCESS", () => {
    const mockThread = {
      id: 1,
      title: "Test Thread",
      content: "This is a test thread",
    };
    const action = {
      type: types.GET_DETAIL_SUCCESS,
      payload: mockThread,
    };

    const expectedState = {
      ...initialState,
      thread: mockThread,
      loading: false,
    };

    expect(DetailReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle GET_DETAIL_FAILED", () => {
    const mockError = "Error fetching thread details";
    const action = {
      type: types.GET_DETAIL_FAILED,
      payload: mockError,
    };

    const expectedState = {
      ...initialState,
      error: mockError,
      loading: false,
    };

    expect(DetailReducer(initialState, action)).toEqual(expectedState);
  });

  it("should return the current state when an unknown action type is dispatched", () => {
    const action = {
      type: "UNKNOWN_ACTION",
    };

    expect(DetailReducer(initialState, action)).toEqual(initialState);
  });
});
