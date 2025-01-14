/** @format */

import * as types from "../../../constants/types";
import { postCommentService } from "../../../services/comment";
import { postCommentAction } from "./action";

jest.mock("../../../services/comment");
describe("postCommentAction", () => {
  let store;

  it("dispatches POST_COMMENT_LOADING and POST_COMMENT_SUCCESS on successful API call", async () => {
    const mockId = "123";
    const mockDataParams = "Sample Comment";
    const mockResponse = { id: "123", text: "Sample Comment" };

    postCommentService.mockResolvedValue(mockResponse);

    const mockDispatch = jest.fn();

    const thunk = postCommentAction(mockId, mockDataParams);
    await thunk(mockDispatch, jest.fn(), undefined);

    const expectedActions = [
      { type: types.POST_COMMENT_LOADING, payload: true },
      { type: types.POST_COMMENT_SUCCESS, payload: mockResponse },
    ];

    expect(mockDispatch).toHaveBeenCalledWith({
      type: `${types.POST_COMMENT_LOADING}`,
      payload: true,
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: `${types.POST_COMMENT_SUCCESS}`,
      payload: mockResponse,
    });

    expect(postCommentService).toHaveBeenCalledWith(mockId, mockDataParams);
  });

  it("dispatches POST_COMMENT_LOADING and POST_COMMENT_FAILED on failed API call", async () => {
    const mockId = "123";
    const mockDataParams = "Sample Comment";
    const mockError = new Error("Failed to post comment");

    postCommentService.mockRejectedValue(mockError);
    const mockDispatch = jest.fn();

    const thunk = postCommentAction(mockId, mockDataParams);
    await thunk(mockDispatch, jest.fn(), undefined);

    const expectedActions = [
      { type: types.POST_COMMENT_LOADING, payload: true },
      { type: types.POST_COMMENT_FAILED, payload: mockError },
    ];
    expect(mockDispatch).toHaveBeenCalledWith({
      type: `${types.POST_COMMENT_LOADING}`,
      payload: true,
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: `${types.POST_COMMENT_FAILED}`,
      payload: mockError,
    });

    expect(postCommentService).toHaveBeenCalledWith(mockId, mockDataParams);
  });
});
