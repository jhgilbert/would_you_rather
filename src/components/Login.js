import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    inputtedValue: ''
  }

  handleInputChange = (e) => {
    e.preventDefault()

    const inputtedValue = e.target.value

    this.setState(() => ({
      inputtedValue
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newAuthedUserId = this.state.inputtedValue

    this.props.dispatch(setAuthedUser(newAuthedUserId))
  }

  render() {
    const { inputtedValue } = this.state

    return (
      <div>
      <h1>Log in</h1>
        <form>
          <input type="text" placeholder="username" value={inputtedValue} onChange={this.handleInputChange} />
          <p><button onClick={this.handleSubmit}>Submit</button></p>
        </form>
      </div>)
  }
}

// keeping it simple for the moment
function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Login)
