import { Component, OnInit } from '@angular/core';
import { ForecastApiService } from './forecast-api/forecast-api.service';
import { ForecastResponse } from 'src/app/interfaces/forecastResponse';

@Component({
  selector: 'app-forecast-info',
  templateUrl: './forecast-info.component.html',
  styleUrls: ['./forecast-info.component.scss']
})
export class ForecastInfoComponent implements OnInit {
  forecast: ForecastResponse = this.apiService.forecast$.value;
  constructor(private apiService: ForecastApiService) { }

  ngOnInit() { 
    this.apiService.forecast$.subscribe((forecast) => { 
      this.forecast = forecast;
    })
  }
}
