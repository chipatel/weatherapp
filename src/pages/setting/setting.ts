import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {WeatherService} from '../../services/weather.service';
import {WeatherPage} from "../weather/weather";

@Component({
  selector: 'setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  searchResults:any;
  searchStr:string;
  defaultLocation:any;

  constructor(public navCtrl: NavController, public weatherService:WeatherService) {

  }

  ngOnInit(){
    this.getDefaultLocation();

  }

  getDefaultLocation(){
    if(localStorage.getItem('location') !== undefined){
      this.defaultLocation = JSON.parse(localStorage.getItem('location')).name;
    } else {
      this.defaultLocation = '95101.1.99999';
    }
  }

  setDefaultLocation(location){
    this.searchResults = [];

    localStorage.setItem('location', JSON.stringify(location));
    this.searchStr = location.name;
    this.getDefaultLocation();
  }

  getQuery(){
    this.weatherService.searchLocations(this.searchStr).subscribe(res => {
      this.searchResults = res.RESULTS;
    });
  }

  saveChanges(){
    this.navCtrl.push(WeatherPage);
  }

}
