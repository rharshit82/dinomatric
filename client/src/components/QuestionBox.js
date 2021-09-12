import React, { useState, useEffect } from 'react'
// Function to question inside our app
const QuestionBox = ({ question, options, selected }) => {
  const setColor = () => {}
  const [answer, setAnswer] = useState(options)
  const [atText, setAtText] = useState('')
  return (
    <div className='questionBox'>
      <div className='question'>{question}</div>
      <div>
        {answer !== undefined
          ? answer.length > 0
            ? answer.map((text, index) => (
                <button
                  key={index}
                  className='answerBtn'
                  onClick={() => {
                    setAnswer()
                    setAtText(`Attempted Answer: ${text}`)
                    selected(text)
                  }}
                >
                  {text}
                </button>
              ))
            : null
          : null}
      </div>
      <div>
        <p>{atText}</p>
      </div>
    </div>
  )
}

export default QuestionBox
