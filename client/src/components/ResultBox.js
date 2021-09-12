import React from 'react'
import dino from './dino.png'
const Result = ({ score, playAgain }) => (
  <div className='score-board'>
    <div className='score'>
      {' '}
      Your score is {score} / 5 {' '}
    </div>
    <div className="d-flex flex-row">
    <img src={dino} alt="dino" />
    <h3 className="text-center">Good human!</h3>
    </div>
    <button className='playBtn' onClick={playAgain}>
      {' '}
      Play Again{' '}
    </button>
  </div>
)

export default Result
