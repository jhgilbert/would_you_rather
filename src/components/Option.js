import React, { Component } from 'react'

const optionStyle = {
  verticalAlign: 'top',
  display: 'inline-block',
  width: '50%',
  textAlign: 'center',
  backgroundColor: 'lightgray',
}

class Option extends Component {
  render () {
    const { option } = this.props

    return (
      <div style={optionStyle}>
        <p>{option.text} <br /> {option.votes.length} votes
        </p>
      </div>
    )
  }
}

export default Option
