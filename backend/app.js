'use strict'

const express = require ('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')

//Implementa al CORS a tot el listener
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","http://localhost:8100");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    }
    next()
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api', api)

module.exports = app