import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { initializeLoading, completeLoading } from '../actions/loading'
// import { setAuthedUser } from '../actions/authedUser'

// const AUTHED_USER = "sarahedo"

export function handleInitialData () {
  return (dispatch) => {
    dispatch(initializeLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(completeLoading())
        // dispatch(setAuthedUser(AUTHED_USER))
      })
  }
}
