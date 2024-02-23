import {Component, Input} from '@angular/core';

@Component({
  selector: 'arrow-down-icon',
  standalone: true,
  templateUrl: './arrow-down-icon.component.svg',
})
export class ArrowDownIconComponent {
  @Input() className = 'w-5 h-5 ml-1';
}
