import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import Nav from './Nav'
import NewQuestion from './NewQuestion'
import QuestionDetail from './QuestionDetail'
import Login from './Login'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  logout = (e) => {
    this.props.dispatch({type: 'LOG_OUT_AUTHED_USER'})
  }

  render() {
    const { authedUser } = this.props

    if (this.props.loading) {
      return (
        <div>Loading ...</div>
      )
    }
    else if (!authedUser) {
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
            <Nav />
            <div>
              <Route path='/' exact component={Dashboard} />
              <Route path='/leaderboard' exact component={Leaderboard} />
              <Route path='/questions/:id' component={QuestionDetail} />
              <Route path='/add' exact component={NewQuestion} />
            </div>
          </Router>
        </div>
      )
    }
  }
}

function mapStateToProps ( { loading, authedUser } ) {
  return {
    loading,
    authedUser
  }
}

export default connect(mapStateToProps)(App);
