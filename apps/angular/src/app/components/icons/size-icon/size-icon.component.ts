import {Component, Input} from '@angular/core';

@Component({
  selector: 'size-icon',
  standalone: true,
  templateUrl: './size-icon.component.html',
})
export class SizeIconComponent {
  @Input() className = 'inline-block w-14 h-14';
}
