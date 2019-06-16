import React, { Component } from 'react'

function setOptionStyle(isChosen) {

  let optionStyle = {
    verticalAlign: 'top',
    display: 'inline-block',
    width: '50%',
    textAlign: 'center',
    backgroundColor: 'lightgray',
  }

  if (isChosen) {
    optionStyle.backgroundColor = 'lightgreen'
  }

  return optionStyle
}

class Option extends Component {
  render () {
    const { option, isChosen } = this.props

    return (
      <div style={setOptionStyle(isChosen)} onClick={this.props.onClick}>
        <p>{option.text}
        { this.props.isAnswered &&
          <span><br /> {option.votes.length} votes </span>
        }
        </p>
      </div>
    )
  }
}

export default Option
