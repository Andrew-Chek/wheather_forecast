import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CityFormComponent } from './city-form/city-form.component';
import { ButtonComponent } from './button/button.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    DropdownComponent,
    CityFormComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
     ReactiveFormsModule,
     MatIconModule
  ],
  exports: [
    DropdownComponent,
    CityFormComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
