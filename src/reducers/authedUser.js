import { SET_AUTHED_USER, LOG_OUT_AUTHED_USER } from '../actions/authedUser'

// default user is set in here with maximum laziness
// for testing purposes
export default function authedUser (state = 'jen', action) {
  switch (action.type) {
    case SET_AUTHED_USER :
      return action.id
    case LOG_OUT_AUTHED_USER :
      return null
    default :
      return state
  }
}
