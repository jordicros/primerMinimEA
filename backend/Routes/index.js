'use strict'

//Inclou la relacio de les rutes a consultar i les funcions que s'executen al consultar-les.

const express = require('express')
const api = express.Router()
const stationCtrl = require('../Controllers/station')
const bikeCtrl = require('../Controllers/bike')

api.post('/station/add', stationCtrl.createStation)
api.get('/station/all', stationCtrl.allStations)
api.get('/station/:station', stationCtrl.bikeDetail)
api.post('/station/bike/add', stationCtrl.addBike)
api.post('/bike/add', bikeCtrl.createBike)
api.get('/bike/all', bikeCtrl.getBikes)
api.post('/station/bike/delete', stationCtrl.deleteBike)
//api.delete()

module.exports = api