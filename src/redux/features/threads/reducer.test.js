/** @format */

import ThreadsReducer from "./reducer";
import * as types from "../../../constants/types";

describe("ThreadsReducer", () => {
  const initialState = {
    threads: [],
    loading: false,
    error: null,
  };

  it("should return the initial state when no action is passed", () => {
    expect(ThreadsReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_THREADS_LOADING", () => {
    const action = {
      type: types.GET_THREADS_LOADING,
      payload: true,
    };

    const expectedState = {
      ...initialState,
      loading: true,
    };

    expect(ThreadsReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle GET_THREADS_SUCCESS", () => {
    const mockThreads = [
      { id: 1, title: "First Thread", content: "Content of first thread" },
      { id: 2, title: "Second Thread", content: "Content of second thread" },
    ];
    const action = {
      type: types.GET_THREADS_SUCCESS,
      payload: mockThreads,
    };

    const expectedState = {
      ...initialState,
      threads: mockThreads,
      loading: false,
    };

    expect(ThreadsReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle GET_THREADS_FAILED", () => {
    const mockError = "Failed to fetch threads";
    const action = {
      type: types.GET_THREADS_FAILED,
      payload: mockError,
    };

    const expectedState = {
      ...initialState,
      error: mockError,
      loading: false,
    };

    expect(ThreadsReducer(initialState, action)).toEqual(expectedState);
  });

  it("should return the current state when an unknown action type is dispatched", () => {
    const action = {
      type: "UNKNOWN_ACTION",
    };

    expect(ThreadsReducer(initialState, action)).toEqual(initialState);
  });
});
