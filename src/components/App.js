import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { addQuestion, addVoteToQuestion } from '../actions/questions'
import NewQuestion from './NewQuestion'

class App extends Component {
  render() {
    this.props.dispatch(setAuthedUser(1))

    return (
      <div className="App">
        This is the app component.
        <NewQuestion />
      </div>
    )
  }
}

function mapStateToProps () {
  return {}
}

export default connect(mapStateToProps)(App);
