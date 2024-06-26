import {Component, Input} from '@angular/core';

@Component({
  selector: 'error-icon',
  standalone: true,
  templateUrl: './error-icon.component.svg',
})
export class ErrorIconComponent {
  @Input() className = 'w-6 h-6';
}
