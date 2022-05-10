import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text + " "}</td>
      <td>{props.value}</td>
    </tr>
  )
}
const Statistics = (props) => {
  if (props.good + props.bad + props.neutral) return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.bad + props.neutral + props.good} />
        <StatisticLine text="average" value={(props.good - props.bad)/(props.bad + props.neutral + props.good)} />
        <StatisticLine text="positive" value={(props.good)/(props.bad + props.neutral + props.good)*100 + " %"} />
      </tbody>
    </table>
  ); else return (
    <div>
      No feedback given
    </div>
  )
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const setToGood = (newValue) =>{
    console.log("good now ",newValue)
    setGood(newValue)
  }
  const setToNeutral = (newValue) =>{
    console.log("neutral now ",newValue)
    setNeutral(newValue)
  }
  const setToBad = (newValue) =>{
    console.log("bad now ",newValue)
    setBad(newValue)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="good"/>
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setToBad(bad + 1)} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
