import { Condition } from "./Condition";

export interface CurrentDay { 
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    condition: Condition;
    feelslike_c: number;
    feelslike_f: number;
}