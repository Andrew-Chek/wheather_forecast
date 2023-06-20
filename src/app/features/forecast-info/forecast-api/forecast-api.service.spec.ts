import { ForecastResponse } from './../../../interfaces/ForecastResponse';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ForecastApiService } from './forecast-api.service';

describe('ForecastApiService', () => {
  let service: ForecastApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ForecastApiService]
    });
    service = TestBed.inject(ForecastApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should make an HTTP GET request to retrieve forecast data for a city', () => {
    const cityName = 'London';

    service.getForecast(cityName).subscribe((forecast) => {
      expect(forecast).toBeTruthy();
      expect(forecast.location.name).toBe(cityName);
    });

    const request = httpMock.match(`${service.API_URL}&q=${cityName}`);
    expect(request[0].request.method).toBe('GET');

    const mockResponse = {
      city: cityName,
      // Add other response properties as needed
    };
    request[0].flush(mockResponse);
  });

  it('should set the forecast$ BehaviorSubject when calling setForecast', () => {
    const mockForecast: ForecastResponse = {
      location: {
        name: 'London',
        region: 'City of London, Greater London',
        country: 'United Kingdom'
      },
      current: {
        temp_c: 10,
        condition: {
          text: 'Partly cloudy',
          icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
          code: 1003
        },
        "wind_mph": 11.9,
        "wind_kph": 19.1,
        "wind_degree": 170,
        "wind_dir": "S",
        "humidity": 88,
        "feelslike_c": 20.0,
        "feelslike_f": 68.0,
        "is_day": 1,
        "last_updated_epoch": 1620374400,
        temp_f: 50,
      }
    }

    service.setForecast(mockForecast);
    const request = httpMock.expectOne(`${service.API_URL}&q=London`);

    service.forecast$.subscribe((forecast) => {
      expect(forecast).toEqual(mockForecast);
    });
  });
});