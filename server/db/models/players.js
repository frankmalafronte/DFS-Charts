const Sequelize = require('sequelize')
const db = require('../db')

const Player = db.define('players', {
  Name: {
    type: Sequelize.STRING
  }
})

module.exports = Player
