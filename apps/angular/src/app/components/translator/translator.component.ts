import {CommonModule} from '@angular/common';
import {Component, OnDestroy} from '@angular/core';
import {Subject, catchError, debounceTime, distinctUntilChanged, takeUntil, throwError} from 'rxjs';
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
export class TranslatorComponent implements OnDestroy {
  // Slouží ke zrušení subscriptionů při zničení komponenty.
  private destroy$: Subject<void> = new Subject();
  // Slouží k naslouchání na změny vstupního textu a výstupního jazyka.
  private inputValuesChanges$ = new Subject<string>();

  protected languages: ReadonlyArray<Option> = availableLanguages;
  protected inputText = '';
  protected outputText = '';
  protected outputLanguage = this.languages[0].value;
  protected loading = false;
  protected error: Error | null = null;

  constructor(private readonly translationService: TranslationService) {
    // Inicializace metody sloužící pro získávání překladu po změně vstupních hodnot.
    this.setupInputChangeSubscription();
  }

  public ngOnDestroy(): void {
    // Slouží k manuálnímu unsubscribe všech observables při zničení komponenty
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected handleInputTextChange(inputText: string): void {
    this.inputText = inputText;
    // Synchronní aktualizace hodnoty observable (v tomto případě Subjectu)
    // Slouží pro následné operace při změně hodnoty observable
    this.inputValuesChanges$.next(inputText);
  }

  protected handleLanguageChange(outputLanguage: Option): void {
    this.outputLanguage = outputLanguage.value;
    // Synchronní aktualizace hodnoty observable (v tomto případě Subjectu)
    // Slouží pro následné operace při změně hodnoty observable
    this.inputValuesChanges$.next(outputLanguage.value);
  }

  private setupInputChangeSubscription(): void {
    // Naslouchá změnám vstupního textu a výstupního jazyka.
    // Operátor debounceTime zajistí, že se změna vstupního textu nebo výstupního jazyka vyhodnotí až po uplynutí 300 ms.
    // Dále operátor distinctUntilChanged zajišťuje, že se změna vyhodnotí pouze v případě, kdy je odlišná od předchozí hodnoty.
    // Operátor takeUntil() zajišťuje, že se subscription zruší při zničení komponenty.
    // Pokud se změní vstupní text nebo výstupní jazyk, v rámci methody subscribe se spustí překlad.
    this.inputValuesChanges$
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(() => this.triggerTranslation());
  }

  private triggerTranslation(): void {
    this.loading = true;

    // Volání metody pro získání překladu na základě uživatelova vstupu.
    this.translationService
      .getTranslation(this.inputText, this.outputLanguage)
      .pipe(
        // Zajišťuje, že se subscription zruší při zničení komponenty.
        takeUntil(this.destroy$),
        // Zachytí chybu v observable
        catchError(error => this.handleError(error)),
      )
      // V metodě subscribe dostaneme transformovanou odpověď (v rámci next callbacku) nebo chybu (v rámci error callbacku).
      // Po posledním úspěšné aktualizaci observable se volá callback funkce complete.
      .subscribe({
        next: response => (this.outputText = response),
        error: error => (this.error = error),
        complete: () => (this.loading = false),
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private handleError(error: any) {
    // Vytvoření observable, která vytvoří novou instanci chyby.
    return throwError(
      () => new Error(`Something went wrong: ${error.status} Error. Please reload the page.`),
    );
  }
}
