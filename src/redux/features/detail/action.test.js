/** @format */

import * as types from '../../../constants/types';
import { getDetailService } from '../../../services/threads';
import { getDetailThread } from './action';

// eslint-disable-next-line no-undef
jest.mock('../../../services/threads');

// eslint-disable-next-line no-undef
describe('getDetailThread', () => {
  // eslint-disable-next-line no-undef
  it('dispatches GET_DETAIL_LOADING and GET_DETAIL_SUCCESS on successful API call', async () => {
    const mockId = '123';
    const mockResponse = {
      data: { detailThread: { id: '123', title: 'Sample Thread' } },
    };

    getDetailService.mockResolvedValue(mockResponse);

    // eslint-disable-next-line no-undef
    const mockDispatch = jest.fn();

    const thunk = getDetailThread(mockId);
    // eslint-disable-next-line no-undef
    await thunk(mockDispatch, jest.fn(), undefined);

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_DETAIL_LOADING,
      payload: true,
    });

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_DETAIL_SUCCESS,
      payload: mockResponse.data.detailThread,
    });

    // eslint-disable-next-line no-undef
    expect(getDetailService).toHaveBeenCalledWith(mockId);
  });

  // eslint-disable-next-line no-undef
  it('dispatches GET_DETAIL_LOADING and GET_DETAIL_FAILED on failed API call', async () => {
    const mockId = '123';
    const mockError = new Error('Failed to fetch thread details');

    getDetailService.mockRejectedValue(mockError);

    // eslint-disable-next-line no-undef
    const mockDispatch = jest.fn();

    const thunk = getDetailThread(mockId);
    // eslint-disable-next-line no-undef
    await thunk(mockDispatch, jest.fn(), undefined);

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_DETAIL_LOADING,
      payload: true,
    });

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_DETAIL_FAILED,
      payload: mockError,
    });

    // eslint-disable-next-line no-undef
    expect(getDetailService).toHaveBeenCalledWith(mockId);
  });
});
