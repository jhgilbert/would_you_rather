export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_VOTE_TO_QUESTION = 'ADD_VOTE_TO_QUESTION'

export function addQuestion (question, authedUser) {
  return {
    type: ADD_QUESTION,
    author: authedUser,
    question,
  }
}

export function addVoteToQuestion (questionId, option) {
  return {
    type: ADD_VOTE_TO_QUESTION,
    questionId: questionId,
    option: option
  }
}

// this will do fancier things later,
// but for now, it's just a wrapper
// for the relevant action creator
export function handleAddQuestion (question, author) {
  return addQuestion(question, author)
}
