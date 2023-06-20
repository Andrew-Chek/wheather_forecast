import { Component, OnInit } from '@angular/core';
import { ForecastApiService } from './forecast-api/forecast-api.service';
import { ForecastResponse } from 'src/app/interfaces/ForecastResponse';

@Component({
  selector: 'app-forecast-info',
  templateUrl: './forecast-info.component.html',
  styleUrls: ['./forecast-info.component.scss']
})
export class ForecastInfoComponent implements OnInit {
  forecast: ForecastResponse = this.apiService.forecast$.value;
  isCheckedCelsius: boolean = false;
  isCheckedMile: boolean = false;
  constructor(private apiService: ForecastApiService) { }

  ngOnInit() { 
    this.apiService.forecast$.subscribe((forecast) => { 
      this.forecast = forecast;
    })
  }

  changeCelsiusFlag(input: HTMLInputElement) { 
    this.isCheckedCelsius = input.checked;
  }

  changeMileFlag(input: HTMLInputElement) { 
    this.isCheckedMile = input.checked;
  }
}
