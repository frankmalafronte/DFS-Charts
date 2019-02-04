const puppeteer = require('puppeteer')
const request = require('request')
const input = {username: 'frankmalpod', password: '123456'}
const Sequelize = require('sequelize')
const {User, Game, Player} = require('./db/models')
const oneDayScraper = require('./oneDayScraper.js')

oneDayScraper()
