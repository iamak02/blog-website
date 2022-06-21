const express = require('express');
const connectDB = require('./db/connect_db.js');
const app = express()
const port = 2020
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// import router
const web = require('./routes/web.js');

// Connect Database
connectDB()

// router load
app.use('/', web)

// ejs setup
app.set('view engine', 'ejs')

// static file
app.use(express.static('public'))


app.listen(port, () => {
    console.log(`server start localhost: ${port}`)
});