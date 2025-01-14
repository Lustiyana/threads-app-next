/** @format */

import * as types from "../../../constants/types";
import { postThreadService } from "../../../services/threads";
import { postThread } from "./action";

jest.mock("../../../services/threads");

describe("postThread", () => {
  it("dispatches POST_THREADS_LOADING and POST_THREADS_SUCCESS on successful API call", async () => {
    const mockDataParams = { title: "New Thread", content: "Thread content" };
    const mockResponse = {
      id: "1",
      title: "New Thread",
      content: "Thread content",
    };

    postThreadService.mockResolvedValue(mockResponse);

    const mockDispatch = jest.fn();

    const thunk = postThread(mockDataParams);
    await thunk(mockDispatch, jest.fn(), undefined);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.POST_THREADS_LOADING,
      payload: true,
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.POST_THREADS_SUCCESS,
      payload: mockResponse,
    });

    expect(postThreadService).toHaveBeenCalledWith(mockDataParams);
  });

  it("dispatches POST_THREADS_LOADING and POST_THREADS_FAILED on failed API call", async () => {
    const mockDataParams = { title: "New Thread", content: "Thread content" };
    const mockError = new Error("Failed to post thread");

    postThreadService.mockRejectedValue(mockError);

    const mockDispatch = jest.fn();

    const thunk = postThread(mockDataParams);
    await thunk(mockDispatch, jest.fn(), undefined);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.POST_THREADS_LOADING,
      payload: true,
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.POST_THREADS_FAILED,
      payload: mockError,
    });

    expect(postThreadService).toHaveBeenCalledWith(mockDataParams);
  });
});
