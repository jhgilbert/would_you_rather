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

class Chooser extends Component {

  handleVote = (question, optionText, authedUser) => {
    this.props.dispatch(handleQuestionAnswer(question, optionText, authedUser))
  }

  render () {
    const { authedUser, question } = this.props
    const isAnswered = (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))

    return (
      <div>
        <div style={optionStyle}>
          <div style={{position: 'absolute'}}>
            {question.optionOne.votes.includes(authedUser) && <span>✅</span>}
          </div>
          <div>{question.optionOne.text}</div>
          {!isAnswered && (
            <button onClick={() => this.handleVote(question, "optionOne", authedUser)}>Vote!</button>
          )}
          {isAnswered && (
            <div>{question.optionOne.votes.length} votes</div>
          )}
        </div>
        <div style={optionStyle}>
          <div style={{position: 'absolute'}}>
            {question.optionTwo.votes.includes(authedUser) && <span>✅</span>}
          </div>
          <div>{question.optionTwo.text}</div>
          {isAnswered && (
            <div>{question.optionTwo.votes.length} votes</div>
          )}
          {!isAnswered && (
            <button onClick={() => this.handleVote(question, "optionTwo", authedUser)}>Vote!</button>
          )}
        </div>
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

export default connect(mapStateToProps)(Chooser)
