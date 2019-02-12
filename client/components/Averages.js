import React from 'react'

// for each of these calculations, I want to remove those games where the player scored 0
// These averages are more more useful if we remove those games where the player did not play, which would be recorded as a 0 in our dataset

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

const lastTenDaysScoreAverage = props => {
  let output = 0
  let counter = 0
  let index = 0
  while (counter < 10) {
    let game = parseInt(props.games[index].Score)
    if (game > 0) {
      output = output + game
      index++
      counter++
    } else {
      index++
    }
  }
  return Math.round(output / 10)
}

const lastTenDaysSalaryAverage = props => {
  let output = 0
  let counter = 0
  let index = 0
  while (counter < 10) {
    let game = parseInt(props.games[index].Salary)
    if (games > 0) {
      ouput = output + game
      index++
      counter++
    } else {
      index++
    }
  }
  return Math.round(output / 10)
}

const averages = props => {
  return (
    <h4>
      {' '}
      {props.player} Average Score: {averageScore(props)} Average Salary: ${''}
      {averageSalary(props)}
    </h4>
  )
}

module.exports = averages
