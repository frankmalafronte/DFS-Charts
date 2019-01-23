const rp = require('request-promise')
const $ = require('cheerio')
// const url = 'https://dailyfantasynerd.com/optimizer/fanduel/nba?d=Fri%20Jan%2011%202019'
const puppeteer = require('puppeteer')
const request = require('request')
const input = {username: 'frankmalpod', password: '123456'}
const Sequelize = require('sequelize')
const {User, Game} = require('./db/models')

// const scraper = function(url){
// rp(url).then(function(html){
//   console.log(html)
// }).catch(function(err){
//   console.log(err)
// })
// }

// const scraper = function(url){
//   puppeteer
//   .launch()
//   .then(function(browser){
//     return browser.newPage()
//   })
//   .then(function(page){
//     return page.goto(url).then(function(){
//       return page.content()
//     })
//   })
// .then(function(html){
//   $("a",html).each(function(){
//     console.log($(this).text())
//   })
// })
// }

// const scraper = function (){
// request(
//   {method:'GET',
//   url: 'http://api.scraperapi.com/?key=0e53723a08e56bfc7ef4a0202f992800&url='+encodeURIComponent('https://dailyfantasynerd.com/optimizer/fanduel/nba?d=Fri%20Jan%2011%202019')+'&render=true',
//   headers: {
//     Accept:'application/json',
//   },
// },
// function(error,response,body){
//   console.log('Status',response.statusCode)
//   console.log('Response', body)
// }
// )
// }

const scraper = async function(url) {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
  )
  await page.goto(url)
  // await page.waitForSelector('input-username');
  async function logIn() {
    try {
      await page.waitForSelector('#input-username', {timeout: 5000})
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
          const playerName = await page.evaluate(
            el => el.innerText,
            elements[0]
          )
          let salary = await page.evaluate(el => el.innerText, elements[5])
          const points = await page.evaluate(el => el.innerText, elements[29])
          salary = salary.replace(/[^\d.]/g, '')
          Game.create({
            Name: playerName,
            Score: parseInt(points),
            Salary: parseFloat(salary)
          })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function navigateToNextTable() {
    console.log('going to next table')
    try {
      page.click(
        '#wrap > div.container.projection > div:nth-child(5) > div.col-sm-4.text-center > ul > li:last-child > a',
        {timeout: 100}
      )
    } catch (error) {
      console.log(error)
    }
  }

  async function handleDayData() {
    const moreTablesToGo = true
    console.log('handling days data')
  }

  await logIn()
  await page.waitForNavigation()
  await goBackOneDay()
  await scrapeTable()
}

module.exports = scraper
