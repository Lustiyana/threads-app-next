/** @format */

import * as types from '../../../constants/types';
import { openToast } from './action';

// eslint-disable-next-line no-undef
describe('openToast', () => {
  // eslint-disable-next-line no-undef
  it('dispatches OPEN_TOAST with the provided value', () => {
    const mockValue = 'This is a test toast message.';
    // eslint-disable-next-line no-undef
    const mockDispatch = jest.fn();

    openToast(mockValue)(mockDispatch);

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.OPEN_TOAST,
      payload: mockValue,
    });
  });

  // eslint-disable-next-line no-undef
  it('handles errors gracefully', () => {
    const mockValue = undefined; // Simulate an invalid input
    // eslint-disable-next-line no-undef
    const mockDispatch = jest.fn();
    // eslint-disable-next-line no-undef
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    openToast(mockValue)(mockDispatch);

    // Ensure no action is dispatched
    // eslint-disable-next-line no-undef
    expect(mockDispatch).not.toHaveBeenCalledWith();

    // Ensure the error is logged
    // eslint-disable-next-line no-undef
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
