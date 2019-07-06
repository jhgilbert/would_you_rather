import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class QuestionPreview extends Component {

  render() {
    const { question } = this.props

    return (
      <NavLink to={`/questions/${question.id}`} style={{display: 'block'}}>
        {`Would you rather ${question.optionOne.text} or ${question.optionTwo.text}?`}
      </NavLink>
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
