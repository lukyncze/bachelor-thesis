import {Component, Input, OnChanges, inject} from '@angular/core';
import {Country} from '../country';
import {
  EnrichGuessedCountriesService,
  EnrichedGuessedCountries,
} from '../services/enrich-guessed-countries.service';

@Component({
  selector: 'guessed-countries-list',
  standalone: true,
  templateUrl: './guessed-countries-list.component.html',
})
export class GuessedCountriesListComponent implements OnChanges {
  private readonly enrichGuessedCountriesService = inject(EnrichGuessedCountriesService);
  protected enrichedGuessedCountries: EnrichedGuessedCountries = [];

  @Input({required: true}) countries: ReadonlyArray<Country> = [];
  @Input({required: true}) guessedCountries: ReadonlyArray<string> = [];
  @Input({required: true}) randomCountry!: Country;

  public ngOnChanges(): void {
    this.enrichedGuessedCountries = this.enrichGuessedCountriesService.enrich(
      this.countries,
      this.guessedCountries,
      this.randomCountry,
    );
  }
}
