/** @format */

import * as types from '../../../constants/types';
import { postCommentService } from '../../../services/comment';
import { postCommentAction } from './action';

// eslint-disable-next-line no-undef
jest.mock('../../../services/comment');
// eslint-disable-next-line no-undef
describe('postCommentAction', () => {
  // eslint-disable-next-line no-undef
  it('dispatches POST_COMMENT_LOADING and POST_COMMENT_SUCCESS on successful API call', async () => {
    const mockId = '123';
    const mockDataParams = 'Sample Comment';
    const mockResponse = { id: '123', text: 'Sample Comment' };

    postCommentService.mockResolvedValue(mockResponse);

    // eslint-disable-next-line no-undef
    const mockDispatch = jest.fn();

    const thunk = postCommentAction(mockId, mockDataParams);
    // eslint-disable-next-line no-undef
    await thunk(mockDispatch, jest.fn(), undefined);

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: `${types.POST_COMMENT_LOADING}`,
      payload: true,
    });

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: `${types.POST_COMMENT_SUCCESS}`,
      payload: mockResponse,
    });

    // eslint-disable-next-line no-undef
    expect(postCommentService).toHaveBeenCalledWith(mockId, mockDataParams);
  });

  // eslint-disable-next-line no-undef
  it('dispatches POST_COMMENT_LOADING and POST_COMMENT_FAILED on failed API call', async () => {
    const mockId = '123';
    const mockDataParams = 'Sample Comment';
    const mockError = new Error('Failed to post comment');

    postCommentService.mockRejectedValue(mockError);
    // eslint-disable-next-line no-undef
    const mockDispatch = jest.fn();

    const thunk = postCommentAction(mockId, mockDataParams);
    // eslint-disable-next-line no-undef
    await thunk(mockDispatch, jest.fn(), undefined);

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: `${types.POST_COMMENT_LOADING}`,
      payload: true,
    });

    // eslint-disable-next-line no-undef
    expect(mockDispatch).toHaveBeenCalledWith({
      type: `${types.POST_COMMENT_FAILED}`,
      payload: mockError,
    });

    // eslint-disable-next-line no-undef
    expect(postCommentService).toHaveBeenCalledWith(mockId, mockDataParams);
  });
});
