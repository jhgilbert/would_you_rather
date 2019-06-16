import { ADD_QUESTION, ADD_VOTE_TO_QUESTION } from '../actions/questions'

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export default function questions (state = {}, action) {
  if (Object.keys(state).length === 0) {
    console.log("Populating initial state of fake questions ...")
    state = {
      'testQuestion1': {
        id: 'testQuestion1',
        optionOne: { text: 'run a race', votes: [] },
        optionTwo: { text: 'climb a tree', votes: [] },
        author: 'billy_bob',
        timestamp: Date.now(),
      },
      'testQuestion2': {
        id: 'testQuestion2',
        optionOne: { text: 'go to a party', votes: [] },
        optionTwo: { text: 'stay home all night', votes: [] },
        author: 'jane_doe',
        timestamp: Date.now(),
      }
    }
  }

  switch(action.type) {
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
    // note that there is no validation yet,
    // a user can currently vote multiple times
    // for the same question
    case ADD_VOTE_TO_QUESTION :
      // there's a nicer way to avoid shallow copies, surely:
      let question = JSON.parse(JSON.stringify(action.question))
      if (question.optionOne.text === action.optionText) {
        question.optionOne.votes.push(action.authedUser)
      } else {
        question.optionTwo.votes.push(action.authedUser)
      }
      return {
        ...state,
        [question.id]: question
      }
    default :
      return state
  }
}
