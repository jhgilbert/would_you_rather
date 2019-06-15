import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview'
import { Redirect } from 'react-router-dom'

class QuestionList extends Component {
  state = {
    selectedQuestionId: null
  }

  handleQuestionSelect = (id) => {
    console.log("handling question select ...")
    this.setState(() => ({
      selectedQuestionId: id
    }))
  }

  render() {
    if (this.state.selectedQuestionId) {
      return <Redirect to={'/question/' + this.state.selectedQuestionId} />
    }

    return (
      <ul>
        {this.props.questionIds.map((id) => (
          <li key={id} onClick={() => this.handleQuestionSelect(id)}>
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
