import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/questions'

const optionStyle = {
  display: 'inline-block',
  width: '40%',
  textAlign: 'center',
  padding: '10px',
  border: '1px solid black',
  verticalAlign: 'top'
}

class Option extends Component {
  handleVote = (question, optionText, authedUser) => {
    this.props.dispatch(handleQuestionAnswer(question, optionText, authedUser))
  }

  render () {
    const { question, authedUser, optionKey } = this.props
    const isAnswered = (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))

    return(
      <div style={optionStyle}>
        <div style={{position: 'absolute'}}>
          {question[optionKey].votes.includes(authedUser) && <span>✅</span>}
        </div>
        <div>{question[optionKey].text}</div>
        {!isAnswered && (
          <button onClick={() => this.handleVote(question, optionKey, authedUser)}>Vote!</button>
        )}
        {isAnswered && (
          <div>{question[optionKey].votes.length} votes</div>
        )}
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }, { questionId }) {
  const question = questions[questionId]

  return {
    question,
    authedUser
  }
}

export default connect(mapStateToProps)(Option)
