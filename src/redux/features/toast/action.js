/** @format */

import * as types from "../../../constants/types";

export const openToast = (value) => (dispatch) => {
  try {
    if (!value) {
      throw new Error("Value is required for openToast");
    }
    dispatch({
      type: types.OPEN_TOAST,
      payload: value,
    });
  } catch (error) {
    console.log(error);
  }
};
