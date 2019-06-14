import { ADD_QUESTION } from '../actions/questions'

// steal the ID functionality from _DATA.js for now,
// so we can delay read/writes to the API until later
function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export default function questions (state = {}, action) {
  switch(action.type) {
    case ADD_QUESTION :
      const id = generateUID()
      return {
        ...state,
        [id]: action.question
      }
    default :
      return state
  }
}
