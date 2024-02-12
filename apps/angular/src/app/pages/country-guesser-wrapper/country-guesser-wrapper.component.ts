import {Component} from '@angular/core';
import {Country} from '../../components/country-guesser/country';
import {CountryGuesserComponent} from '../../components/country-guesser/country-guesser.component';
import {mockedData} from '../../components/country-guesser/mockedData';

@Component({
  selector: 'country-guesser-wrapper',
  standalone: true,
  templateUrl: './country-guesser-wrapper.component.html',
  imports: [CountryGuesserComponent],
})
export class CountryGuesserWrapperComponent {
  protected countries: ReadonlyArray<Country> = mockedData;
}
