import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { CityFormComponent } from './city-form/city-form.component';



@NgModule({
  declarations: [
    DropdownComponent,
    CityFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DropdownComponent,
    CityFormComponent
  ]
})
export class SharedModule { }
