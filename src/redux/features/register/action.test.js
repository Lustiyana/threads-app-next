/** @format */

import * as types from '../../../constants/types';
import { registerService } from '../../../services/auth';
import { postRegister } from './action';

// eslint-disable-next-line no-undef
jest.mock('../../../services/auth');

// eslint-disable-next-line no-undef
describe('postRegister', () => {
  // eslint-disable-next-line no-undef
  it('dispatches POST_REGISTER_LOADING and POST_REGISTER_SUCCESS on successful API call', async () => {
    const mockDataParams = { username: 'testuser', password: 'password123' };
    const mockResponse = { id: '1', username: 'testuser' };

    registerService.mockResolvedValue(mockResponse);

    // eslint-disable-next-line no-undef
    const mockDispatch = jest.fn();

    const thunk = postRegister(mockDataParams);
    // eslint-disable-next-line no-undef
    await thunk(mockDispatch, jest.fn(), undefined);

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.POST_REGISTER_LOADING,
      payload: true,
    });

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.POST_REGISTER_SUCCESS,
      payload: mockResponse,
    });

    // eslint-disable-next-line no-undef
    expect(registerService).toHaveBeenCalledWith(mockDataParams);
  });

  // eslint-disable-next-line no-undef
  it('dispatches POST_REGISTER_LOADING and POST_REGISTER_FAILED on failed API call', async () => {
    const mockDataParams = { username: 'testuser', password: 'password123' };
    const mockError = new Error('Failed to register');

    registerService.mockRejectedValue(mockError);

    // eslint-disable-next-line no-undef
    const mockDispatch = jest.fn();

    const thunk = postRegister(mockDataParams);
    // eslint-disable-next-line no-undef
    await thunk(mockDispatch, jest.fn(), undefined);

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.POST_REGISTER_LOADING,
      payload: true,
    });

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.POST_REGISTER_FAILED,
      payload: mockError,
    });

    // eslint-disable-next-line no-undef
    expect(registerService).toHaveBeenCalledWith(mockDataParams);
  });
});
