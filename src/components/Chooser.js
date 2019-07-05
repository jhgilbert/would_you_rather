import React, { Component } from 'react'
import { connect } from 'react-redux'

const optionStyle = {
  display: 'inline-block',
  width: '40%',
  textAlign: 'center',
  padding: '10px',
  border: '1px solid black',
  verticalAlign: 'top'
}

class Chooser extends Component {
  constructor(props) {
    super(props)

    const { question, authedUser } = this.props

    this.state = {
      isAnswered: (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
    }
  }

  handleVote = () => {
    console.log("clicked!")
  }

  render () {
    const { authedUser, question } = this.props
    const isAnswered = this.state.isAnswered

    return (
      <div>
        <div style={optionStyle}>
          <div>{question.optionOne.text}</div>
          {!isAnswered && (
            <button onClick={this.handleVote}>Vote!</button>
          )}
          {isAnswered && (
            <div>{question.optionOne.votes.length} votes</div>
          )}
        </div>
        <div style={optionStyle}>
          <div>{question.optionTwo.text}</div>
          {isAnswered && (
            <div>{question.optionTwo.votes.length} votes</div>
          )}
          {!isAnswered && (
            <button onClick={this.handleVote}>Vote!</button>
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
