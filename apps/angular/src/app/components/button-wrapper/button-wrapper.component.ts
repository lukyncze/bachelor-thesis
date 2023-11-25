import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'button-wrapper',
  standalone: true,
  templateUrl: './button-wrapper.component.html',
  imports: [CommonModule],
})
export class ButtonWrapperComponent {
  @Input() public className = '';

  @Output() public onClick = new EventEmitter<void>();
}
