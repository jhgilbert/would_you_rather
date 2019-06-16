import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Question from './Question'
import Login from './Login'

class App extends Component {
  logout = (e) => {
    this.props.dispatch({type: 'LOG_OUT_AUTHED_USER'})
  }

  render() {
    const { authedUser } = this.props

    if (!authedUser) {
      return (
        <Login />
      )
    } else {
      return (
        <div>
          <div style={{textAlign: 'right', fontSize: '.8em'}}>
            Logged in as <strong>{ authedUser } </strong>
            <button onClick={this.logout}>Logout</button>
          </div>
          <Router>
            <NavLink to='/new'>
              + New Question
            </NavLink>
            <div>
              <Route path='/' exact component={Dashboard} />
              <Route path='/question/:id' component={Question} />
              <Route path='/new' component={NewQuestion} />
            </div>
          </Router>
        </div>
      )
    }
  }
}

function mapStateToProps ( { authedUser } ) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
