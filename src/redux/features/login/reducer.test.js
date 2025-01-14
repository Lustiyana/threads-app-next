/** @format */

import LoginReducer, { initialState } from "./reducer";
import * as types from "../../../constants/types";

describe("LoginReducer", () => {
  it("should return the initial state when no action is passed", () => {
    expect(LoginReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle POST_LOGIN_LOADING", () => {
    const action = {
      type: types.POST_LOGIN_LOADING,
      payload: true,
    };

    const expectedState = {
      ...initialState,
      loading: true,
      error: null,
    };

    expect(LoginReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle POST_LOGIN_SUCCESS", () => {
    const mockData = { userId: 1, token: "abcd1234" };
    const action = {
      type: types.POST_LOGIN_SUCCESS,
      payload: mockData,
    };

    const expectedState = {
      ...initialState,
      loading: false,
      data: mockData,
      error: null,
    };

    expect(LoginReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle POST_LOGIN_FAILED", () => {
    const mockError = "Invalid credentials";
    const action = {
      type: types.POST_LOGIN_FAILED,
      payload: mockError,
    };

    const expectedState = {
      ...initialState,
      loading: false,
      error: mockError,
    };

    expect(LoginReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle CLEAR_LOGIN", () => {
    const stateBeforeClear = {
      data: { userId: 1, token: "abcd1234" },
      loading: false,
      error: null,
    };

    const action = {
      type: types.CLEAR_LOGIN,
    };

    const expectedState = initialState;

    expect(LoginReducer(stateBeforeClear, action)).toEqual(expectedState);
  });

  it("should return the current state when an unknown action type is dispatched", () => {
    const action = {
      type: "UNKNOWN_ACTION",
    };

    expect(LoginReducer(initialState, action)).toEqual(initialState);
  });
});
