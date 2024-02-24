import {Component, Input} from '@angular/core';

@Component({
  selector: 'bars-icon',
  standalone: true,
  templateUrl: './bars-icon.component.svg',
})
export class BarsIconComponent {
  @Input() className = 'w-6 h-6';
}
