import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {WeatherService} from '../../services/weather.service'

@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})

export class WeatherPage {
  zmw:string;
  city: string;
  state: string;
  weather: any;
  searchStr:string;
  searchResults:any;

  constructor(public navCtrl: NavController, public weatherService: WeatherService) {
    this.city = 'San_Francisco';
    this.state = 'CA'
  }

  ngOnInit() {
    this.getDefaultLocation();
    this.weatherService.getweatherByZmw(this.zmw).subscribe(weather => {
      this.weather = weather.current_observation;
    });
  }

  getDefaultLocation(){
    if(localStorage.getItem('location') !== undefined){
      this.zmw = JSON.parse(localStorage.getItem('location')).zmw;
    } else {
      this.zmw = '95101.1.99999';
    }
  }

  getQuery(){
    this.weatherService.searchLocations(this.searchStr).subscribe(res => {
      this.searchResults = res.RESULTS;
    });
  }

  chooseLocation(location){
    this.searchResults = [];
    this.weatherService.getweatherByZmw(location.zmw).subscribe(weather => {
      this.weather = weather.current_observation;
    });
  }
}
