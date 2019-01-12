const Sequelize = require('sequelize')
const db = require('../db')

const Player = db.define('players', {
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

module.exports = Player
