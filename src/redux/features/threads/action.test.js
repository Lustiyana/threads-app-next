/** @format */

import * as types from '../../../constants/types';
import { threadsService } from '../../../services/threads';
import { getThreads } from './action';

// eslint-disable-next-line no-undef
jest.mock('../../../services/threads');

// eslint-disable-next-line no-undef
describe('getThreads', () => {
  // eslint-disable-next-line no-undef
  it('dispatches GET_THREADS_LOADING and GET_THREADS_SUCCESS on successful API call', async () => {
    const mockResponse = {
      data: {
        threads: [
          { id: '1', title: 'Thread 1' },
          { id: '2', title: 'Thread 2' },
        ],
      },
    };

    threadsService.mockResolvedValue(mockResponse);

    // eslint-disable-next-line no-undef
    const mockDispatch = jest.fn();

    const thunk = getThreads();
    // eslint-disable-next-line no-undef
    await thunk(mockDispatch, jest.fn(), undefined);

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_THREADS_LOADING,
      payload: true,
    });

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_THREADS_SUCCESS,
      payload: mockResponse.data.threads,
    });

    // eslint-disable-next-line no-undef
    expect(threadsService).toHaveBeenCalled();
  });

  // eslint-disable-next-line no-undef
  it('dispatches GET_THREADS_LOADING and GET_THREADS_FAILED on failed API call', async () => {
    const mockError = new Error('Failed to fetch threads');

    threadsService.mockRejectedValue(mockError);

    // eslint-disable-next-line no-undef
    const mockDispatch = jest.fn();

    const thunk = getThreads();
    // eslint-disable-next-line no-undef
    await thunk(mockDispatch, jest.fn(), undefined);

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_THREADS_LOADING,
      payload: true,
    });

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_THREADS_FAILED,
      payload: mockError,
    });

    // eslint-disable-next-line no-undef
    expect(threadsService).toHaveBeenCalled();
  });
});
