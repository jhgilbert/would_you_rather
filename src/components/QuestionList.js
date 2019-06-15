import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview'

class QuestionList extends Component {
  render() {
    return (
      <ul>
        {this.props.questionIds.map((id) => (
          <li key={id} onClick={() => this.props.handleQuestionSelect(id)}>
            <QuestionPreview id={id} />
          </li>
        ))}
      </ul>
    )
  }
}

// skipping authed user for now
function mapStateToProps( { questions } ) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(QuestionList)
