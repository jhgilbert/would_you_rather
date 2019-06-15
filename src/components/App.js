import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { addQuestion, addVoteToQuestion } from '../actions/questions'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import QuestionList from './QuestionList'
import Question from './Question'
import Login from './Login'
import { LoremIpsum } from 'lorem-ipsum'

class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <Router>
          <NavLink to='/new'>
            New Question
          </NavLink>
          <div>
            <Route path='/' exact component={Dashboard} />
            { /* <Route path='/question/:id' component={Question} /> */ }
            <Route path='/new' component={NewQuestion} />
          </div>
        </Router>
      </div>
    )
  }
}

function mapStateToProps ( { authedUser } ) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
