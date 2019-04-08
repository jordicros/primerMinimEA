'use strict'

//Fitxer de configuració que inclou paràmetres que es canvien ràpid aqui i afecten a diverses parts del codi.

module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB || 'mongodb://localhost:27017/primerbasic'
}