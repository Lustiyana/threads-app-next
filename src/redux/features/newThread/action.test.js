/** @format */

import * as types from '../../../constants/types';
import { postThreadService } from '../../../services/threads';
import { postThread } from './action';

// eslint-disable-next-line no-undef
jest.mock('../../../services/threads');

// eslint-disable-next-line no-undef
describe('postThread', () => {
  // eslint-disable-next-line no-undef
  it('dispatches POST_THREADS_LOADING and POST_THREADS_SUCCESS on successful API call', async () => {
    const mockDataParams = { title: 'New Thread', content: 'Thread content' };
    const mockResponse = {
      id: '1',
      title: 'New Thread',
      content: 'Thread content',
    };

    postThreadService.mockResolvedValue(mockResponse);

    // eslint-disable-next-line no-undef
    const mockDispatch = jest.fn();

    const thunk = postThread(mockDataParams);
    // eslint-disable-next-line no-undef
    await thunk(mockDispatch, jest.fn(), undefined);

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.POST_THREADS_LOADING,
      payload: true,
    });

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.POST_THREADS_SUCCESS,
      payload: mockResponse,
    });

    // eslint-disable-next-line no-undef
    expect(postThreadService).toHaveBeenCalledWith(mockDataParams);
  });

  // eslint-disable-next-line no-undef
  it('dispatches POST_THREADS_LOADING and POST_THREADS_FAILED on failed API call', async () => {
    const mockDataParams = { title: 'New Thread', content: 'Thread content' };
    const mockError = new Error('Failed to post thread');

    postThreadService.mockRejectedValue(mockError);

    // eslint-disable-next-line no-undef
    const mockDispatch = jest.fn();

    const thunk = postThread(mockDataParams);
    // eslint-disable-next-line no-undef
    await thunk(mockDispatch, jest.fn(), undefined);

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.POST_THREADS_LOADING,
      payload: true,
    });

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.POST_THREADS_FAILED,
      payload: mockError,
    });

    // eslint-disable-next-line no-undef
    expect(postThreadService).toHaveBeenCalledWith(mockDataParams);
  });
});
