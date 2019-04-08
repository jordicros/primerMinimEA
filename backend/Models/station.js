'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Bike = require('./bike')

const StationSchema = Schema({
    name: String,
    state: String,
    bikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bike'}]
})

module.exports = mongoose.model('Station', StationSchema)