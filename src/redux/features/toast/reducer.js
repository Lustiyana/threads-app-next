import * as types from '../../../constants/types'

const initialState = {
  isOpen: false,
  isSuccess: true,
  message: ""
}

export default function ToastReducer(state=initialState, action) {
  switch(action.type){
    case types.OPEN_TOAST:
      return{
        isOpen: action.payload.isOpen,
        isSuccess: action.payload.isSuccess,
        message: action.payload.message
      }
    default:
      return state
  }
}