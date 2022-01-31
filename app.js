const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
//const bodyParser = require('body-parser');
const moment = require('moment');
const homeRoute = require('./routes/home');
app.locals.moment = moment;

// template engine  
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));
app.use('/', homeRoute)

app.set('views', './views')


app.listen(port, () => {
    console.log("Server is running in port " + port)
})
