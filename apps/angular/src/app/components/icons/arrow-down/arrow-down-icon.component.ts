import {Component, Input} from '@angular/core';

@Component({
  selector: 'arrow-down-icon',
  standalone: true,
  templateUrl: './arrow-down-icon.component.html',
})
export class ArrowDownIconComponent {
  @Input() protected className = 'w-5 h-5 ml-1';
}
