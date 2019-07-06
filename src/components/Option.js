import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/questions'

const optionStyle = {
  display: 'inline-block',
  width: '40%',
  textAlign: 'center',
  padding: '10px',
  border: '1px solid black',
  verticalAlign: 'top',
  minHeight: '50px'
}

class Option extends Component {
  handleVote = (question, optionText, authedUser) => {
    this.props.dispatch(handleQuestionAnswer(question, optionText, authedUser))
  }

  calculateVotePercentage = (question, optionKey) => {
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    const votesForThisOption = question[optionKey].votes.length
    const rawPercentage = (votesForThisOption / totalVotes) * 100
    return rawPercentage.toFixed(0)
  }

  render () {
    const { question, authedUser, optionKey } = this.props
    const isAnswered = (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))

    return(
      <div style={optionStyle}>
        <div style={{position: 'absolute'}}>
          {question[optionKey].votes.includes(authedUser) && <span role="img" aria-label="green checkmark">✅</span>}
        </div>
        <div style={{padding: '10px'}}><strong>{question[optionKey].text}</strong></div>
        {!isAnswered && (
          <button onClick={() => this.handleVote(question, optionKey, authedUser)}>Vote!</button>
        )}
        {isAnswered && (
          <div>{question[optionKey].votes.length} votes ({this.calculateVotePercentage(question, optionKey)}%)</div>
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
