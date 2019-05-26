import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NavegadorComponent } from './navegador/navegador.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StationsComponent } from './stations/stations.component';
import { StationDetailComponent } from './station-detail/station-detail.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { BikeListComponent } from './bike-list/bike-list.component';

@NgModule({
  declarations: [AppComponent,
    NavegadorComponent,
    StationsComponent,
    StationDetailComponent,
    BikeDetailComponent,
    BikeListComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
