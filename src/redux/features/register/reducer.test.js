/** @format */

import RegisterReducer from './reducer';
import * as types from '../../../constants/types';

// eslint-disable-next-line no-undef
describe('RegisterReducer', () => {
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };

  // eslint-disable-next-line no-undef
  it('should return the initial state when no action is passed', () => {
    // eslint-disable-next-line no-undef
    expect(RegisterReducer(undefined, {})).toEqual(initialState);
  });

  // eslint-disable-next-line no-undef
  it('should handle POST_REGISTER_LOADING', () => {
    const action = {
      type: types.POST_REGISTER_LOADING,
      payload: true,
    };

    const expectedState = {
      ...initialState,
      loading: true,
      error: null,
    };

    // eslint-disable-next-line no-undef
    expect(RegisterReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should handle POST_REGISTER_SUCCESS', () => {
    const mockData = { userId: 1, token: 'abcd1234' };
    const action = {
      type: types.POST_REGISTER_SUCCESS,
      payload: mockData,
    };

    const expectedState = {
      ...initialState,
      loading: false,
      data: mockData,
      error: null,
    };

    // eslint-disable-next-line no-undef
    expect(RegisterReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should handle POST_REGISTER_FAILED', () => {
    const mockError = 'Registration failed';
    const action = {
      type: types.POST_REGISTER_FAILED,
      payload: mockError,
    };

    const expectedState = {
      ...initialState,
      loading: false,
      error: mockError,
    };

    // eslint-disable-next-line no-undef
    expect(RegisterReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should handle CLEAR_REGISTER', () => {
    const stateBeforeClear = {
      data: { userId: 1, token: 'abcd1234' },
      loading: false,
      error: null,
    };

    const action = {
      type: types.CLEAR_REGISTER,
    };

    const expectedState = initialState;

    // eslint-disable-next-line no-undef
    expect(RegisterReducer(stateBeforeClear, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should return the current state when an unknown action type is dispatched', () => {
    const action = {
      type: 'UNKNOWN_ACTION',
    };

    // eslint-disable-next-line no-undef
    expect(RegisterReducer(initialState, action)).toEqual(initialState);
  });
});
