import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addVoteToQuestion } from '../actions/questions'


class Question extends Component {
  handleVote = (optionText) => {
    this.props.dispatch(addVoteToQuestion(this.props.question, optionText, this.props.authedUser))
  }

  render() {
    const { question } = this.props

    if (question) {
      return (
        <div>
          <p>Question details: </p>
          {/* what follows has developed major code smell at this point, oops */}
          <div>{JSON.stringify(question)}</div>
          <div>
            <p>Option 1 ({question.optionOne.votes.length} votes): <br />
            {question.optionOne.text}
            </p>
            <button onClick={() => {this.handleVote(question.optionOne.text)}}>Vote!</button>
          </div>
          <div>
            <p>Option 2 ({question.optionTwo.votes.length} votes): <br />
            {question.optionTwo.text}
            </p>
          </div>
          <p><em>by {question.author}</em></p>
          <button onClick={() => {this.handleVote(question.optionTwo.text)}}>Vote!</button>
        </div>
      )
    } else {
      return (
        <div>No question is currently selected.</div>
      )
    }

  }
}

function mapStateToProps( { authedUser, questions }, { id } ) {
  const question = questions[id]

  return {
    authedUser,
    question
  }
}

export default connect(mapStateToProps)(Question)
