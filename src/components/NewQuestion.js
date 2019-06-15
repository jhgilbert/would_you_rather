import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {
  render() {
    return (
      <div>The new question form goes here!</div>
    )
  }
}

function mapStateToProps () {
  return {}
}

export default connect(mapStateToProps)(NewQuestion)
