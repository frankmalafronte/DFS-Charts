const router = require('express').Router()
const Game = require('../db/models/games')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const games = await Game.findAll({})
    res.status(200).json(games)
  } catch (err) {
    next(err)
  }
})

// router.post('/', async (req, res, next) => {
//   try {
//     const newGame = await Game.create(req.body)
//     res.status(201).json(newGame)
//   } catch (err) {
//     next(err)
//   }
// })
