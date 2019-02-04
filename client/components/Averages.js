import React from 'react'

const averageScore = props => {
  let output = 0

  for (let i = 0; i < props.games.length; i++) {
    let game = parseInt(props.games[i].Score)
    output = output + game
  }
  return output / props.games.length
}

const averages = props => {
  console.log('I ran')
  return <h4> Average Score: {averageScore(props)}</h4>
}

module.exports = averages
