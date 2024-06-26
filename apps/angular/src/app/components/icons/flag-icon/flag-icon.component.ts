import {Component, Input} from '@angular/core';

@Component({
  selector: 'flag-icon',
  standalone: true,
  templateUrl: './flag-icon.component.svg',
})
export class FlagIconComponent {
  @Input() className = 'inline-block w-14 h-14';
}
