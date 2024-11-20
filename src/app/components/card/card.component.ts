import { Component, Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() comida: any;

  @Output() eventClick = new EventEmitter<void>();

  onClick() {
    this.eventClick.emit();
  }
}
