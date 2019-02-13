import React from 'react'

// for each of these calculations, I want to remove those games where the player scored 0
// These averages are more useful if we remove those games where the player did not play, which would be recorded as a 0 in the dataset

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

const standardDeviationScore = props => {
  const average = averageScore(props)
  const squaredDifferences = []
  for (let i = 0; i < props.games.length; i++) {
    const game = parseInt(props.games[i].Score)
    const difference = Math.abs(game - average)
    squaredDifferences.push(difference * difference)
  }
  let averageofSquaredDifferences = squaredDifferences.reduce(function(
    acc,
    val
  ) {
    return acc + val
  },
  0)
  averageofSquaredDifferences =
    averageofSquaredDifferences / squaredDifferences.length
  return Math.round(Math.sqrt(averageofSquaredDifferences))
}

const averages = props => {
  return (
    <h4>
      {' '}
      {props.player} Average Score: {averageScore(props)} Average Salary: ${''}
      {averageSalary(props)} Standard Deviation of Score:{' '}
      {standardDeviationScore(props)}
    </h4>
  )
}

module.exports = averages
