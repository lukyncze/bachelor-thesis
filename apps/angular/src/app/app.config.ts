import {provideHttpClient} from '@angular/common/http';
import {ApplicationConfig} from '@angular/core';
import {TitleStrategy, provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {TemplatePageTitleStrategy} from './configuration/template-page-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ],
};
