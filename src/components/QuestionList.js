import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview'
import { Redirect } from 'react-router-dom'

const ulStyle = {
  listStyleType: 'none',
  paddingLeft: '0px'
}

const liStyle = {
  border: '1px solid black',
  borderRadius: '10px',
  marginBottom: '5px',
  paddingLeft: '0px',
  marginLeft: '0px'
}

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
      <ul style={ulStyle}>
        {this.props.questionIds.map((id) => (
          <li style={liStyle} key={id} onClick={() => this.handleQuestionSelect(id)}>
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
