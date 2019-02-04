const puppeteer = require('puppeteer')
const request = require('request')
const input = {username: 'frankmalpod', password: '123456'}
const Sequelize = require('sequelize')
const {User, Game, Player} = require('./db/models')

let counter = 1

const multiDayScraper = async function(url, times) {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
  )
  await page.goto(url)
  // await page.waitForSelector('input-username');
  async function logIn() {
    console.log('logging in')
    try {
      await page.waitForSelector('#input-username', {timeout: 50})
      await page.type('#input-username', input.username)
      await page.type('#input-password', input.password)
      await page.click('#login-form > fieldset > div.bottom-buffer-md > button')
    } catch (error) {
      console.log('login failed')
      logIn()
    }
  }

  async function goBackOneDay() {
    try {
      await page.waitForSelector('.form-control', {timeout: 5000})
      await page.click('.form-control')
      await page.keyboard.press('ArrowLeft')
      await page.keyboard.press('Enter')
    } catch (error) {
      console.log('error', error)
    }
  }

  async function scrapeTable() {
    try {
      await page.waitForSelector('.searchable', {timeout: 5000})
      const table = await page.$$('.searchable')
      for (const part of table) {
        const rows = await part.$$('tr.vertical-align')
        for (let i = 0; i < rows.length; i++) {
          const row = rows[i]
          const elements = await row.$$('td')
          let date = new Date()
          date.setDate(date.getDate() - counter)
          date = date.toDateString()
          const playerName = await page.evaluate(
            el => el.innerText,
            elements[0]
          )
          let salary = await page.evaluate(el => el.innerText, elements[5])
          const points = await page.evaluate(el => el.innerText, elements[29])
          salary = salary.replace(/[^\d.]/g, '')
          const player = await Player.findOrCreate({where: {Name: playerName}})
          const game = Game.create({
            Name: playerName,
            Score: parseFloat(points),
            Salary: parseFloat(salary),
            Date: date,
            playerId: player[0].id
          })
        }
      }
    } catch (error) {
      console.log(error)
      goBackOneDay()
      console.log('goingbackoneday')
    }
  }

  async function handleDayData() {
    let moreTablesToGo = null
    async function clickLastButton() {
      try {
        await page.waitForSelector('ul.pagination', {timeout: 5000})
        const pagination = await page.$$('ul.pagination')
        for (const part of pagination) {
          const buttons = await part.$$('li')
          const lastButton = buttons[buttons.length - 1]
          let className = await lastButton.getProperty('className')
          let isDisabled = await className.jsonValue()
          console.log(isDisabled)
          await buttons[buttons.length - 1].click()
          moreTablesToGo = isDisabled
        }
      } catch (error) {
        console.log('error', error)
      }
    }

    while (moreTablesToGo !== 'disabled') {
      try {
        await scrapeTable()
        await clickLastButton()
        console.log('clicked button')
      } catch (error) {
        console.log('error', error)
      }
    }
  }

  await logIn()
  await page.waitForNavigation()

  for (let i = 0; i < times; i++) {
    await goBackOneDay()
    await handleDayData()
    counter++
  }
}

module.exports = multiDayScraper
