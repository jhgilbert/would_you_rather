import React, { Component } from 'react'
import UserDetails from './UserDetails'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    let { tallies } = this.props
    return (
      <div>
        <h1>Leaderboard</h1>
        <ol>
          {tallies.map((tally) => (
            <li key={tally.username} style={{border: '1px solid black', padding: '10px', marginBottom: '10px'}}>
              <UserDetails username={tally.username} />
              <div style={{marginTop: '5px'}}>
                <em>Asked:</em> <strong>{tally.asked}</strong>
              </div>
              <div>
                <em>Answered:</em> <strong>{tally.answered}</strong>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

function creditVoters(talliesObj, question) {
  let voters = [...question.optionOne.votes, ...question.optionTwo.votes]

  // loop through all votes
  voters.forEach(function (username) {
    talliesObj[username].answered++
  })
}

function formatTalliesForLeaderboard(talliesObj) {
  let tallies = []

  Object.keys(talliesObj).forEach(function (username) {
    tallies.push({
      username: username,
      asked: talliesObj[username].asked,
      answered: talliesObj[username].answered
    })
  })

  tallies.sort((a, b) => (b.asked + b.answered) - (a.asked + a.answered))

  return tallies
}


function mapStateToProps({questions, users}) {
  let talliesObj = {}

  // add tallies for each user
  Object.keys(users).forEach(function (username) {
    talliesObj[username] = {
      asked: 0,
      answered: 0
    }
  })

  // calculate tallies for each user
  Object.keys(questions).forEach(function (questionId) {
    const question = questions[questionId]
    // credit the author
    talliesObj[question.author].asked++
    // credit the voters
    creditVoters(talliesObj, question)
  })

  // format the tallies object into a sorted array
  const tallies = formatTalliesForLeaderboard(talliesObj)

  return {
    tallies
  }
}

export default connect(mapStateToProps)(Leaderboard)
