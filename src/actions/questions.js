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

// this will do fancier things later,
// but for now, it's just a wrapper
// for the relevant action creator
export function handleAddQuestion (question, author) {
  return addQuestion(question, author)
}
