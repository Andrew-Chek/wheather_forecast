import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastInfoComponent } from './forecast-info.component';



@NgModule({
  declarations: [
    ForecastInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ForecastInfoComponent
  ]
})
export class ForecastInfoModule { }
