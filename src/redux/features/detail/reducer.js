import * as types from '../../../constants/types'

const initialState = {
  thread: null,
  error: null,
  loading: false
}

export default function DetailReducer(state= initialState, action) {
  switch(action.type){
    case types.GET_DETAIL_LOADING:
      return{
        ...state,
        loading: action.payload
      }
    case types.GET_DETAIL_SUCCESS:
      return{
        ...state,
        thread: action.payload,
        loading: false
      }
    case types.GET_DETAIL_FAILED:
      return{
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}