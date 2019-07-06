import { combineReducers } from 'redux'
import authedUser from './authedUser'
import questions from './questions'
import users from './users'
import loading from './loading'

export default combineReducers({
  authedUser,
  questions,
  users,
  loading
})
