import React, { Component } from 'react'
import QuestionList from './QuestionList'

function setDivStyle(isSelected) {
  let style = {
    backgroundColor: 'lightgray',
    verticalAlign: 'top',
    padding: '5px',
    marginRight: '2px',
    display: 'inline-block',
    marginTop: '10px'
  }

  if (isSelected) {
    style.backgroundColor = 'lightgreen'
  }

  return style
}

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: 'unanswered'
    }
  }

  setFilter = (filter) => {
    this.setState(() => ({
      filter
    }))
  }

  render() {
    const { filter } = this.state

    return (
      <div>
        <div>
          <p><a href="/new">+ New Question</a></p>
          <p><a href="/leaderboard">Leaderboard</a></p>
        </div>
        <div>
          <div style={setDivStyle(filter === 'unanswered')} onClick={() => this.setFilter('unanswered')}>
            Unanswered
          </div>
          <div style={setDivStyle(filter === 'answered')} onClick={() => this.setFilter('answered')}>
            Answered
          </div>
          <div style={setDivStyle(filter === 'all')} onClick={() => this.setFilter('all')}>
            All
          </div>
        </div>
        <QuestionList filter={this.state.filter} />
      </div>
    )
  }
}

export default Dashboard
