const Sequelize = require('sequelize')
const db = require('../db')

const Game = db.define('games', {
  Name: {
    type: Sequelize.STRING
  },
  Score: {
    type: Sequelize.DECIMAL
  },
  Salary: {
    type: Sequelize.INTEGER
  }
})

module.exports = Game
