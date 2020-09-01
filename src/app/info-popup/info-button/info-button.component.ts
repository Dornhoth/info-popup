import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-button',
  templateUrl: './info-button.component.html',
  styleUrls: ['./info-button.component.scss'],
})
export class InfoButtonComponent {
  @Output() infoButtonClicked = new EventEmitter<void>();

  toggleInfoByClick(): void {
    this.infoButtonClicked.emit();
  }
}
