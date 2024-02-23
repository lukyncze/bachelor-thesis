import {Component, Input} from '@angular/core';

@Component({
  selector: 'arrow-up-icon',
  standalone: true,
  templateUrl: './arrow-up-icon.component.svg',
})
export class ArrowUpIconComponent {
  @Input() className = 'w-5 h-5 ml-1';
}
