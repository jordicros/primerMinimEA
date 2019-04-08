'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BikeSchema = Schema({
    name: String,
    kms: Number,
    description: String
})

module.exports = mongoose.model('Bike', BikeSchema)