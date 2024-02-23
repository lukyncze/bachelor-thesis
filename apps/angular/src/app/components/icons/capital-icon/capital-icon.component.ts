import {Component, Input} from '@angular/core';

@Component({
  selector: 'capital-icon',
  standalone: true,
  templateUrl: './capital-icon.component.svg',
})
export class CapitalIconComponent {
  @Input() className = 'inline-block w-14 h-14';
}
