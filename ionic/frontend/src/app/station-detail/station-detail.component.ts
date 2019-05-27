import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BikeListComponent } from '../bike-list/bike-list.component';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.scss']
})
export class StationDetailComponent implements OnInit {

  constructor(private data: DataService) { }
  station
  stations
  bike
  bikes = [];
  reception
  unassignedBikes = []
  trobat: Boolean = false;
  ngOnInit() {
    this.bikes = []
    this.unassignedBikes = []
    this.station = this.data.station
    this.data.getStations().subscribe(data => {
      this.stations = data
      this.data.stations = data
      console.log(this.station, this.stations)
      for(let i=0;i<this.data.stations.length;i++){
        if(this.data.stations[i]._id == this.station._id){this.station = this.data.stations[i]}
      }
 for(var i=0;i<this.station.bikes.length;i++)
    {
    this.data.getBikeDetail(this.station.name, this.station.bikes[i]).subscribe(data => { 
       this.bike = data;
      this.bikes.push(this.bike.bike);
      
    });}
    this.data.getBikes().subscribe(data => {
      this.reception = data
      let trobat = false;
      console.log(this.reception, this.bikes)
      
        this.unassignedBikes = this.reception;
      
      //Hauria de detectar les bicis que no estan a la llista .bikes, pero no ho fa be.
      /*for(var i=0; i<this.reception.length;i++){
        for(var j=0; j<this.bikes.length;j++){
          console.log(this.reception[i]._id, this.bikes[j]._id)
        if(JSON.stringify(this.reception[i]._id) == JSON.stringify(this.bikes[j]._id) ){
          trobat=true;
          console.log("no sassigna")
        }
        else
          {trobat=false
          console.log("s'assignaria")}}
        if(!trobat){
          console.log("sassigna")
          this.unassignedBikes.push(this.reception[i]);
        }
        trobat = false;
      }*/
      
    });
    });
   
  }
  detallsBike(bike: Object){
    this.data.bike = bike;
  }
  esborrarBike(i: Number){
    this.data.deleteBikeFromStation(this.station.name, i).subscribe(data => { 
   });}
  addBike(bike: Object){
    this.data.addBikeToStation(this.station.name, bike).subscribe(data =>{

    }); }

  }
