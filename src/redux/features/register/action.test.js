/** @format */

import * as types from "../../../constants/types";
import { registerService } from "../../../services/auth";
import { postRegister } from "./action";

jest.mock("../../../services/auth");

describe("postRegister", () => {
  it("dispatches POST_REGISTER_LOADING and POST_REGISTER_SUCCESS on successful API call", async () => {
    const mockDataParams = { username: "testuser", password: "password123" };
    const mockResponse = { id: "1", username: "testuser" };

    registerService.mockResolvedValue(mockResponse);

    const mockDispatch = jest.fn();

    const thunk = postRegister(mockDataParams);
    await thunk(mockDispatch, jest.fn(), undefined);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.POST_REGISTER_LOADING,
      payload: true,
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.POST_REGISTER_SUCCESS,
      payload: mockResponse,
    });

    expect(registerService).toHaveBeenCalledWith(mockDataParams);
  });

  it("dispatches POST_REGISTER_LOADING and POST_REGISTER_FAILED on failed API call", async () => {
    const mockDataParams = { username: "testuser", password: "password123" };
    const mockError = new Error("Failed to register");

    registerService.mockRejectedValue(mockError);

    const mockDispatch = jest.fn();

    const thunk = postRegister(mockDataParams);
    await thunk(mockDispatch, jest.fn(), undefined);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.POST_REGISTER_LOADING,
      payload: true,
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.POST_REGISTER_FAILED,
      payload: mockError,
    });

    expect(registerService).toHaveBeenCalledWith(mockDataParams);
  });
});
