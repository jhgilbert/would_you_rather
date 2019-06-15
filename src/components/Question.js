import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    return (
      <div>
        <p>Question details: </p>
        <p>{JSON.stringify(this.props.question)}</p>
      </div>
    )
  }
}

function mapStateToProps( { questions }, { id } ) {
  const question = questions[id]

  return {
    question
  }
}

export default connect(mapStateToProps)(Question)
