import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.scss']
})
export class BikeDetailComponent implements OnInit {
  bike
  station
  constructor(private data: DataService) { }

  ngOnInit() {
    this.bike = this.data.bike;
    this.station = this.data.station;

    this.data.getBikeDetail(this.station.name, this.bike).subscribe(data => { 
      this.bike = data;
      this.bike = this.bike.bike;
        console.log(this.data.bike)
    });
  }

}
