/** @format */

import * as types from "../../../constants/types";
import { threadsService } from "../../../services/threads";
import { getThreads } from "./action";

jest.mock("../../../services/threads");

describe("getThreads", () => {
  it("dispatches GET_THREADS_LOADING and GET_THREADS_SUCCESS on successful API call", async () => {
    const mockResponse = {
      data: {
        threads: [
          { id: "1", title: "Thread 1" },
          { id: "2", title: "Thread 2" },
        ],
      },
    };

    threadsService.mockResolvedValue(mockResponse);

    const mockDispatch = jest.fn();

    const thunk = getThreads();
    await thunk(mockDispatch, jest.fn(), undefined);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_THREADS_LOADING,
      payload: true,
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_THREADS_SUCCESS,
      payload: mockResponse.data.threads,
    });

    expect(threadsService).toHaveBeenCalled();
  });

  it("dispatches GET_THREADS_LOADING and GET_THREADS_FAILED on failed API call", async () => {
    const mockError = new Error("Failed to fetch threads");

    threadsService.mockRejectedValue(mockError);

    const mockDispatch = jest.fn();

    const thunk = getThreads();
    await thunk(mockDispatch, jest.fn(), undefined);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_THREADS_LOADING,
      payload: true,
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_THREADS_FAILED,
      payload: mockError,
    });

    expect(threadsService).toHaveBeenCalled();
  });
});
