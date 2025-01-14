/** @format */

import * as types from "../../../constants/types";
import { getDetailService } from "../../../services/threads";
import { getDetailThread } from "./action";

jest.mock("../../../services/threads");

describe("getDetailThread", () => {
  it("dispatches GET_DETAIL_LOADING and GET_DETAIL_SUCCESS on successful API call", async () => {
    const mockId = "123";
    const mockResponse = {
      data: { detailThread: { id: "123", title: "Sample Thread" } },
    };

    getDetailService.mockResolvedValue(mockResponse);

    const mockDispatch = jest.fn();

    const thunk = getDetailThread(mockId);
    await thunk(mockDispatch, jest.fn(), undefined);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_DETAIL_LOADING,
      payload: true,
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_DETAIL_SUCCESS,
      payload: mockResponse.data.detailThread,
    });

    expect(getDetailService).toHaveBeenCalledWith(mockId);
  });

  it("dispatches GET_DETAIL_LOADING and GET_DETAIL_FAILED on failed API call", async () => {
    const mockId = "123";
    const mockError = new Error("Failed to fetch thread details");

    getDetailService.mockRejectedValue(mockError);

    const mockDispatch = jest.fn();

    const thunk = getDetailThread(mockId);
    await thunk(mockDispatch, jest.fn(), undefined);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_DETAIL_LOADING,
      payload: true,
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_DETAIL_FAILED,
      payload: mockError,
    });

    expect(getDetailService).toHaveBeenCalledWith(mockId);
  });
});
