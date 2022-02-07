const express = require('express')
const axios = require('axios')
const router = express.Router()
const moment = require('moment')
const math = require('math')


router.get('/', async (req, res) => {
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
            'country=in&' +
            'apiKey=65d19618ed5f44369343808e565a89cf';
        const news_get = await axios.get(url)
        res.render('index', { articles: news_get.data.articles })
    } catch (error) {
        if (error.response) {
            console.log(error)
        }
    }
})

router.post('/search', async (req, res) => {
    const search = req.body.search;
    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=65d19618ed5f44369343808e565a89cf`
        const news_get = await axios.get(url);
        res.render('index', { articles: news_get.data.articles });
    } catch (error) {
        if (error.response) {
            console.log(error)
        }
    }
})

router.get('/news/:category', async (req, res) => {
    var category = req.params.category;
    try {
        var url = 'http://newsapi.org/v2/top-headlines?country=in&category=' + category + '&apiKey=65d19618ed5f44369343808e565a89cf';
        const news_get = await axios.get(url)
        res.render('category', { articles: news_get.data.articles })
    } catch (error) {
        if (error.response) {
            console.log(error)
        }
    }
})


module.exports = router