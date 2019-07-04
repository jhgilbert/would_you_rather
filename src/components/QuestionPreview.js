import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPreview extends Component {
  constructor(props) {
    super(props)

    const { question, authedUser } = this.props

    this.state = {
      isAnswered: (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
    }
  }

  render() {
    const { question, authedUser, filter } = this.props

    /*
    return <Redirect to={'/question/' + this.state.selectedQuestionId} />
    */

    switch (filter) {
      case 'answered':
        if (!this.state.isAnswered) {
          return null
        }
        break;
      case 'unanswered':
        if (this.state.isAnswered) {
          return null
        }
    }

    return (
      <a href={`/questions/${question.id}`} style={{display: 'block'}}>
        {`Would you rather ${question.optionOne.text} or ${question.optionTwo.text}?`}
      </a>
    )
  }
}

function mapStateToProps({ authedUser, questions }, { id }) {
  const question = questions[id]

  return {
    authedUser,
    question
  }
}

export default connect(mapStateToProps)(QuestionPreview)
