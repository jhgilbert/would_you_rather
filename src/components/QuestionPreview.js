import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPreview extends Component {
  render() {
    const { question } = this.props

    return (
      <div>{JSON.stringify(question)}</div>
    )
  }
}

// skipping the authed user for now
function mapStateToProps({ questions }, { id }) {
  const question = questions[id]

  return {
    question
  }
}

export default connect(mapStateToProps)(QuestionPreview)
