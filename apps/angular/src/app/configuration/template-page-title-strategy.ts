import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {TitleStrategy} from '@angular/router';

const appName = 'Angular app';

// Tato třída poskytuje statický titulek stránek.
// Využití třídy přepíše nativní nastavení (DefaultTitleStrategy) dynamického titulku.
@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle() {
    this.title.setTitle(appName);
  }
}
