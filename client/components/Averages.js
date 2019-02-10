import React from 'react'

const averageScore = props => {
  let output = 0
  let numberOfGames = 0
  for (let i = 0; i < props.games.length; i++) {
    let game = parseInt(props.games[i].Score)
    if (game > 0) {
      output = output + game
      numberOfGames++
    }
  }
  return Math.round(output / numberOfGames)
}

const averageSalary = props => {
  let output = 0
  let numberOfGames = 0
  for (let i = 0; i < props.games.length; i++) {
    let game = parseInt(props.games[i].Salary)
    if (game > 0) {
      output = output + game
      numberOfGames++
    }
  }
  return Math.round(output / numberOfGames)
}

const averages = props => {
  return (
    <h4>
      {' '}
      {props.player} Average Score: {averageScore(props)} Average Salary:{' '}
      {averageSalary(props)}
    </h4>
  )
}

module.exports = averages
