import {Component, Input, OnChanges} from '@angular/core';
import {Country} from '../country';
import {
  GuessedCountriesWithAdditionalProps,
  getGuessedCountriesWithAdditionalProps,
} from '../helpers';

@Component({
  selector: 'guessed-countries-list',
  standalone: true,
  templateUrl: './guessed-countries-list.component.html',
})
export class GuessedCountriesListComponent implements OnChanges {
  protected guessedCountriesWithAdditionalProps: GuessedCountriesWithAdditionalProps = [];

  @Input({required: true}) countries: ReadonlyArray<Country> = [];
  @Input({required: true}) guessedCountries: ReadonlyArray<string> = [];
  @Input({required: true}) randomCountry!: Country;

  public ngOnChanges(): void {
    this.guessedCountriesWithAdditionalProps = getGuessedCountriesWithAdditionalProps(
      this.countries,
      this.guessedCountries,
      this.randomCountry,
    );
  }
}
