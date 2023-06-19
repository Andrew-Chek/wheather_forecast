import { CityLocation } from "./CityLocation";
import { CurrentDay } from "./CurrentDay";

export interface ForecastResponse { 
    location: CityLocation;
    current: CurrentDay;
}