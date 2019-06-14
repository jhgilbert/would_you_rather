import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { addQuestion, addVoteToQuestion } from '../actions/questions'

class App extends Component {
  render() {
    this.props.dispatch(setAuthedUser(1))
    const question = {
      options: {
        "Climb a tree": [],
        "Run a race": []
      }
    }
    this.props.dispatch(addQuestion(question))
    this.props.dispatch(addVoteToQuestion('xyz', 'Climb a tree'))
    this.props.dispatch(addVoteToQuestion('xyz', 'Climb a tree'))
    this.props.dispatch(addVoteToQuestion('xyz', 'Climb a tree'))
    this.props.dispatch(addVoteToQuestion('xyz', 'Run a race'))

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
