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
      <div style={{'border': '1px solid black', padding: '10px'}}>
      <h1>Login</h1>
        <p>authed user is {this.props.authedUser}</p>
        <p>proposed authed user is {this.state.inputtedValue}</p>
        <form>
          <input type="text" value={inputtedValue} onChange={this.handleInputChange} />
          <button onClick={this.handleSubmit}>Save</button>
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
