import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';

// Nastavení komponenty.
@Component({
  selector: 'counter-button',
  standalone: true,
  templateUrl: './counter-button.component.html',
  imports: [CommonModule],
})
export class CounterButtonComponent {
  // Vstupní vlastnosti komponenty.
  @Input() public className = '';

  // Výstupní vlastnosti komponenty.
  @Output() public buttonClicked = new EventEmitter<void>();
}
