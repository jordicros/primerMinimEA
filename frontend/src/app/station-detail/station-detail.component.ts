import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.css']
})
export class StationDetailComponent implements OnInit {

  constructor(private data: DataService) { }
  station
  bike
  bikes = [];
  reception
  unassignedBikes = []
  trobat: Boolean = false;
  ngOnInit() {
    this.station = this.data.station;
    for(var i=0;i<this.station.bikes.length;i++)
    {
    this.data.getBikeDetail(this.station.name, this.station.bikes[i]).subscribe(data => { 
       this.bike = data;
       console.log(this.bike.bike);
      this.bikes.push(this.bike.bike);
 
    });}
    this.data.getBikes().subscribe(data => {
      this.reception = data

      for(var i=0; i<this.reception.length;i++){
        for(var j=0; j<this.bikes.length;j++){
          console.log(this.reception[i], this.bikes[j])
        if(this.reception[i]._id == this.bikes[j]._id )
          this.trobat=true;
        }
        if(!this.trobat){
          this.unassignedBikes.push(this.reception[i]);
        }
        this.trobat = false;
      }
    });
    console.log(this.bikes)
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
