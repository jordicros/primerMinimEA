'use strict'

const mongoose = require('mongoose')
const Bike = require('../Models/bike')


function createBike(req, res) {
    console.log("Create bike en funcionament")
    const newBike= new Bike({
        name: req.body.name,
        kms: req.body.kms,
        description: req.body.description
        })
        console.log("Guardant nova bike...")
        newBike.save((err)=> {
        if(err) 
            return res.status(500).send({message: `Error al guardar bike a la BBDD: ${err}`})
        return res.status(200).send({message: 'Bike guardada correctament'});
        })
        
        
}
function getBikes(req, res) {
    Bike.find({}, (err, result)=>{
        if(err)
            return res.status(500).send({message: `Error al fer la consulta a la BBDD:  ${err}`});
        res.status(200).send(result);
        
    });
}

module.exports = {
    createBike,
    getBikes
}