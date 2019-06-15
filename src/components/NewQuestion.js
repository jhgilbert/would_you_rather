import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOne: {
      text: ''
    },
    optionTwo: {
      text: ''
    }
  }

  handleOptionOneChange = (e) => {
    const optionOne = {
      text: e.target.value
    }

    this.setState(() => ({
      optionOne
    }))
  }

  handleOptionTwoChange = (e) => {
    const optionTwo = {
      text: e.target.value
    }

    this.setState(() => ({
      optionTwo
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.dispatch(handleAddQuestion(this.state, this.props.authedUser))

    this.setState(() => ({
      optionOne: {
        text: ''
      },
      optionTwo: {
        text: ''
      }
    }))
  }

  render() {
    const { optionOne, optionTwo } = this.state

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
