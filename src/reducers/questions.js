import { ADD_QUESTION, ADD_VOTE_TO_QUESTION, RECEIVE_QUESTIONS } from '../actions/questions'

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
    return {
      ...state,
      ...action.questions
    }
    case ADD_QUESTION :
      let newQuestion = action.question
      newQuestion.id = generateUID()
      newQuestion.timestamp = Date.now()
      newQuestion.author = action.author
      newQuestion.optionOne.votes = []
      newQuestion.optionTwo.votes = []
      return {
        ...state,
        [newQuestion.id]: newQuestion
      }

    case ADD_VOTE_TO_QUESTION :
      const authedUser = action.authedUser
      let question = JSON.parse(JSON.stringify(action.question))

      if (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)) {
        return state
      }

      question[action.option].votes.push(authedUser)

      return {
        ...state,
        [question.id]: question
      }
    default :
      return state
  }
}
