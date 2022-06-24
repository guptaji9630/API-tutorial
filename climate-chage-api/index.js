const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const { contains } = require('cheerio/lib/static')

const articles = []

const app = express()

app.get('/',(req,res)=>{
    res.json('Welcome to my climate change API')
})

app.get('/news', (req,res) => {
    axios.get('https://www.accuweather.com/en/in/delhi/202396/weather-forecast/202396')
    .then((response) => {
        const html =response.data
        const $ = cheerio.load(html)
      //console.log(html)

       $('a:contains("weather")', html).each(function() {
        const title = $(this).text()
        const url = $(this).attr('href')
        articles.push({
            title,
            url,
        })

       })

       res.json(articles)
    }).catch((err)=> console.log(err))
})
app.listen(PORT, () => console.log('server running on PORT  $(PORT)'))