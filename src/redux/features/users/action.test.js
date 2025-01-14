/** @format */

import * as types from "../../../constants/types";
import { getAllProfileService } from "../../../services/profiles";
import { getUsers } from "./action";

jest.mock("../../../services/profiles");

describe("getUsers", () => {
  it("dispatches GET_ALL_USERS_LOADING and GET_ALL_USERS_SUCCESS on successful API call", async () => {
    const mockResponse = {
      data: {
        users: [
          { id: "1", name: "User 1" },
          { id: "2", name: "User 2" },
        ],
      },
    };

    getAllProfileService.mockResolvedValue(mockResponse);

    const mockDispatch = jest.fn();

    const thunk = getUsers();
    await thunk(mockDispatch, jest.fn(), undefined);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_ALL_USERS_LOADING,
      payload: true,
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_ALL_USERS_SUCCESS,
      payload: mockResponse.data.users,
    });

    expect(getAllProfileService).toHaveBeenCalled();
  });

  it("dispatches GET_ALL_USERS_LOADING and GET_ALL_USERS_FAILED on failed API call", async () => {
    const mockError = new Error("Failed to fetch users");

    getAllProfileService.mockRejectedValue(mockError);

    const mockDispatch = jest.fn();

    const thunk = getUsers();
    await thunk(mockDispatch, jest.fn(), undefined);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_ALL_USERS_LOADING,
      payload: true,
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_ALL_USERS_FAILED,
      payload: mockError,
    });

    expect(getAllProfileService).toHaveBeenCalled();
  });
});
