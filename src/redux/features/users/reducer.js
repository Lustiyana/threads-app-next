import * as types from '../../../constants/types'


const initialState = {
  users: null,
  loading:false,
  error: null
}

export default function UsersReducer(state=initialState, action){
  switch(action.type){
    case types.GET_ALL_USERS_LOADING:
      return{
        ...state,
        loading: action.payload,
      }
    case types.GET_ALL_USERS_SUCCESS:
      return{
        ...state,
        loading: false,
        users: action.payload
      }
    case types.GET_ALL_USERS_FAILED:
      return{
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}