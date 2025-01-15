/** @format */

import UsersReducer from './reducer';
import * as types from '../../../constants/types';

// eslint-disable-next-line no-undef
describe('UsersReducer', () => {
  const initialState = {
    users: null,
    loading: false,
    error: null,
  };

  // eslint-disable-next-line no-undef
  it('should return the initial state when no action is passed', () => {
    // eslint-disable-next-line no-undef
    expect(UsersReducer(undefined, {})).toEqual(initialState);
  });

  // eslint-disable-next-line no-undef
  it('should handle GET_ALL_USERS_LOADING', () => {
    const action = {
      type: types.GET_ALL_USERS_LOADING,
      payload: true,
    };

    const expectedState = {
      ...initialState,
      loading: true,
    };

    // eslint-disable-next-line no-undef
    expect(UsersReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should handle GET_ALL_USERS_SUCCESS', () => {
    const mockUsers = [
      { id: 1, name: 'User One', email: 'user1@example.com' },
      { id: 2, name: 'User Two', email: 'user2@example.com' },
    ];
    const action = {
      type: types.GET_ALL_USERS_SUCCESS,
      payload: mockUsers,
    };

    const expectedState = {
      ...initialState,
      users: mockUsers,
      loading: false,
    };

    // eslint-disable-next-line no-undef
    expect(UsersReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should handle GET_ALL_USERS_FAILED', () => {
    const mockError = 'Failed to fetch users';
    const action = {
      type: types.GET_ALL_USERS_FAILED,
      payload: mockError,
    };

    const expectedState = {
      ...initialState,
      error: mockError,
      loading: false,
    };

    // eslint-disable-next-line no-undef
    expect(UsersReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should return the current state when an unknown action type is dispatched', () => {
    const action = {
      type: 'UNKNOWN_ACTION',
    };

    // eslint-disable-next-line no-undef
    expect(UsersReducer(initialState, action)).toEqual(initialState);
  });
});
