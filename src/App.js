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
    <>
      <p>{text} {value}</p>
    </>
  )
}

const Statistics = (props) => {
  const {goodStat, neutralStat, badStat, allStats, average, positive} = props
  return (
    <div>
      <StatisticLine text={'good'} value={goodStat} />
      <StatisticLine text={'neutral'} value={neutralStat} />
      <StatisticLine text={'bad'} value={badStat} />
      <StatisticLine text={'all'} value={allStats} />
      <StatisticLine text={'average'} value={average} />
      <StatisticLine text={'positive'} value={positive + '%'} />
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

  // Extra statistics
  let allFeedback = good + neutral + bad
  let average = (allFeedback - bad) / allFeedback
  let percentPositive = (good / allFeedback) * 100

  console.log('good:', good, 'neutral:', neutral, 'bad', bad)

  return (
    <div>
      <Title title={'give feedback'} />
      <Button buttonName={'good'} handleClick={incrementGood} />
      <Button buttonName={'neutral'} handleClick={incrementNeutral} />
      <Button buttonName={'bad'} handleClick={incrementBad} />
      <Title title={'statistics'} />
      <Statistics goodStat={good} neutralStat={neutral} badStat={bad} allStats={allFeedback}
       average={average} positive={percentPositive} 
       />
    </div>
  )
}

export default App;
