/** @format */

import * as types from '../../../constants/types';
import { leaderboardsService } from '../../../services/leaderboards';
import { getLeaderboards } from './action';

// eslint-disable-next-line no-undef
jest.mock('../../../services/leaderboards');

// eslint-disable-next-line no-undef
describe('getLeaderboards', () => {
  // eslint-disable-next-line no-undef
  it('dispatches GET_LEADERBOARDS_LOADING and GET_LEADERBOARDS_SUCCESS on successful API call', async () => {
    const mockResponse = {
      data: { leaderboards: [{ id: '1', name: 'Alice', score: 100 }] },
    };

    leaderboardsService.mockResolvedValue(mockResponse);

    // eslint-disable-next-line no-undef
    const mockDispatch = jest.fn();

    const thunk = getLeaderboards();
    // eslint-disable-next-line no-undef
    await thunk(mockDispatch, jest.fn(), undefined);

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_LEADERBOARDS_LOADING,
      payload: true,
    });

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_LEADERBOARDS_SUCCESS,
      payload: mockResponse.data.leaderboards,
    });

    // eslint-disable-next-line no-undef
    expect(leaderboardsService).toHaveBeenCalled();
  });

  // eslint-disable-next-line no-undef
  it('dispatches GET_LEADERBOARDS_LOADING and GET_LEADERBOARDS_FAILED on failed API call', async () => {
    const mockError = new Error('Failed to fetch leaderboards');

    leaderboardsService.mockRejectedValue(mockError);

    // eslint-disable-next-line no-undef
    const mockDispatch = jest.fn();

    const thunk = getLeaderboards();
    // eslint-disable-next-line no-undef
    await thunk(mockDispatch, jest.fn(), undefined);

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_LEADERBOARDS_LOADING,
      payload: true,
    });

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_LEADERBOARDS_FAILED,
      payload: mockError,
    });

    // eslint-disable-next-line no-undef
    expect(leaderboardsService).toHaveBeenCalled();
  });
});
