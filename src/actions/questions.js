import { saveQuestion, saveQuestionAnswer } from '../utils/api'

export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_VOTE_TO_QUESTION = 'ADD_VOTE_TO_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function addQuestion (question, authedUser) {
  return {
    type: ADD_QUESTION,
    author: authedUser,
    question,
  }
}

export function addVoteToQuestion (question, option, authedUser) {
  return {
    type: ADD_VOTE_TO_QUESTION,
    question,
    option,
    authedUser,
  }
}

export function handleAddQuestion (question, author) {
  return (dispatch) => {
    dispatch(addQuestion(question, author))
    return saveQuestion(question)
      .catch((e) => {
        console.warn('Error in saveQuestion: ', e)
        // TODO: dispatch an action that rolls back the question save
        alert('There was an error.')
      })
  }
}

export function handleQuestionAnswer (question, option, authedUser) {
  return (dispatch) => {
    dispatch(addVoteToQuestion(question, option, authedUser))

    // a silly patch due to poor planning on my part, oops
    const args = {
      authedUser:authedUser,
      qid: question.id,
      answer: option
    }

    console.log("args are ", args)

    return saveQuestionAnswer(args)
      .catch((e) => {
        console.warn('Error in saveQuestionAnswer: ', e)
        // TODO: dispatch an action that rolls back the vote
        alert('There was an error.')
      })
  }
}
