import React, { Component } from 'react'
import QuestionList from './QuestionList'

class Dashboard extends Component {
  render() {
    return (
      <div>This will be the dashboard.
        <QuestionList />
      </div>
    )
  }
}

export default Dashboard
