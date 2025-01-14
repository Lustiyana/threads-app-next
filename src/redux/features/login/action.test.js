/** @format */

import * as types from "../../../constants/types";
import { loginService } from "../../../services/auth";
import { postLogin, clearLogin, setToken } from "./action";

jest.mock("../../../services/auth");

describe("Authentication Actions", () => {
  describe("postLogin", () => {
    it("dispatches POST_LOGIN_LOADING and POST_LOGIN_SUCCESS on successful API call", async () => {
      const mockDataParams = { username: "test", password: "1234" };
      const mockResponse = { token: "abcd1234" };

      loginService.mockResolvedValue(mockResponse);

      const mockDispatch = jest.fn();

      const thunk = postLogin(mockDataParams);
      await thunk(mockDispatch, jest.fn(), undefined);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: types.POST_LOGIN_LOADING,
        payload: true,
      });

      expect(mockDispatch).toHaveBeenCalledWith({
        type: types.POST_LOGIN_SUCCESS,
        payload: mockResponse,
      });

      expect(loginService).toHaveBeenCalledWith(mockDataParams);
    });

    it("dispatches POST_LOGIN_LOADING and POST_LOGIN_FAILED on failed API call", async () => {
      const mockDataParams = { username: "test", password: "1234" };
      const mockError = new Error("Login failed");

      loginService.mockRejectedValue(mockError);

      const mockDispatch = jest.fn();

      const thunk = postLogin(mockDataParams);
      await thunk(mockDispatch, jest.fn(), undefined);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: types.POST_LOGIN_LOADING,
        payload: true,
      });

      expect(mockDispatch).toHaveBeenCalledWith({
        type: types.POST_LOGIN_FAILED,
        payload: mockError,
      });

      expect(loginService).toHaveBeenCalledWith(mockDataParams);
    });
  });

  describe("clearLogin", () => {
    it("dispatches CLEAR_LOGIN", () => {
      const mockDispatch = jest.fn();

      clearLogin()(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: types.CLEAR_LOGIN,
      });
    });
  });

  describe("setToken", () => {
    it("dispatches SET_TOKEN with the provided token", () => {
      const mockToken = "abcd1234";
      const mockDispatch = jest.fn();

      setToken(mockToken)(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: types.SET_TOKEN,
        payload: mockToken,
      });
    });
  });
});
