import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPreview extends Component {
  render() {
    const { question } = this.props

    return (
      <div style={{border: '1px solid black', padding: '10px'}}>
        <div>
          <p>Option 1 ({question.optionOne.votes.length} votes): <br />
          {question.optionOne.text}
          </p>
        </div>
        <div>
          <p>Option 2 ({question.optionTwo.votes.length} votes): <br />
          {question.optionTwo.text}
          </p>
        </div>
      </div>
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
