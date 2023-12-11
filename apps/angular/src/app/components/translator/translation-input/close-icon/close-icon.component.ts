import {Component, Input} from '@angular/core';

@Component({
  selector: 'close-icon',
  standalone: true,
  templateUrl: './close-icon.component.html',
})
export class CloseIconComponent {
  @Input() protected className = 'w-5 h-5 ml-1';
}
