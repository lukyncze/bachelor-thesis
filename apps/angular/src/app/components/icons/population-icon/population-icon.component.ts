import {Component, Input} from '@angular/core';

@Component({
  selector: 'population-icon',
  standalone: true,
  templateUrl: './population-icon.component.svg',
})
export class PopulationIconComponent {
  @Input() className = 'inline-block w-14 h-14';
}
