import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

  constructor(private data: DataService) { }
  bikes: Object;

  ngOnInit() {
    this.data.getBikes().subscribe(data => {
      this.bikes = data
      console.log(this.bikes);
    });
  }

}
