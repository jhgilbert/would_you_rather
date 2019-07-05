import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chooser from './Chooser'
import { handleQuestionAnswer } from '../actions/questions'
import { withRouter, Redirect } from 'react-router-dom'

class QuestionDetail extends Component {

  render() {
    const { users, question } = this.props

    if (question) {
      return (
        <div>
          <h1>Question details</h1>
          <h2>Would you rather ...</h2>
          <Chooser questionId={question.id} />
          <p><em>by ...</em></p>
          <p><img style={{width: '75px', height: '75px'}} src={users[question.author].avatarURL} /></p>
          <p>{question.author}</p>
        </div>
      )
    } else {
      return (
        <div>404 -- question not found.</div>
      )
    }

  }
}

function mapStateToProps( { users, questions }, { id, match } ) {
  // extremely likely there's a more elegant way to do this
  if (!id && match) {
    id = match.params.id
  }

  const question = questions[id]

  return {
    users,
    question
  }
}

export default withRouter(connect(mapStateToProps)(QuestionDetail))
