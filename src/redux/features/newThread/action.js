import * as types from '../../../constants/types'
import { postThreadService } from "../../../services/threads";

export const postThread = (dataParams) => async (dispatch) => {
  try {
    dispatch({
      type: types.POST_THREADS_LOADING,
      payload: true,
    });

    const data = await postThreadService(dataParams);

    dispatch({
      type: types.POST_THREADS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.POST_THREADS_FAILED,
      payload: error,
    });
  }
};