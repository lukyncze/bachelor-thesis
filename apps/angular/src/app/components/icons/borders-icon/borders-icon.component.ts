import {Component, Input} from '@angular/core';

@Component({
  selector: 'borders-icon',
  standalone: true,
  templateUrl: './borders-icon.component.svg',
})
export class BordersIconComponent {
  @Input() className = 'inline-block w-14 h-14';
}
