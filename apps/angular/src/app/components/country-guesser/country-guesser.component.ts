import {Component, Input, OnInit} from '@angular/core';
import {Country} from './country';
import {CountryGuessInputComponent} from './country-guess-input/country-guess-input.component';
import {HintBoxesComponent} from './hint-boxes/hint-boxes.component';

const defaultHintsEnabledCount = 1;
const maximumCountryGuesses = 8;

@Component({
  selector: 'country-guesser',
  standalone: true,
  templateUrl: './country-guesser.component.html',
  imports: [HintBoxesComponent, CountryGuessInputComponent],
})
export class CountryGuesserComponent implements OnInit {
  protected randomCountry!: Country;
  protected guessedCountries: ReadonlyArray<string> = [];
  protected currentGuess = '';
  protected hintsEnabledCount = defaultHintsEnabledCount;
  protected totalGuessesNeeded = 1;
  protected isWinModalOpen = false;
  protected isLoseModalOpen = false;

  @Input({required: true}) countries: ReadonlyArray<Country> = [];

  public ngOnInit(): void {
    this.randomCountry = this.getRandomCountry();
    console.log(
      `🚀 ~ CountryGuesserComponent ~ ngOnInit ~ this.randomCountry:`,
      this.randomCountry.name.common,
    );
  }

  protected handleSetCurrentGuess(currentGuess: string): void {
    console.log(
      `🚀 ~ CountryGuesserComponent ~ handleSetCurrentGuess ~ currentGuess:`,
      currentGuess,
    );
    this.currentGuess = currentGuess;
  }

  protected handleEvaluateGuessAndUpdateState(): void {
    if (this.hasGuessedCountry()) {
      this.hintsEnabledCount = maximumCountryGuesses;
      this.totalGuessesNeeded = this.guessedCountries.length + 1;
      this.isWinModalOpen = true;
      return;
    }

    if (this.hasReachedMaximumGuesses() && !this.hasGuessedCountry()) {
      this.isLoseModalOpen = true;
      return;
    }

    this.currentGuess = '';
    this.guessedCountries = [...this.guessedCountries, this.currentGuess];
    this.hintsEnabledCount++;
  }

  private hasGuessedCountry(): boolean {
    return this.currentGuess === this.randomCountry.name.common;
  }
  private hasReachedMaximumGuesses(): boolean {
    return this.guessedCountries.length + 1 === maximumCountryGuesses;
  }

  private getRandomCountry(): Country {
    return this.countries[Math.floor(Math.random() * this.countries.length)];
  }
}
