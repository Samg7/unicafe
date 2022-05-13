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

const SingleStat = ({text, statistic}) => {
  return (
    <>
      <p>{text} {statistic}</p>
    </>
  )
}

const Statistics = ({goodStat, neutralStat, badStat, allStats, average}) => {
  return (
    <div>
      <SingleStat text={'good'} statistic={goodStat} />
      <SingleStat text={'neutral'} statistic={neutralStat} />
      <SingleStat text={'bad'} statistic={badStat} />
      <SingleStat text={'all'} statistic={allStats} />
      <SingleStat text={'average'} statistic={average} />
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

  console.log('good:', good, 'neutral:', neutral, 'bad', bad)

  return (
    <div>
      <Title title={'give feedback'} />
      <Button buttonName={'good'} handleClick={incrementGood} />
      <Button buttonName={'neutral'} handleClick={incrementNeutral} />
      <Button buttonName={'bad'} handleClick={incrementBad} />
      <Title title={'statistics'} />
      <Statistics goodStat={good} neutralStat={neutral} badStat={bad} allStats={allFeedback} average={average} />
    </div>
  )
}

export default App;
