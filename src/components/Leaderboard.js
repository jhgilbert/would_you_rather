import React, { Component } from 'react'
import UserDetails from './UserDetails'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    let { users, tallies } = this.props
    return (
      <div>
        <h1>Leaderboard</h1>
        <ol>
          {tallies.map((tally) => (
            <li key={tally.username}>
              <UserDetails username={tally.username} />
              <div>
                Asked: {tally.asked}
              </div>
              <div>
                Answered: {tally.answered}
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
    users,
    tallies
  }
}

export default connect(mapStateToProps)(Leaderboard)
