import {Component, Input} from '@angular/core';

@Component({
  selector: 'close-icon',
  standalone: true,
  templateUrl: './close-icon.component.html',
})
export class CloseIconComponent {
  @Input() protected className = 'w-6 h-6';
}
