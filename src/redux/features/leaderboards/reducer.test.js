/** @format */

import LeaderboardsReducer from "./reducer";
import * as types from "../../../constants/types";

describe("LeaderboardsReducer", () => {
  const initialState = {
    leaderboards: null,
    loading: false,
    error: null,
  };

  it("should return the initial state when no action is passed", () => {
    expect(LeaderboardsReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_LEADERBOARDS_LOADING", () => {
    const action = {
      type: types.GET_LEADERBOARDS_LOADING,
      payload: true,
    };

    const expectedState = {
      ...initialState,
      loading: true,
    };

    expect(LeaderboardsReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle GET_LEADERBOARDS_SUCCESS", () => {
    const mockLeaderboards = [
      { id: 1, name: "Player 1", score: 100 },
      { id: 2, name: "Player 2", score: 90 },
    ];

    const action = {
      type: types.GET_LEADERBOARDS_SUCCESS,
      payload: mockLeaderboards,
    };

    const expectedState = {
      ...initialState,
      leaderboards: mockLeaderboards,
      loading: false,
    };

    expect(LeaderboardsReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle GET_LEADERBOARDS_FAILED", () => {
    const mockError = "Error fetching leaderboards";
    const action = {
      type: types.GET_LEADERBOARDS_FAILED,
      payload: mockError,
    };

    const expectedState = {
      ...initialState,
      error: mockError,
      loading: false,
    };

    expect(LeaderboardsReducer(initialState, action)).toEqual(expectedState);
  });

  it("should return the current state when an unknown action type is dispatched", () => {
    const action = {
      type: "UNKNOWN_ACTION",
    };

    expect(LeaderboardsReducer(initialState, action)).toEqual(initialState);
  });
});
