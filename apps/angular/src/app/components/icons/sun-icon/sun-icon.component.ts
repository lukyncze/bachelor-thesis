import {Component, Input} from '@angular/core';

@Component({
  selector: 'sun-icon',
  standalone: true,
  templateUrl: './sun-icon.component.svg',
})
export class SunIconComponent {
  @Input() className = 'w-6 h-6';
}
