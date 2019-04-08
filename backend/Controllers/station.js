'use strict'

const mongoose = require('mongoose')
const Station = require('../Models/station')
const Bike = require('../Models/bike')


function createStation(req, res) {
    console.log("Create station en funcionament")
    const newStation = new Station({
        name: req.body.name,
        state: req.body.state
    })
    Station.find({name: req.body.name}, (err, result) => {
        if(err)
        return res.status(500).send({message: `Error al fer la consulta a la BBDD:  ${err}`});
        console.log("Station trobada: "+ result)
        if(!result.length)
        {
            console.log("Guardant nova station...")
            newStation.save((err)=> {
                if(err) 
                    return res.status(500).send({message: `Error al guardar station a la BBDD: ${err}`})
                return res.status(200).send({message: 'Station guardada correctament'});
            })
        
        }
        else {
        console.log("Ja existeix l'assignatura")
        return res.status(409).send({message: 'Assignatura ja existent'});}
    })
}
function allStations(req, res) {
    Station.find({}, (err, result)=>{
        if(err)
            return res.status(500).send({message: `Error al fer la consulta a la BBDD:  ${err}`});
        res.status(200).send(result);
        
    });
}
function addBike(req, res) {
    console.log("Afegint bike...")
    Station.find({name: req.body.name}, (err, result)=>{
        console.log("Station trobada: "+result)
        if(err)
            return res.status(500).send({message: `Error al fer la consulta a la BBDD:  ${err}`});
        if(!result.length)
            return res.status(404).send({message: 'Station no trobada'});
        else {
        Bike.findById(req.body.bikeid, (err, bike) => {
            console.log("Bike trobada: "+result)
        if(err)
            return res.status(500).send({message: `Error al fer la consulta a la BBDD:  ${err}`});
        if(bike == null)
             return res.status(404).send({message: 'Bike no trobada'});
        else {
        result[0].bikes.push(req.body.bikeid);
        result[0].save((err)=> {
            if(err) 
                return res.status(500).send({message: `Error al guardar station a la BBDD: ${err}`})
            return res.status(200).send({message: 'Bike afegida correctament'});
        });}
    })
        }
    });

}
function bikeDetail(req, res) {
    Station.find({name: req.params.station}, (err, result)=>{
        console.log("Station trobada: "+req.params.station)
        if(err)
            return res.status(500).send({message: `Error al fer la consulta a la BBDD:  ${err}`});
        if(!result.length)
            return res.status(404).send({message: 'Station no trobada'});
        else {
            Bike.findById(req.query.bike, (err, bike) => {
                console.log("Assignatura trobada: "+result)
            if(err)
                return res.status(500).send({message: `Error al fer la consulta a la BBDD:  ${err}`});
            if(bike == null)
                 return res.status(404).send({message: 'Bike no trobada'});
            else 
                 return res.status(200).send({messsage: 'Detall de la bike: ', bike});
            })
        }
    })

}
function deleteBike(req, res){
    console.log("Checkpoint")
    Station.find({name: req.body.station}, (err, result)=>{
        console.log("Station trobada: "+req.params.station)
        if(err)
            return res.status(500).send({message: `Error al fer la consulta a la BBDD:  ${err}`});
        if(!result.length)
            return res.status(404).send({message: 'Station no trobada'});
        else {
            
            result[0].bikes.splice(req.body.bikepos,1);
            result[0].save((err)=> {
                if(err) 
                    return res.status(500).send({message: `Error al guardar station a la BBDD: ${err}`})
                return res.status(200).send({message: 'Bike eliminada correctament'});
            });
        }
    })

}
module.exports = {
    allStations,
    createStation,
    addBike,
    bikeDetail,
    deleteBike
}