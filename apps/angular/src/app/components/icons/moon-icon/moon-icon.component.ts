import {Component, Input} from '@angular/core';

@Component({
  selector: 'moon-icon',
  standalone: true,
  templateUrl: './moon-icon.component.svg',
})
export class MoonIconComponent {
  @Input() className = 'w-6 h-6';
}
