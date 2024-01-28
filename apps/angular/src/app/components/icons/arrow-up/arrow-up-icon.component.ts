import {Component, Input} from '@angular/core';

@Component({
  selector: 'arrow-up-icon',
  standalone: true,
  templateUrl: './arrow-up-icon.component.html',
})
export class ArrowUpIconComponent {
  @Input() className = 'w-5 h-5 ml-1';
}
