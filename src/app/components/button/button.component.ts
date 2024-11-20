import { Component, Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() btnClass: string = 'btn';
  @Input() buttonText: string = 'Fazer Pedido';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() eventClick = new EventEmitter<void>();

  onClick() {
    this.eventClick.emit();
  }
}


