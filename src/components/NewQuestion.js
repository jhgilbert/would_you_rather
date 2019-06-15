import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleOptionOneChange = (e) => {
    const optionOne = e.target.value

    this.setState(() => ({
      optionOne
    }))
  }

  handleOptionTwoChange = (e) => {
    const optionTwo = e.target.value

    this.setState(() => ({
      optionTwo
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log("NewQuestion current state:")
    console.log(this.state)
  }

  render() {
    const { optionOne, optionTwo } = this.state

    return (
      <div>
        <h1>Create New Question</h1>
        <p>Option 1:</p>
        <form>
          <input
            value={optionOne}
            onChange={this.handleOptionOneChange}
            type="text" />
          <p>Option 2:</p>
          <input
            value={optionTwo}
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

export default connect()(NewQuestion)
