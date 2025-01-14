import * as types from '../../../constants/types'


const initialState = {
  leaderboards: null,
  loading:false,
  error: null
}

export default function LeaderboardsReducer(state=initialState, action){
  switch(action.type){
    case types.GET_LEADERBOARDS_LOADING:
      return{
        ...state,
        loading: action.payload,
      }
    case types.GET_LEADERBOARDS_SUCCESS:
      return{
        ...state,
        loading: false,
        leaderboards: action.payload
      }
    case types.GET_LEADERBOARDS_FAILED:
      return{
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}