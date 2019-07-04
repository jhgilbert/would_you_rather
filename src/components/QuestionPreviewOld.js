import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addVoteToQuestion } from '../actions/questions'
import Option from './Option'

const headerStyle = {
  marginTop: '5px',
  marginBottom: '3px',
  paddingLeft: '10px'
}

const authorCreditStyle = {
  textAlign: 'right',
  paddingRight: '10px'
}


class QuestionPreview extends Component {
  constructor(props) {
    super(props)

    const { question, authedUser } = this.props

    this.state = {
      isAnswered: (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
    }
  }

  handleOptionSelection = (question, optionText, authedUser) => {
    console.log("attempting to handle option selection ...")
    this.props.dispatch(addVoteToQuestion(question, optionText, authedUser))
    this.setState(() => ({
      isAnswered: true
    }))
  }

  render() {
    const { question, authedUser, filter } = this.props

    /*
    return <Redirect to={'/question/' + this.state.selectedQuestionId} />
    */

    switch (filter) {
      case 'answered':
        if (!this.state.isAnswered) {
          return null
        }
        break;
      case 'unanswered':
        if (this.state.isAnswered) {
          return null
        }
    }

    return (
      <div style={{border: '1px solid black', borderRadius: '10px'}}>
        <h2 style={headerStyle}>Would you rather ...</h2>
        <Option
          option={question.optionOne}
          isChosen={question.optionOne.votes.includes(authedUser)}
          isAnswered={this.state.isAnswered}
          onClick={() => this.handleOptionSelection(question, question.optionOne.text, authedUser)}
        />
        <Option
          option={question.optionTwo}
          isChosen={question.optionTwo.votes.includes(authedUser)}
          isAnswered={this.state.isAnswered}
          onClick={() => this.handleOptionSelection(question, question.optionTwo.text, authedUser)}
        />
        { this.state.isAnswered
          ? <p style={authorCreditStyle}><em>by {question.author}</em></p>
          : <p></p>
        }
        <div style={{paddingLeft: '5px', marginBottom: '5px'}}><a href={`/questions/${question.id}`}>details</a></div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }, { id }) {
  const question = questions[id]

  return {
    authedUser,
    question
  }
}

export default connect(mapStateToProps)(QuestionPreview)
