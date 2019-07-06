import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class QuestionPreview extends Component {

  render() {
    const { question } = this.props

    return (
      <Link to={`/questions/${question.id}`} style={{display: 'block'}}>
        {`Would you rather ${question.optionOne.text} or ${question.optionTwo.text}?`}
      </Link>
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
