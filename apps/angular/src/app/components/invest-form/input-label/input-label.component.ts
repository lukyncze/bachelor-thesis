import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'input-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-label.component.html',
})
export class InputLabelComponent {
  @Input({required: true}) id = '';
}
