import * as types from "../../../constants/types";
import { threadsService } from "../../../services/threads";

export const getThreads = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_THREADS_LOADING,
      payload: true,
    });
    const data = await threadsService();

    dispatch({
      type: types.GET_THREADS_SUCCESS,
      payload: data?.data?.threads,
    });
  } catch (error) {
    dispatch({
      type: types.GET_THREADS_FAILED,
      payload: error,
    });
  }
};


