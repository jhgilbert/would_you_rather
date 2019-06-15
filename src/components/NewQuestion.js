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
        <p>authedUser is {this.props.authedUser}</p>
        <h1>Create New Question</h1>
        <p>Option 1:</p>
        <form>
          <input
            value={optionOne.text}
            onChange={this.handleOptionOneChange}
            type="text" />
          <p>Option 2:</p>
          <input
            value={optionTwo.text}
            onChange={this.handleOptionTwoChange}
            type="text" />
          <div>
            <button onClick={this.handleSubmit}>
              Save
            </button>
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
