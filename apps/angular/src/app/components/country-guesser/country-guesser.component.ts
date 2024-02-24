import {Component, Input, OnInit, inject} from '@angular/core';
import {Countries, Country} from './country';
import {CountryGuessInputComponent} from './country-guess-input/country-guess-input.component';
import {GuessedCountriesListComponent} from './guessed-countries-list/guessed-countries-list.component';
import {HintBoxesComponent} from './hint-boxes/hint-boxes.component';
import {LoseModalComponent} from './modals/lose-modal/lose-modal.component';
import {WinModalComponent} from './modals/win-modal/win-modal.component';
import {CountryFlagPolyfillService} from './services/country-flag-polyfill.service';

export type GuessedCountries = ReadonlyArray<string>;

const defaultHintsEnabledCount = 1;
const maximumCountryGuesses = 8;

@Component({
  selector: 'country-guesser',
  standalone: true,
  templateUrl: './country-guesser.component.html',
  imports: [
    HintBoxesComponent,
    CountryGuessInputComponent,
    GuessedCountriesListComponent,
    WinModalComponent,
    LoseModalComponent,
  ],
})
export class CountryGuesserComponent implements OnInit {
  // Metoda inject slouží k získání instance služby.
  private readonly countryFlagPolyfillService = inject(CountryFlagPolyfillService);
  protected randomCountry!: Country;
  protected guessedCountries: GuessedCountries = [];
  protected hintsEnabledCount = defaultHintsEnabledCount;
  protected totalGuessesNeeded = 1;
  protected isWinModalOpen = false;
  protected isLoseModalOpen = false;

  @Input({required: true}) countries: Countries = [];

  public ngOnInit(): void {
    this.randomCountry = this.getRandomCountry();
    this.countryFlagPolyfillService.usePolyfill();
  }

  protected handleEvaluateGuessAndUpdateState(guessedCountry: string): void {
    if (this.hasGuessedCountry(guessedCountry)) {
      this.hintsEnabledCount = maximumCountryGuesses;
      this.totalGuessesNeeded = this.guessedCountries.length + 1;
      this.isWinModalOpen = true;
      return;
    }

    if (this.hasReachedMaximumGuesses() && !this.hasGuessedCountry(guessedCountry)) {
      this.isLoseModalOpen = true;
      return;
    }

    // Přiřazení nové reference (aktualizovaného) pole pro vlastnost guessedCountries.
    // Součástí aktualizovaného pole jsou hodnoty již hádaných zemí a nově hádanou zemí.
    this.guessedCountries = [...this.guessedCountries, guessedCountry];
    this.hintsEnabledCount++;
  }

  protected handleSetInitialState() {
    this.randomCountry = this.getRandomCountry();
    this.guessedCountries = [];
    this.hintsEnabledCount = defaultHintsEnabledCount;
  }

  private hasGuessedCountry(guessedCountry: string): boolean {
    return this.randomCountry.name.common === guessedCountry;
  }

  private hasReachedMaximumGuesses(): boolean {
    return this.guessedCountries.length + 1 === maximumCountryGuesses;
  }

  private getRandomCountry(): Country {
    return this.countries[Math.floor(Math.random() * this.countries.length)];
  }
}
