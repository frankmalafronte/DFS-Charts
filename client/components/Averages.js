import React from 'react'

const averageScore = props => {
  let output = 0

  for (let i = 0; i < props.games.length; i++) {
    let game = parseInt(props.games[i].Score)
    output = output + game
  }
  return Math.round(output / props.games.length)
}

const averageSalary = props => {
  let output = 0
  for (let i = 0; i < props.games.length; i++) {
    let game = parseInt(props.games[i].Salary)
    output = output + game
  }
  return Math.round(output / props.games.length)
}

const averages = props => {
  console.log('I ran')
  return (
    <h4>
      {' '}
      Average Score: {averageScore(props)} Average Salary:{' '}
      {averageSalary(props)}
    </h4>
  )
}

module.exports = averages
