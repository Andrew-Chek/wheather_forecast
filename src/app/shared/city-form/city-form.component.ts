import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface City {
  name: string;
}

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent {
  protected city: City = {name: ""};
  get name() { return this.cityForm.get('name'); }
  @Input() submitText:string = '';

  @Output() sentCity = new EventEmitter<string>;
  @Output() closedPopup = new EventEmitter<boolean>();

  @Input() visible = false;
  public checkErrors = false;
  public cityForm = new FormGroup({
    name: new FormControl(this.city.name, [
      Validators.required,
      Validators.minLength(4)]),
  })

  closePopup() {
    this.visible = false;
    this.closedPopup.emit(false);
    this.cityForm.reset();
  }

  sendForm() {
    if (this.cityForm.valid) {
      this.city.name = this.cityForm.value.name!;
      this.sentCity.emit(this.city.name);
      this.closePopup();
    } else {
      this.checkErrors = true;
    }
  }
}
