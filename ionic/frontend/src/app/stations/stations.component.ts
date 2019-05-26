import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {

  constructor(private data: DataService) { }
  stations: Object = this.data.stations

  ngOnInit() {
    this.data.getStations().subscribe(data => {
      this.stations = data
      this.data.stations = data
      console.log(this.stations);
    });
  }
  detalls(station: Object){
    this.data.station = station;
  }

}
