import { Component, OnInit } from '@angular/core';
import { ForecastResponse } from 'src/app/interfaces/ForecastResponse';
import { ForecastApiService } from '../forecast-info/forecast-api/forecast-api.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  forecast: ForecastResponse = this.apiService.forecast$.value;

  constructor(private apiService: ForecastApiService) { }

  ngOnInit() { 
    this.apiService.forecast$.subscribe((forecast) => { 
      this.forecast = forecast;
    })
  }
}
