import * as types from "../../../constants/types"
import { registerService } from "../../../services/auth"

export const postRegister = (dataParams) => async(dispatch)=>{
  try{
    dispatch({
      type: types.POST_REGISTER_LOADING,
      payload: true
    })
    const data = await registerService(dataParams)
    dispatch({
      type: types.POST_REGISTER_SUCCESS,
      payload: data
    })
  } catch(error){
    dispatch({
      type: types.POST_REGISTER_FAILED,
      payload: error
    })
  }
}