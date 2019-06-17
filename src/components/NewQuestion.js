import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    question: {
      optionOne: {
        text: ''
      },
      optionTwo: {
        text: ''
      }
    },
    toHome: false
  }

  handleOptionOneChange = (e) => {
    e.preventDefault()

    let question = JSON.parse(JSON.stringify(this.state.question))
    question.optionOne = {
      text: e.target.value
    }

    this.setState(() => ({
      question
    }))
  }

  handleOptionTwoChange = (e) => {
    e.preventDefault()

    let question = JSON.parse(JSON.stringify(this.state.question))
    question.optionTwo = {
      text: e.target.value
    }

    this.setState(() => ({
      question
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.dispatch(handleAddQuestion(this.state.question, this.props.authedUser))
    let question = JSON.parse(JSON.stringify(this.state.question))

    this.setState(() => ({
      question,
      toHome: true
    }))
  }

  render() {
    const { optionOne, optionTwo } = this.state.question

    if (this.state.toHome) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h1>Create New Question</h1>
        <form>
          <p>Would you rather ...</p>
          <input
            value={optionOne.text}
            onChange={this.handleOptionOneChange}
            placeholder="option 1"
            type="text" />
          <p>or</p>
          <input
            value={optionTwo.text}
            onChange={this.handleOptionTwoChange}
            placeholder="option 2"
            type="text" />?
          <div>
          <p>
            <button onClick={this.handleSubmit}>
              Ask the community!
            </button>
          </p>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)
