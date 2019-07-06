import React, { Component } from 'react'
import { connect } from 'react-redux'
import Option from './Option'
import UserDetails from './UserDetails'
import { withRouter } from 'react-router-dom'

class QuestionDetail extends Component {

  render() {
    const { question } = this.props

    if (question) {
      return (
        <div>
          <h1>Question details</h1>
          <h2>Would you rather ...</h2>
          <Option questionId={question.id} optionKey="optionOne" />
          <Option questionId={question.id} optionKey="optionTwo" />
          <p><em>by ...</em></p>
          <UserDetails username={question.author} />
        </div>
      )
    } else {
      return (
        <h1>404 -- question not found.</h1>
      )
    }

  }
}

function mapStateToProps( { questions }, { id, match } ) {
  // extremely likely there's a more elegant way to do this
  if (!id && match) {
    id = match.params.id
  }

  const question = questions[id]

  return {
    question
  }
}

export default withRouter(connect(mapStateToProps)(QuestionDetail))
