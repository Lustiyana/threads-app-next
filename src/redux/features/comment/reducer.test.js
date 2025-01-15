/** @format */

import * as types from '../../../constants/types';
import CommentReducer from './reducer';

// eslint-disable-next-line no-undef
describe('CommentReducer', () => {
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };

  // eslint-disable-next-line no-undef
  it('should return the initial state', () => {
    // eslint-disable-next-line no-undef
    expect(CommentReducer(undefined, {})).toEqual(initialState);
  });

  // eslint-disable-next-line no-undef
  it('should handle POST_COMMENT_LOADING', () => {
    const action = {
      type: types.POST_COMMENT_LOADING,
      payload: true,
    };

    const expectedState = {
      ...initialState,
      loading: true,
    };

    // eslint-disable-next-line no-undef
    expect(CommentReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should handle POST_COMMENT_SUCCESS', () => {
    const mockData = { id: 1, comment: 'Test Comment' };
    const action = {
      type: types.POST_COMMENT_SUCCESS,
      payload: mockData,
    };

    const expectedState = {
      ...initialState,
      data: mockData,
      loading: false,
    };

    // eslint-disable-next-line no-undef
    expect(CommentReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should handle POST_COMMENT_FAILED', () => {
    const mockError = 'Error posting comment';
    const action = {
      type: types.POST_COMMENT_FAILED,
      payload: mockError,
    };

    const expectedState = {
      ...initialState,
      error: mockError,
      loading: false,
    };

    // eslint-disable-next-line no-undef
    expect(CommentReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should handle unknown action type', () => {
    const action = {
      type: 'UNKNOWN_ACTION',
    };

    // eslint-disable-next-line no-undef
    expect(CommentReducer(initialState, action)).toEqual(initialState);
  });
});
