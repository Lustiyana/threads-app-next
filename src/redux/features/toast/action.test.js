/** @format */

import * as types from "../../../constants/types";
import { openToast } from "./action";

describe("openToast", () => {
  it("dispatches OPEN_TOAST with the provided value", () => {
    const mockValue = "This is a test toast message.";
    const mockDispatch = jest.fn();

    openToast(mockValue)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.OPEN_TOAST,
      payload: mockValue,
    });
  });

  it("handles errors gracefully", () => {
    const mockValue = undefined; // Simulate an invalid input
    const mockDispatch = jest.fn();
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    openToast(mockValue)(mockDispatch);

    // Ensure no action is dispatched
    expect(mockDispatch).not.toHaveBeenCalledWith();

    // Ensure the error is logged
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
