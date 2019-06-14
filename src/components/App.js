import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { addQuestion } from '../actions/questions'

class App extends Component {
  render() {
    this.props.dispatch(setAuthedUser(1))
    const question = {
      options: [
        { text: "Climb a tree", voters: [] },
        { text: "Run a race", voters: [] }
      ]
    }
    this.props.dispatch(addQuestion(question))

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
