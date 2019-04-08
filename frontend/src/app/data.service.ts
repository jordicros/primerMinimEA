import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  /* Variables "SINGLETON" 
  subjects
  assignatura
  estudiant*/
  stations
  station
  bike
  constructor(private http: HttpClient) { }
  
  /*METODES HTTP
  getBikes() {
    return this.http.get('http://localhost:3001/api/bike/all')
  }*/
  getStations(){
    return this.http.get('http://localhost:3001/api/station/all')
  }
  getBikes(){
    return this.http.get('http://localhost:3001/api/bike/all')
  }
  getBikeDetail(station: Object, id: Object) {
    return this.http.get(`http://localhost:3001/api/station/${station}?bike=${id}`)
  }
  addBikeToStation(name, id) {
    var data = {name: name,
    bikeid: id}
    console.log(data)
    return this.http.post('http://localhost:3001/api/station/bike/add', data, {observe: 'response'})
  } 
  deleteBikeFromStation(name, id) {
    var data = {station: name,
    bikepos: id}
    return this.http.post('http://localhost:3001/api/station/bike/delete', data, {observe: 'response'}  )
  }
}
