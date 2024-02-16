import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Countries, Country} from '../country';
import {GuessedCountries} from '../country-guesser.component';

const countryHintsCount = 8;

@Component({
  selector: 'country-guess-input',
  standalone: true,
  templateUrl: './country-guess-input.component.html',
  imports: [FormsModule],
})
export class CountryGuessInputComponent implements OnChanges {
  protected isOpen = false;
  protected isValidGuess = false;
  protected selectedGuessIndex = 0;
  protected filteredCountries: Countries = [];

  @Input({required: true}) public countries: Countries = [];
  @Input({required: true}) public currentGuess = '';
  @Input({required: true}) public guessedCountries: GuessedCountries = [];

  @Output() public setCurrentGuess = new EventEmitter<string>();
  @Output() public evaluateGuessAndUpdateState = new EventEmitter<void>();

  public ngOnChanges(): void {
    this.updateFilteredCountries();
  }

  protected handleChangeSelectedGuess(guess: string): void {
    this.setCurrentGuess.emit(guess);
    this.selectedGuessIndex = 0;
    this.isOpen = false;

    this.updateFilteredCountries();
  }

  protected handleKeyDown = ({key}: KeyboardEvent) => {
    if (!this.isOpen) return;

    if (key === 'ArrowDown') {
      this.handleChangeSelectedGuessIndex(1);
    } else if (key === 'ArrowUp') {
      this.handleChangeSelectedGuessIndex(-1);
    } else if (key === 'Enter') {
      this.handleChangeSelectedGuess(this.filteredCountries[this.selectedGuessIndex].name.common);
    } else if (key === 'Escape') {
      this.isOpen = false;
    }

    this.updateFilteredCountries();
  };

  private handleChangeSelectedGuessIndex(value: number): void {
    if (this.selectedGuessIndex + value < 0) return;
    if (this.selectedGuessIndex + value >= this.filteredCountries.length) return;

    this.selectedGuessIndex += value;
  }

  private updateFilteredCountries(): void {
    const countriesWithoutAlreadyGuesses = this.countries.filter(country =>
      this.filterOutAlreadyGuessedCountries(country),
    );
    const filteredCountries = countriesWithoutAlreadyGuesses.filter(country =>
      this.filterOutSearchByUserGuess(country),
    );

    this.filteredCountries = filteredCountries.slice(0, countryHintsCount);
    this.isValidGuess = !!countriesWithoutAlreadyGuesses.find(country =>
      this.searchForExactCountry(country),
    );
    this.clampSelectedGuessIndex();
  }

  private filterOutAlreadyGuessedCountries(country: Country): boolean {
    return !this.guessedCountries.includes(country.name.common);
  }

  private filterOutSearchByUserGuess(country: Country): boolean {
    return country.name.common.toLowerCase().includes(this.currentGuess.toLowerCase());
  }

  private searchForExactCountry(country: Country): boolean {
    return country.name.common.toLowerCase() === this.currentGuess.toLowerCase();
  }

  private clampSelectedGuessIndex(): void {
    if (this.selectedGuessIndex >= this.filteredCountries.length) {
      this.selectedGuessIndex = this.filteredCountries.length - 1;
    }
  }
}
