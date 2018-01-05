import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService{
  http:any;
  apiKey:string;
  conditionsUrl:string;
  searchUrl:string;
  zmwUrl:string;

  constructor(http:HttpClient){
    this.http = http;
    this.apiKey = '0a67ff929e92da8a';
    this.conditionsUrl = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
    this.searchUrl = 'http://localhost:8100/search/aq?query=';
  }

  getWeatherByCityState(city, state){
    return this.http.get(this.conditionsUrl+ '/'+ state + '/'+ city+'.json')
      .map((res:Response) => res);
  }

  getweatherByZmw(zmw){
    return this.http.get(this.conditionsUrl+ '/zmw:' + zmw +'.json')
      .map((res:Response) => res);
  }

  searchLocations(searchStr){
    return this.http.get(this.searchUrl+ searchStr)
      .map((res:Response) => res);
  }

}

