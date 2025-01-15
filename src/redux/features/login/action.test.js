/** @format */

import * as types from '../../../constants/types';
import { loginService } from '../../../services/auth';
import { postLogin, clearLogin, setToken } from './action';

// eslint-disable-next-line no-undef
jest.mock('../../../services/auth');

// eslint-disable-next-line no-undef
describe('Authentication Actions', () => {
  // eslint-disable-next-line no-undef
  describe('postLogin', () => {
    // eslint-disable-next-line no-undef
    it('dispatches POST_LOGIN_LOADING and POST_LOGIN_SUCCESS on successful API call', async () => {
      const mockDataParams = { username: 'test', password: '1234' };
      const mockResponse = { token: 'abcd1234' };

      loginService.mockResolvedValue(mockResponse);

      // eslint-disable-next-line no-undef
      const mockDispatch = jest.fn();

      const thunk = postLogin(mockDataParams);
      // eslint-disable-next-line no-undef
      await thunk(mockDispatch, jest.fn(), undefined);

      // eslint-disable-next-line no-undef
      expect(mockDispatch).toHaveBeenCalledWith({
        type: types.POST_LOGIN_LOADING,
        payload: true,
      });

      // eslint-disable-next-line no-undef
      expect(mockDispatch).toHaveBeenCalledWith({
        type: types.POST_LOGIN_SUCCESS,
        payload: mockResponse,
      });

      // eslint-disable-next-line no-undef
      expect(loginService).toHaveBeenCalledWith(mockDataParams);
    });

    // eslint-disable-next-line no-undef
    it('dispatches POST_LOGIN_LOADING and POST_LOGIN_FAILED on failed API call', async () => {
      const mockDataParams = { username: 'test', password: '1234' };
      const mockError = new Error('Login failed');

      loginService.mockRejectedValue(mockError);

      // eslint-disable-next-line no-undef
      const mockDispatch = jest.fn();

      const thunk = postLogin(mockDataParams);
      // eslint-disable-next-line no-undef
      await thunk(mockDispatch, jest.fn(), undefined);

      // eslint-disable-next-line no-undef
      expect(mockDispatch).toHaveBeenCalledWith({
        type: types.POST_LOGIN_LOADING,
        payload: true,
      });

      // eslint-disable-next-line no-undef
      expect(mockDispatch).toHaveBeenCalledWith({
        type: types.POST_LOGIN_FAILED,
        payload: mockError,
      });

      // eslint-disable-next-line no-undef
      expect(loginService).toHaveBeenCalledWith(mockDataParams);
    });
  });

  // eslint-disable-next-line no-undef
  describe('clearLogin', () => {
    // eslint-disable-next-line no-undef
    it('dispatches CLEAR_LOGIN', () => {
      // eslint-disable-next-line no-undef
      const mockDispatch = jest.fn();

      clearLogin()(mockDispatch);

      // eslint-disable-next-line no-undef
      expect(mockDispatch).toHaveBeenCalledWith({
        type: types.CLEAR_LOGIN,
      });
    });
  });

  // eslint-disable-next-line no-undef
  describe('setToken', () => {
    // eslint-disable-next-line no-undef
    it('dispatches SET_TOKEN with the provided token', () => {
      const mockToken = 'abcd1234';
      // eslint-disable-next-line no-undef
      const mockDispatch = jest.fn();

      setToken(mockToken)(mockDispatch);

      // eslint-disable-next-line no-undef
      expect(mockDispatch).toHaveBeenCalledWith({
        type: types.SET_TOKEN,
        payload: mockToken,
      });
    });
  });
});
