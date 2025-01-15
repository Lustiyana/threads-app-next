/** @format */

import LeaderboardsReducer from './reducer';
import * as types from '../../../constants/types';

// eslint-disable-next-line no-undef
describe('LeaderboardsReducer', () => {
  const initialState = {
    leaderboards: null,
    loading: false,
    error: null,
  };

  // eslint-disable-next-line no-undef
  it('should return the initial state when no action is passed', () => {
    // eslint-disable-next-line no-undef
    expect(LeaderboardsReducer(undefined, {})).toEqual(initialState);
  });

  // eslint-disable-next-line no-undef
  it('should handle GET_LEADERBOARDS_LOADING', () => {
    const action = {
      type: types.GET_LEADERBOARDS_LOADING,
      payload: true,
    };

    const expectedState = {
      ...initialState,
      loading: true,
    };

    // eslint-disable-next-line no-undef
    expect(LeaderboardsReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should handle GET_LEADERBOARDS_SUCCESS', () => {
    const mockLeaderboards = [
      { id: 1, name: 'Player 1', score: 100 },
      { id: 2, name: 'Player 2', score: 90 },
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

    // eslint-disable-next-line no-undef
    expect(LeaderboardsReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should handle GET_LEADERBOARDS_FAILED', () => {
    const mockError = 'Error fetching leaderboards';
    const action = {
      type: types.GET_LEADERBOARDS_FAILED,
      payload: mockError,
    };

    const expectedState = {
      ...initialState,
      error: mockError,
      loading: false,
    };

    // eslint-disable-next-line no-undef
    expect(LeaderboardsReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should return the current state when an unknown action type is dispatched', () => {
    const action = {
      type: 'UNKNOWN_ACTION',
    };

    // eslint-disable-next-line no-undef
    expect(LeaderboardsReducer(initialState, action)).toEqual(initialState);
  });
});
