/** @format */

import LoginReducer, { initialState } from './reducer';
import * as types from '../../../constants/types';

// eslint-disable-next-line no-undef
describe('LoginReducer', () => {
  // eslint-disable-next-line no-undef
  it('should return the initial state when no action is passed', () => {
    // eslint-disable-next-line no-undef
    expect(LoginReducer(undefined, {})).toEqual(initialState);
  });

  // eslint-disable-next-line no-undef
  it('should handle POST_LOGIN_LOADING', () => {
    const action = {
      type: types.POST_LOGIN_LOADING,
      payload: true,
    };

    const expectedState = {
      ...initialState,
      loading: true,
      error: null,
    };

    // eslint-disable-next-line no-undef
    expect(LoginReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should handle POST_LOGIN_SUCCESS', () => {
    const mockData = { userId: 1, token: 'abcd1234' };
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

    // eslint-disable-next-line no-undef
    expect(LoginReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should handle POST_LOGIN_FAILED', () => {
    const mockError = 'Invalid credentials';
    const action = {
      type: types.POST_LOGIN_FAILED,
      payload: mockError,
    };

    const expectedState = {
      ...initialState,
      loading: false,
      error: mockError,
    };

    // eslint-disable-next-line no-undef
    expect(LoginReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should handle CLEAR_LOGIN', () => {
    const stateBeforeClear = {
      data: { userId: 1, token: 'abcd1234' },
      loading: false,
      error: null,
    };

    const action = {
      type: types.CLEAR_LOGIN,
    };

    const expectedState = initialState;

    // eslint-disable-next-line no-undef
    expect(LoginReducer(stateBeforeClear, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should return the current state when an unknown action type is dispatched', () => {
    const action = {
      type: 'UNKNOWN_ACTION',
    };

    // eslint-disable-next-line no-undef
    expect(LoginReducer(initialState, action)).toEqual(initialState);
  });
});
