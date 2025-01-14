/** @format */

import * as types from "../../../constants/types";
import { leaderboardsService } from "../../../services/leaderboards";
import { getLeaderboards } from "./action";

jest.mock("../../../services/leaderboards");

describe("getLeaderboards", () => {
  it("dispatches GET_LEADERBOARDS_LOADING and GET_LEADERBOARDS_SUCCESS on successful API call", async () => {
    const mockResponse = {
      data: { leaderboards: [{ id: "1", name: "Alice", score: 100 }] },
    };

    leaderboardsService.mockResolvedValue(mockResponse);

    const mockDispatch = jest.fn();

    const thunk = getLeaderboards();
    await thunk(mockDispatch, jest.fn(), undefined);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_LEADERBOARDS_LOADING,
      payload: true,
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_LEADERBOARDS_SUCCESS,
      payload: mockResponse.data.leaderboards,
    });

    expect(leaderboardsService).toHaveBeenCalled();
  });

  it("dispatches GET_LEADERBOARDS_LOADING and GET_LEADERBOARDS_FAILED on failed API call", async () => {
    const mockError = new Error("Failed to fetch leaderboards");

    leaderboardsService.mockRejectedValue(mockError);

    const mockDispatch = jest.fn();

    const thunk = getLeaderboards();
    await thunk(mockDispatch, jest.fn(), undefined);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_LEADERBOARDS_LOADING,
      payload: true,
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.GET_LEADERBOARDS_FAILED,
      payload: mockError,
    });

    expect(leaderboardsService).toHaveBeenCalled();
  });
});
