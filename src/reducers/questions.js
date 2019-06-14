import { ADD_QUESTION, ADD_VOTE_TO_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case ADD_QUESTION :
      // hard-coded ID to allow for crude testing
      // of API-less initial state setup :)
      const id = 'xyz'
      return {
        ...state,
        [id]: action.question
      }
    // note that there is no validation yet,
    // a user can currently vote multiple times
    // for the same question
    case ADD_VOTE_TO_QUESTION :
      const question = state[action.questionId]
      question.options[action.option].push("FAKE USER ID")
      return {
        ...state,
        [action.questionId]: question
      }
    default :
      return state
  }
}
