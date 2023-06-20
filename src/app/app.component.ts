import { Component } from '@angular/core';
import { ForecastApiService } from './features/forecast-info/forecast-api/forecast-api.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wheather_forecast';
  cities = ['London', 'Paris', 'Berlin', 'Madrid', 'Rome', 'Prague', 'Vienna', 'Budapest', 'Warsaw', 'Amsterdam'];
  visible = this.apiService.openCityForm;
  errorDetected = false;

  constructor(private apiService: ForecastApiService) {}

  getCityForecast(city: string) {
    this.apiService.getForecast(city)
    .pipe(
      catchError((error) => {
        this.errorDetected = true;
        this.deleteCity(city);
        return throwError(() => new Error("API cannot find any info about your city, so it was deleted from the list"))
      })
    )
    .subscribe((forecast) => {
      this.errorDetected = false;
      this.apiService.setForecast(forecast);
    });
  }

  deleteCity(city: string) {
    this.cities = this.cities.filter((item) => item !== city);
  }

  openCityForm(isOpened: boolean) {
    this.visible = isOpened;
  }

  addNewCity(city: string) {
    this.cities.push(city);
  }
}
