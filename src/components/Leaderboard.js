import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    return (
      <div>{JSON.stringify(this.props.users)}</div>
    )
  }
}

function creditVoters(users, question) {
  let voters = [...question.optionOne.votes, ...question.optionTwo.votes]

  // loop through all votes
  voters.forEach(function (username) {
    // add the user if not already found
    if (!(Object.keys(users).includes(username))) {
      users[username] = {
        asked: 0,
        answered: 0
      }
    }
    // credit the user for voting
    users[username].answered++
  })
}

function creditAuthor(users, question) {
  // add author if not already found
  if (!(Object.keys(users).includes(question.author))) {
    users[question.author] = {
      asked: 0,
      answered: 0
    }
  }

  // credit the author
  users[question.author].asked++
}


function mapStateToProps({questions, users}) {
  console.log("Questions: ", questions)
  console.log("Users: ", users)

  /*
  Object.keys(questions).forEach(function (questionId) {
    const question = questions[questionId]
    console.log("from leaderboard loop, question is ....")
    console.log(question)
    creditAuthor(users, question)
    creditVoters(users, question)
  })
  */

  return {
    users
  }
}

export default connect(mapStateToProps)(Leaderboard)
