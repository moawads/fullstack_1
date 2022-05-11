import { useState } from 'react'
const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
const Anecdote = ({text, points}) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {points} votes</p>
    </div>
  )
}
const Header = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const len = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(len).fill(0))

  const setToAnother = () => {
    setSelected(Math.floor(Math.random() * len))
  }
  const setToVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} points={votes[selected]}/>
      <Button handleClick={() => setToAnother()} text="another"/>
      <Button handleClick={() => setToVotes()} text="vote"/>
      <Header text="Anecdote with the most votes" />
      <Anecdote text={anecdotes[votes.indexOf(Math.max(...votes))]} points={Math.max(...votes)}/>
    </div>
  )
}

export default App