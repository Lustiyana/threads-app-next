import * as types from '../../../constants/types'
import { postCommentService } from '../../../services/comment'

export const postCommentAction = (id, dataParams) => async(dispatch)=>{
  try{
    dispatch({
      type: types.POST_COMMENT_LOADING,
      payload: true
    })

    const data = await postCommentService(id, dataParams)

    dispatch({
      type: types.POST_COMMENT_SUCCESS,
      payload: data
    })
  } catch(error){
    dispatch({
      type: types.POST_COMMENT_FAILED,
      payload: error
    })
  }
}