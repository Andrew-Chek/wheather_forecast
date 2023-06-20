import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output() openedDialog: EventEmitter<boolean> = new EventEmitter(false);

  constructor() {}

  openDialog() {
    this.openedDialog.emit(true);
  }
}
