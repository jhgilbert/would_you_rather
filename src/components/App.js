import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { addQuestion, addVoteToQuestion } from '../actions/questions'
import NewQuestion from './NewQuestion'
import QuestionList from './QuestionList'
import Login from './Login'
import { LoremIpsum } from 'lorem-ipsum'

class App extends Component {
  // temporary function for testing purposes
  populateQuestions() {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4
      },
      wordsPerSentence: {
        max: 8,
        min: 4
      }
    });

    for (var i = 0; i < 10; i++) {
      const question = {
        optionOne: { text: lorem.generateSentences(1) },
        optionTwo: { text: lorem.generateSentences(1) },
      }

      this.props.dispatch(addQuestion(question, this.props.authedUser))
    }
  }

  render() {
    // make a bunch of fake questions!!!! muahaahaa
    this.populateQuestions()

    return (
      <div className="App">
        This is the app component.
        <Login />
        <NewQuestion />
        <hr />
        <QuestionList />
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
