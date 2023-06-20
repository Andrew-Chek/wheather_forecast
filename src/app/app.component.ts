import { Component } from '@angular/core';
import { ForecastApiService } from './features/forecast-info/forecast-api/forecast-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wheather_forecast';

  constructor(private apiService: ForecastApiService) {}

  getCityForecast(city: string) {
    this.apiService.getForecast(city).subscribe((forecast) => {
      this.apiService.setForecast(forecast);
    });
  }
}
