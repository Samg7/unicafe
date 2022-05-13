import { useState } from 'react'

const Title = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({buttonName, handleClick}) => {
  return (
    <button onClick={handleClick}>{buttonName}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  // Extra statistics
  const allFeedback = good + neutral + bad
  const average = (good - bad) / allFeedback
  const positive = (good / allFeedback) * 100

  if (allFeedback === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text={'good'} value={good} />
          <StatisticLine text={'neutral'} value={neutral} />
          <StatisticLine text={'bad'} value={bad} />
          <StatisticLine text={'all'} value={allFeedback} />
          <StatisticLine text={'average'} value={average} />
          <StatisticLine text={'positive'} value={positive + '%'} />
        </tbody>
      </table>
    </div>
  )
}

function App() {
  // State hooks
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  // Button handlers
  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)

  return (
    <div>
      <Title title={'give feedback'} />
      <div>
        <Button buttonName={'good'} handleClick={incrementGood} />
        <Button buttonName={'neutral'} handleClick={incrementNeutral} />
        <Button buttonName={'bad'} handleClick={incrementBad} />
      </div>
      <Title title={'statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
