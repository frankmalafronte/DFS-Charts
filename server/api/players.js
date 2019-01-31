const router = require('express').Router()
const Player = require('../db/models/players')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const players = await Player.findAll({})
    res.status(200).json(players)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const player = await Player.findById(req.params.id, {
      include: [{all: true}]
    })
    res.json(player)
  } catch (err) {
    next(err)
  }
})
