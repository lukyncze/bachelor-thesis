import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'counter-button',
  standalone: true,
  templateUrl: './counter-button.component.html',
  imports: [CommonModule],
})
export class CounterButtonComponent {
  @Input() public className = '';

  @Output() public buttonClicked = new EventEmitter<void>();
}
