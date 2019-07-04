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

export function addVoteToQuestion (question, optionText, authedUser) {
  return {
    type: ADD_VOTE_TO_QUESTION,
    question,
    optionText,
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

export function handleQuestionAnswer (question, optionText, authedUser) {
  return (dispatch) => {
    dispatch(addVoteToQuestion(question, optionText, authedUser))

    // a silly patch due to poor planning on my part, oops
    const args = {
      authedUser:authedUser,
      qid: question['id'],
      answer: optionText
    }

    return saveQuestionAnswer(args)
      .catch((e) => {
        console.warn('Error in saveQuestionAnswer: ', e)
        // TODO: dispatch an action that rolls back the vote
        alert('There was an error.')
      })
  }
}
