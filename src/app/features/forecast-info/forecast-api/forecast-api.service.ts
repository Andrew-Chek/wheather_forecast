import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ForecastResponse } from 'src/app/interfaces/ForecastResponse';

@Injectable({
  providedIn: 'root'
})
export class ForecastApiService implements OnDestroy{
  KEY = '07b12315c34a46478dc151446231906';
  API_URL = `https://api.weatherapi.com/v1/current.json?key=${this.KEY}`;
  forecast$!: BehaviorSubject<ForecastResponse>;
  openCityForm: boolean = false;

  constructor(private http: HttpClient) { 
    // subscribe to getForecast and set the response to forecast$
    this.forecast$ = new BehaviorSubject<ForecastResponse>({} as ForecastResponse);

    this.getForecast('London').subscribe((forecast) => { 
      this.forecast$.next(forecast);
    });
  }

  ngOnDestroy(): void {
    this.forecast$.unsubscribe();
  }

  getForecast(city: string) { 
    return this.http.get<ForecastResponse>(`${this.API_URL}&q=${city}`);
  }

  setForecast(forecast: ForecastResponse) { 
    this.forecast$.next(forecast);
  }
}
