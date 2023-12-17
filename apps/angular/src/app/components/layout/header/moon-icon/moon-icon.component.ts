import {Component, Input} from '@angular/core';

@Component({
  selector: 'moon-icon',
  standalone: true,
  templateUrl: './moon-icon.component.html',
})
export class MoonIconComponent {
  @Input() protected className = 'w-6 h-6';
}
