import {provideHttpClient} from '@angular/common/http';
import {ApplicationConfig} from '@angular/core';
import {TitleStrategy, provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {TemplatePageTitleStrategy} from './configuration/template-page-title-strategy';

export const appConfig: ApplicationConfig = {
  // V tomto nastavení poskytujeme služby a poskytovatele pro celou aplikaci.
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    // Tato konfigurace přepíše nativní nastavení titulku stránky.
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ],
};
