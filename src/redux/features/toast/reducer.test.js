/** @format */

import ToastReducer from "./reducer";
import * as types from "../../../constants/types";

describe("ToastReducer", () => {
  const initialState = {
    isOpen: false,
    isSuccess: true,
    message: "",
  };

  it("should return the initial state when no action is passed", () => {
    expect(ToastReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle OPEN_TOAST", () => {
    const action = {
      type: types.OPEN_TOAST,
      payload: {
        isOpen: true,
        isSuccess: false,
        message: "Action failed!",
      },
    };

    const expectedState = {
      isOpen: true,
      isSuccess: false,
      message: "Action failed!",
    };

    expect(ToastReducer(initialState, action)).toEqual(expectedState);
  });

  it("should return the current state when an unknown action type is dispatched", () => {
    const action = {
      type: "UNKNOWN_ACTION",
    };

    expect(ToastReducer(initialState, action)).toEqual(initialState);
  });
});
