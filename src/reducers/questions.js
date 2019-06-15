import { ADD_QUESTION, ADD_VOTE_TO_QUESTION } from '../actions/questions'

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export default function questions (state = {}, action) {
  switch(action.type) {
    case ADD_QUESTION :
      const newQuestion = action.question
      newQuestion.id = generateUID()
      newQuestion.timestamp = Date.now()
      newQuestion.author = action.author
      newQuestion.optionOne.votes = []
      newQuestion.optionTwo.votes = []
      return {
        ...state,
        [newQuestion.id]: newQuestion
      }
    // note that there is no validation yet,
    // a user can currently vote multiple times
    // for the same question
    case ADD_VOTE_TO_QUESTION :
      const question = state[action.questionId]
      if (question.optionOne.text === action.option) {
        question.optionOne.votes.push('user id goes here')
      } else {
        question.optionTwo.votes.push('user id goes here')
      }
      return {
        ...state,
        [action.questionId]: question
      }
    default :
      return state
  }
}
