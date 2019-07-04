import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/questions'
import { withRouter, Redirect } from 'react-router-dom'


class QuestionDetail extends Component {
  state = {
    voted: false
  }

  handleVote = (optionText) => {
    handleQuestionAnswer(this.props.question, optionText, this.props.authedUser)

    this.setState(() => ({
      voted: true
    }))
  }

  render() {
    const { users, question } = this.props

    if (this.state.voted) {
      return <Redirect to='/' />
    }

    if (question) {
      return (
        <div>
          <h1>Question details</h1>
          <h2>Would you rather ...</h2>
          {/* what follows has developed major code smell at this point, oops */}
          <div style={{width: '200px', display: 'inline-block', verticalAlign: 'top', padding: '5px', border: '1px solid black'}}>
            <p>{question.optionOne.text}</p>
            <p>({question.optionOne.votes.length} votes)</p>
            <button onClick={() => {this.handleVote(question.optionOne.text)}}>Vote!</button>
          </div>
          <div style={{width: '200px', display: 'inline-block', verticalAlign: 'top', padding: '5px', border: '1px solid black'}}>
            <p>{question.optionTwo.text}</p>
            <p>({question.optionTwo.votes.length} votes)</p>
            <button onClick={() => {this.handleVote(question.optionTwo.text)}}>Vote!</button>
          </div>
          <p><em>by ...</em></p>
          <p><img style={{width: '75px', height: '75px'}} src={users[question.author].avatarURL} /></p>
          <p>{question.author}</p>
        </div>
      )
    } else {
      return (
        <div>No question is currently selected.</div>
      )
    }

  }
}

function mapStateToProps( { users, authedUser, questions }, { id, match } ) {
  // extremely likely there's a more elegant way to do this
  if (!id && match) {
    id = match.params.id
  }

  const question = questions[id]

  return {
    users,
    authedUser,
    question
  }
}

export default withRouter(connect(mapStateToProps)(QuestionDetail))
