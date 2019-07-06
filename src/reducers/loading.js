import { INITIALIZE_LOADING, COMPLETE_LOADING } from '../actions/loading'

export default function loading (state = false, action) {
  switch (action.type) {
    case INITIALIZE_LOADING :
      return true
    case COMPLETE_LOADING :
      return false
    default :
      return state
  }
}
