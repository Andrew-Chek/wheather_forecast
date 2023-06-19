import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ForecastResponse } from 'src/app/interfaces/forecastResponse';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastApiService {
  KEY = '07b12315c34a46478dc151446231906';
  API_URL = `http://api.weatherapi.com/v1/current.json?key=${this.KEY}`;
  forecast$!: BehaviorSubject<ForecastResponse>;

  constructor(private http: HttpClient) { 
    // subscribe to getForecast and set the response to forecast$
    this.forecast$ = new BehaviorSubject<ForecastResponse>({} as ForecastResponse);

    this.getForecast('London').subscribe((forecast) => { 
      this.forecast$.next(forecast);
    });
  }

  getForecast(city: string) { 
    return this.http.get<ForecastResponse>(`${this.API_URL}&q=${city}`);
  }
}
