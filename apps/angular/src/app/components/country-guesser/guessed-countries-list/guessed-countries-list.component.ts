import {Component, Input, OnChanges, inject} from '@angular/core';
import {Countries, Country} from '../country';
import {GuessedCountries} from '../country-guesser.component';
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
  // Metoda inject slouží k získání instance služby.
  private readonly enrichGuessedCountriesService = inject(EnrichGuessedCountriesService);
  protected enrichedGuessedCountries: EnrichedGuessedCountries = [];

  @Input({required: true}) countries: Countries = [];
  @Input({required: true}) guessedCountries: GuessedCountries = [];
  @Input({required: true}) randomCountry!: Country;

  // Metoda ngOnChanges je volána po každé změně hodnoty vstupní vlastnosti.
  public ngOnChanges(): void {
    this.enrichedGuessedCountries = this.enrichGuessedCountriesService.enrich(
      this.countries,
      this.guessedCountries,
      this.randomCountry,
    );
  }
}
