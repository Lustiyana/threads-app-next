import * as types from "../../../constants/types"

const initialState = {
  data: null,
  loading: false,
  error: null
}

export default function RegisterReducer(state=initialState, action){
  switch(action.type){
    case types.POST_REGISTER_LOADING:
      return{
        ...state,
        loading: action.payload,
        error: null
      }
    case types.POST_REGISTER_SUCCESS:
      return{
        ...state,
        loading: false,
        data: action.payload,
        error: null
      }
    case types.POST_REGISTER_FAILED:
      return{
        ...state,
        loading: false,
        error: action.payload
      }
    case types.CLEAR_REGISTER:
      return initialState
    default:
      return state
  }
}