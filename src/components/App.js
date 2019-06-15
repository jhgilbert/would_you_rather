import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { addQuestion, addVoteToQuestion } from '../actions/questions'

class App extends Component {
  render() {
    this.props.dispatch(setAuthedUser(1))
    const question = {
        author: 'sarahedo',
        timestamp: 1467166872634,
        optionOne: {
          votes: ['sarahedo'],
          text: 'have horrible short term memory',
        },
        optionTwo: {
          votes: [],
          text: 'have horrible long term memory'
        }
      }
    this.props.dispatch(addQuestion(question))
    this.props.dispatch(addVoteToQuestion('xyz', 'have horrible short term memory'))
    this.props.dispatch(addVoteToQuestion('xyz', 'have horrible short term memory'))
    this.props.dispatch(addVoteToQuestion('xyz', 'have horrible short term memory'))
    this.props.dispatch(addVoteToQuestion('xyz', 'have horrible long term memory'))

    return (
      <div className="App">
        This is the app component.
      </div>
    )
  }
}

function mapStateToProps () {
  return {}
}

export default connect(mapStateToProps)(App);
