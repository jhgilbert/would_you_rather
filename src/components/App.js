import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { addQuestion, addVoteToQuestion } from '../actions/questions'
import NewQuestion from './NewQuestion'
import QuestionList from './QuestionList'
import Question from './Question'
import Login from './Login'
import { LoremIpsum } from 'lorem-ipsum'

class App extends Component {
  state = {
    currentQuestionId: null
  }

  setCurrentQuestionId = (id) => {
    this.setState(() => ({
      currentQuestionId: id
    }))
  }

  render() {
    return (
      <div className="App">
        This is the app component.
        <Login />
        <NewQuestion />
        <hr />
        <div style={{width: '45%', padding: '10px', display: 'inline-block', verticalAlign: 'top'}} >
          <QuestionList currentQuestionId={this.state.currentQuestionId} handleQuestionSelect={this.setCurrentQuestionId} />
        </div>
        <div style={{width: '45%', padding: '10px', display: 'inline-block', verticalAlign: 'top'}} >
          <Question id={this.state.currentQuestionId}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps ( { authedUser } ) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
