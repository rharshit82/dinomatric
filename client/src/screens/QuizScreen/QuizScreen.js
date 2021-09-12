import React, { Component } from 'react'
import questionAPI from '../../question'
import QuestionBox from '../../components/QuestionBox'
import Result from '../../components/ResultBox'
import './QuizScreen.css'
import dino from './dino.jpg'
class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      questionBank: [],
      score: 0,
      responses: 0,
    }
  }

  getQuestions = () => {
    questionAPI().then((question) => {
      this.setState({ questionBank: question })
    })
  }

  playAgain = () => {
    this.getQuestions()
    this.setState({ score: 0, responses: 0 })
  }

  computeAnswer = (answer, correctAns) => {
    if (answer === correctAns) {
      this.setState({
        score: this.state.score + 1,
      })
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    })
  }

  componentDidMount() {
    this.getQuestions()
  }

  render() {
    return (
      <div className='container my-4'>
        <h2 className='text-center'>PreHistoric Quiz</h2>
        <p className='text-center'>
          Refresh your Prehistoric Knowledge
        </p>
        {this.state.responses === 5? null : <img src={dino} alt="dinosaur" className="w-25" /> }
        
        {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                key={questionId}
                selected={(answer) => this.computeAnswer(answer, correct)}
              />
            )
          )}

        {this.state.responses === 5 ? (
          <Result score={this.state.score} playAgain={this.playAgain} />
        ) : null}
      </div>
    )
  }
}
export default Quiz
