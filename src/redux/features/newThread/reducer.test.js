/** @format */

import NewThreadReducer from './reducer';
import * as types from '../../../constants/types';

// eslint-disable-next-line no-undef
describe('NewThreadReducer', () => {
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };

  // eslint-disable-next-line no-undef
  it('should return the initial state when no action is passed', () => {
    // eslint-disable-next-line no-undef
    expect(NewThreadReducer(undefined, {})).toEqual(initialState);
  });

  // eslint-disable-next-line no-undef
  it('should handle POST_THREADS_LOADING', () => {
    const action = {
      type: types.POST_THREADS_LOADING,
      payload: true,
    };

    const expectedState = {
      ...initialState,
      loading: true,
    };

    // eslint-disable-next-line no-undef
    expect(NewThreadReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should handle POST_THREADS_SUCCESS', () => {
    const mockThreadData = {
      id: 1,
      title: 'New Thread',
      content: 'Thread content',
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

    // eslint-disable-next-line no-undef
    expect(NewThreadReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should handle POST_THREADS_FAILED', () => {
    const mockError = 'Error creating thread';
    const action = {
      type: types.POST_THREADS_FAILED,
      payload: mockError,
    };

    const expectedState = {
      ...initialState,
      loading: false,
      error: mockError,
    };

    // eslint-disable-next-line no-undef
    expect(NewThreadReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should return the current state when an unknown action type is dispatched', () => {
    const action = {
      type: 'UNKNOWN_ACTION',
    };

    // eslint-disable-next-line no-undef
    expect(NewThreadReducer(initialState, action)).toEqual(initialState);
  });
});
