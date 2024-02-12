import {Component, Input} from '@angular/core';
import {Country} from './country';
import {HintBoxesComponent} from './hint-boxes/hint-boxes.component';

@Component({
  selector: 'country-guesser',
  standalone: true,
  templateUrl: './country-guesser.component.html',
  imports: [HintBoxesComponent],
})
export class CountryGuesserComponent {
  @Input() countries: ReadonlyArray<Country> = [];
}
