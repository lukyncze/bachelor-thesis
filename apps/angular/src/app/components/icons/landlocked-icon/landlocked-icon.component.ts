import {Component, Input} from '@angular/core';

@Component({
  selector: 'landlocked-icon',
  standalone: true,
  templateUrl: './landlocked-icon.component.html',
})
export class LandlockedIconComponent {
  @Input() className = 'inline-block w-14 h-14';
}
