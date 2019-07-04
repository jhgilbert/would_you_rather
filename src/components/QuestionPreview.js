import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPreview extends Component {

  render() {
    const { question } = this.props

    return (
      <a href={`/questions/${question.id}`} style={{display: 'block'}}>
        {`Would you rather ${question.optionOne.text} or ${question.optionTwo.text}?`}
      </a>
    )
  }
}

function mapStateToProps({ questions }, { id }) {
  const question = questions[id]

  return {
    question
  }
}

export default connect(mapStateToProps)(QuestionPreview)
