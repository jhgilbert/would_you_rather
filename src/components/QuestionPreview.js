import React, { Component } from 'react'
import { connect } from 'react-redux'
import Option from './Option'

const headerStyle = {
  marginTop: '5px',
  marginBottom: '3px',
  paddingLeft: '10px'
}

const authorCreditStyle = {
  textAlign: 'right',
  paddingRight: '10px'
}


class QuestionPreview extends Component {
  render() {
    const { question } = this.props

    return (
      <div>
        <h2 style={headerStyle}>Would you rather ...</h2>
        <Option option={question.optionOne} />
        <Option option={question.optionTwo} />
        <p style={authorCreditStyle}><em>by {question.author}</em></p>
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
