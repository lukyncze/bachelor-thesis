import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Countries} from '../country';
import {GuessedCountries} from '../country-guesser.component';

const countryHintsCount = 8;

@Component({
  selector: 'country-guess-input',
  standalone: true,
  templateUrl: './country-guess-input.component.html',
  imports: [CommonModule, FormsModule],
})
export class CountryGuessInputComponent implements OnChanges {
  private countriesWithoutAlreadyGuessed: Countries = [];
  protected filteredCountries: Countries = [];
  protected currentGuess = '';
  protected isOpen = false;
  protected isValidGuess = false;
  protected selectedGuessIndex = 0;

  @Input({required: true}) public countries: Countries = [];
  @Input({required: true}) public guessedCountries: GuessedCountries = [];

  @Output() public evaluateGuessAndUpdateState = new EventEmitter<string>();

  public ngOnChanges(): void {
    this.countriesWithoutAlreadyGuessed = this.countries.filter(
      country => !this.guessedCountries.includes(country.name.common),
    );
    this.filteredCountries = this.countriesWithoutAlreadyGuessed.slice(0, countryHintsCount);
  }

  protected handleGuessButtonClick(): void {
    if (this.isValidGuess) {
      this.evaluateGuessAndUpdateState.emit(this.currentGuess);
      this.handleChangeSelectedGuess('');
    }
  }

  protected handleChangeSelectedGuess(guessedCountry: string): void {
    this.updateGuessAndFilteredCountries(guessedCountry);
    this.isOpen = false;
  }

  protected handleInputChange(value: string): void {
    const formattedGuess = this.convertToFormattedGuess(value);
    this.updateGuessAndFilteredCountries(formattedGuess);
  }

  protected handleKeyDown(event: KeyboardEvent): void {
    if (!this.isOpen) return;

    if (event.key === 'ArrowUp') {
      this.changeSelectedGuessIndex(-1);
      event.preventDefault();
    } else if (event.key === 'ArrowDown') {
      this.changeSelectedGuessIndex(1);
      event.preventDefault();
    } else if (event.key === 'Enter' && this.filteredCountries.length > 0) {
      this.handleChangeSelectedGuess(this.filteredCountries[this.selectedGuessIndex].name.common);
    } else if (event.key === 'Escape') {
      this.isOpen = false;
    }
  }

  private updateGuessAndFilteredCountries(guessedCountry: string): void {
    this.currentGuess = guessedCountry;

    const filteredCountries = this.getFilteredCountries();
    const isValidGuess = !!filteredCountries.find(({name}) => name.common === this.currentGuess);

    this.isValidGuess = isValidGuess;
    this.filteredCountries = filteredCountries;
    this.clampSelectedGuessIndex();
  }

  private getFilteredCountries() {
    const filteredCountries = this.countriesWithoutAlreadyGuessed.filter(country =>
      country.name.common.toLowerCase().includes(this.currentGuess.toLowerCase()),
    );
    return filteredCountries.slice(0, countryHintsCount);
  }

  private clampSelectedGuessIndex(): void {
    if (
      this.filteredCountries.length > 0 &&
      this.selectedGuessIndex >= this.filteredCountries.length
    ) {
      this.selectedGuessIndex = this.filteredCountries.length - 1;
    }
  }

  private changeSelectedGuessIndex(value: number): void {
    if (this.selectedGuessIndex + value < 0) return;
    if (this.selectedGuessIndex + value >= this.filteredCountries.length) return;

    this.selectedGuessIndex += value;
  }

  private convertToFormattedGuess(guess: string) {
    const [firstLetter, ...rest] = guess;
    return firstLetter ? `${firstLetter.toUpperCase()}${rest.join('').toLowerCase()}` : '';
  }
}
