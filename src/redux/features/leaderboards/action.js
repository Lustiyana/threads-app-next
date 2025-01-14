import * as types from '../../../constants/types'
import { leaderboardsService } from '../../../services/leaderboards'

export const getLeaderboards = () => async(dispatch)=>{
  try{
    dispatch({
      type: types.GET_LEADERBOARDS_LOADING,
      payload: true
    })

    const data = await leaderboardsService()

    dispatch({
      type: types.GET_LEADERBOARDS_SUCCESS,
      payload: data.data.leaderboards
    })
  } catch(error){
    dispatch({
      type: types.GET_LEADERBOARDS_FAILED,
      payload: error
    })
  }
}