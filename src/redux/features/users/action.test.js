/** @format */

import * as types from '../../../constants/types';
import { getAllProfileService } from '../../../services/profiles';
import { getUsers } from './action';

// eslint-disable-next-line no-undef
jest.mock('../../../services/profiles');

// eslint-disable-next-line no-undef
describe('getUsers', () => {
  // eslint-disable-next-line no-undef
  it('dispatches GET_ALL_USERS_LOADING and GET_ALL_USERS_SUCCESS on successful API call', async () => {
    const mockResponse = {
      data: {
        users: [
          { id: '1', name: 'User 1' },
          { id: '2', name: 'User 2' },
        ],
      },
    };

    getAllProfileService.mockResolvedValue(mockResponse);

    // eslint-disable-next-line no-undef
    const mockDispatch = jest.fn();

    const thunk = getUsers();
    // eslint-disable-next-line no-undef
    await thunk(mockDispatch, jest.fn(), undefined);

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_ALL_USERS_LOADING,
      payload: true,
    });

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_ALL_USERS_SUCCESS,
      payload: mockResponse.data.users,
    });

    // eslint-disable-next-line no-undef
    expect(getAllProfileService).toHaveBeenCalled();
  });

  // eslint-disable-next-line no-undef
  it('dispatches GET_ALL_USERS_LOADING and GET_ALL_USERS_FAILED on failed API call', async () => {
    const mockError = new Error('Failed to fetch users');

    getAllProfileService.mockRejectedValue(mockError);

    // eslint-disable-next-line no-undef
    const mockDispatch = jest.fn();

    const thunk = getUsers();
    // eslint-disable-next-line no-undef
    await thunk(mockDispatch, jest.fn(), undefined);

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_ALL_USERS_LOADING,
      payload: true,
    });

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_ALL_USERS_FAILED,
      payload: mockError,
    });

    // eslint-disable-next-line no-undef
    expect(getAllProfileService).toHaveBeenCalled();
  });
});
