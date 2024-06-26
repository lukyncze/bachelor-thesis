import {Component, Input} from '@angular/core';

@Component({
  selector: 'close-icon',
  standalone: true,
  templateUrl: './close-icon.component.svg',
})
export class CloseIconComponent {
  @Input() className = 'w-6 h-6';
}
