import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {Subscription} from 'rxjs';
import {Option} from '../dropdown/dropdown.component';
import {LanguageDropdownComponent} from './language-dropdown/language-dropdown.component';
import {languages as predefinedLanguages} from './languages';
import {TranslationInputComponent} from './translation-input/translation-input.component';
import {TranslationOutputComponent} from './translation-output/translation-output.component';

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
  private abortController: AbortController | null = null;
  private delayTimerSubscription: Subscription | null = null;

  protected languages: ReadonlyArray<Option> = predefinedLanguages;
  protected inputText = '';
  protected outputText = '';
  protected outputLanguage = this.languages[0].value;
  protected loading = false;
  protected error: Error | null = null;

  protected handleInputTextChange(inputText: string): void {
    this.inputText = inputText;
    this.triggerTranslation();
  }

  protected handleLanguageChange(outputLanguage: Option): void {
    this.outputLanguage = outputLanguage.value;
    this.triggerTranslation();
  }

  private triggerTranslation(): void {
    // https://www.telerik.com/blogs/angular-basics-how-to-use-httpclient
  }
}
