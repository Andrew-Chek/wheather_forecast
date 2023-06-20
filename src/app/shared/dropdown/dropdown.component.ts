import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() cities: string[] = ['New York', 'London', 'Paris', 'Tokyo'];
  @Output() selectedCity: EventEmitter<string> = new EventEmitter<string>();

  selectCity(city: string) {
    this.selectedCity.emit(city!);
  }
}
