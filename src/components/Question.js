import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addVoteToQuestion } from '../actions/questions'
import { withRouter, Redirect } from 'react-router-dom'


class Question extends Component {
  state = {
    voted: false
  }

  handleVote = (optionText) => {
    this.props.dispatch(addVoteToQuestion(this.props.question, optionText, this.props.authedUser))

    this.setState(() => ({
      voted: true
    }))
  }

  render() {
    const { question } = this.props

    if (this.state.voted) {
      return <Redirect to='/' />
    }

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

function mapStateToProps( { authedUser, questions }, { id, match } ) {
  // extremely likely there's a more elegant way to do this
  if (!id && match) {
    id = match.params.id
  }

  const question = questions[id]

  return {
    authedUser,
    question
  }
}

export default withRouter(connect(mapStateToProps)(Question))
