const PORT = 8001
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
    console.log("I start here")
    axios.get('https://easylearning.guru/')
    .then((response) => {
        // console.log(response.data)
        const html =response.data
        const $ = cheerio.load(html)
        //  console.log(html)
        console.log($('img'))
        $('img').each((data)=>{
            console.log(data)
        })

        var t = [1,2,3,4]
        // t.each()
    //    $('a:contains("code")', html).each(function(data2) {
    //     const title = $(dat2).text()
    //     console.log(dat2)
    //     const url = $(this).attr('href')
    //     articles.push({
    //         title,
    //         url,
    //     })

    //    })
    // console.log($.html())

    //    console.log(articles)
       res.send($.html())
    }).catch((err)=> {
        console.log("I am here you idiot")
res.send("I am Error Baby")
        // console.log(err)
    })
    console.log("I am here")
})
app.listen(PORT, () => console.log('server running on PORT  $(PORT)'))