import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview'

const ulStyle = {
  listStyleType: 'none',
  paddingLeft: '0px'
}

const liStyle = {
  marginBottom: '5px',
  paddingLeft: '0px',
  marginLeft: '0px'
}

class QuestionList extends Component {

  render() {
    return (
      <ul style={ulStyle}>
        {this.props.questionIds.map((id) => (
          <li style={liStyle} key={id}>
            <QuestionPreview id={id} />
          </li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps( { authedUser, questions }, { filter } ) {
  let questionIds = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)

  if (filter === 'answered') {
    questionIds = questionIds.filter((id) => questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser))
  } else if (filter === 'unanswered') {
    questionIds = questionIds.filter((id) => !questions[id].optionOne.votes.includes(authedUser) && !questions[id].optionTwo.votes.includes(authedUser))
  }

  return {
    questionIds
  }
}

export default connect(mapStateToProps)(QuestionList)
