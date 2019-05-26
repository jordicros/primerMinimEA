import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {StationsComponent} from './stations/stations.component';
import {StationDetailComponent} from './station-detail/station-detail.component'
import {BikeDetailComponent} from './bike-detail/bike-detail.component'
import {BikeListComponent} from './bike-list/bike-list.component'

const routes: Routes = [
  {path: 'stations', component: StationsComponent},
  {path: 'station/detail', component: StationDetailComponent},
  {path: 'bike/detail', component: BikeDetailComponent},
  {path: 'bike/all', component: BikeListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
