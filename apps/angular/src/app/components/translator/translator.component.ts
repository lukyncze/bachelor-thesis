import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {Subject, catchError, debounceTime, distinctUntilChanged, throwError} from 'rxjs';
import {Option} from '../dropdown/dropdown.component';
import {LanguageDropdownComponent} from './language-dropdown/language-dropdown.component';
import {languages as availableLanguages} from './languages';
import {TranslationInputComponent} from './translation-input/translation-input.component';
import {TranslationOutputComponent} from './translation-output/translation-output.component';
import {TranslationService} from './translation/translation.service';

@Component({
  selector: 'translator',
  standalone: true,
  templateUrl: './translator.component.html',
  imports: [
    CommonModule,
    LanguageDropdownComponent,
    TranslationInputComponent,
    TranslationOutputComponent,
  ],
})
export class TranslatorComponent {
  private inputValuesChanges = new Subject<string>();

  protected languages: ReadonlyArray<Option> = availableLanguages;
  protected inputText = '';
  protected outputText = '';
  protected outputLanguage = this.languages[0].value;
  protected loading = false;
  protected error: Error | null = null;

  constructor(private readonly translationService: TranslationService) {
    this.setupInputChangeSubscription();
  }

  protected handleInputTextChange(inputText: string): void {
    this.inputText = inputText;
    this.inputValuesChanges.next(inputText);
  }

  protected handleLanguageChange(outputLanguage: Option): void {
    this.outputLanguage = outputLanguage.value;
    this.inputValuesChanges.next(outputLanguage.value);
  }

  private setupInputChangeSubscription(): void {
    this.inputValuesChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(() => this.triggerTranslation());
  }

  private triggerTranslation(): void {
    this.loading = true;

    this.translationService
      .getTranslation(this.inputText, this.outputLanguage)
      .pipe(catchError(error => this.handleError(error)))
      .subscribe({
        next: response => (this.outputText = response),
        error: error => (this.error = error),
        complete: () => (this.loading = false),
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private handleError(error: any) {
    return throwError(
      () => new Error(`Something went wrong: ${error.status} Error. Please reload the page.`),
    );
  }
}
