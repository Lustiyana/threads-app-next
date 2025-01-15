/** @format */

import ToastReducer from './reducer';
import * as types from '../../../constants/types';

// eslint-disable-next-line no-undef
describe('ToastReducer', () => {
  const initialState = {
    isOpen: false,
    isSuccess: true,
    message: '',
  };

  // eslint-disable-next-line no-undef
  it('should return the initial state when no action is passed', () => {
    // eslint-disable-next-line no-undef
    expect(ToastReducer(undefined, {})).toEqual(initialState);
  });

  // eslint-disable-next-line no-undef
  it('should handle OPEN_TOAST', () => {
    const action = {
      type: types.OPEN_TOAST,
      payload: {
        isOpen: true,
        isSuccess: false,
        message: 'Action failed!',
      },
    };

    const expectedState = {
      isOpen: true,
      isSuccess: false,
      message: 'Action failed!',
    };

    // eslint-disable-next-line no-undef
    expect(ToastReducer(initialState, action)).toEqual(expectedState);
  });

  // eslint-disable-next-line no-undef
  it('should return the current state when an unknown action type is dispatched', () => {
    const action = {
      type: 'UNKNOWN_ACTION',
    };

    // eslint-disable-next-line no-undef
    expect(ToastReducer(initialState, action)).toEqual(initialState);
  });
});
