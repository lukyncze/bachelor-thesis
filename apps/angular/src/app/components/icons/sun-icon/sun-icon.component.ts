import {Component, Input} from '@angular/core';

@Component({
  selector: 'sun-icon',
  standalone: true,
  templateUrl: './sun-icon.component.html',
})
export class SunIconComponent {
  @Input() protected className = 'w-6 h-6';
}
