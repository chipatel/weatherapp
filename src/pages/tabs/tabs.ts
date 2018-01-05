import { Component } from '@angular/core';

import { SettingPage } from '../setting/setting';
import {WeatherPage} from "../weather/weather";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WeatherPage;
  tab2Root = SettingPage;

  constructor() {

  }
}
