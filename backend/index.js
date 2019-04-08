'use strict'

const mongoose = require ('mongoose')
const app = require('./app')
const config = require ('./config')

//Connexió amb BBDD
mongoose.connect(config.db, (err, res) => {
    if (err)
        return console.log(`Error al connectar la base de dades: ${err}`)
    console.log('Connexió amb la BBDD establerta')
    //Listener al port 3001, app s'especifica a un altre js
    app.listen(config.port, () => {
        console.log(`API REST corriendo en http://localhost:${config.port}`)
    })
})