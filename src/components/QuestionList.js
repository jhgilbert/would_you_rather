import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview'

class QuestionList extends Component {
  render() {
    return (
      <ul>
        <li><QuestionPreview /></li>
      </ul>
    )
  }
}

export default QuestionList
