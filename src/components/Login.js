import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    inputtedValue: '',
    userIsValid: true
  }

  validateUser = (username) => {
    console.log("validating user ...")
    const { users } = this.props
    return Object.keys(users).includes(username)
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

    if(this.validateUser(newAuthedUserId)) {
      this.setState(() => ({
        userIsValid: true
      }))
      this.props.dispatch(setAuthedUser(newAuthedUserId))
    } else {
      this.setState(() => ({
        userIsValid: false
      }))
    }
  }

  render() {
    const { inputtedValue, userIsValid } = this.state

    return (
      <div>
      <h1>Log in</h1>
        <form>
          <input type="text" placeholder="username" value={inputtedValue} onChange={this.handleInputChange} />
          <p><button onClick={this.handleSubmit}>Submit</button></p>
          {!userIsValid && <p style={{color: "red"}}>Sorry, that username is invalid.</p>}
        </form>
      </div>)
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Login)
