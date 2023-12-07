import {Component, Input} from '@angular/core';

@Component({
  selector: 'arrow-up',
  standalone: true,
  templateUrl: './arrow-up.component.html',
})
export class ArrowUpComponent {
  @Input() protected className = 'w-5 h-5 ml-1';
}
