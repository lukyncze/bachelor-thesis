import {Routes} from '@angular/router';
import {CounterComponent} from './components/counter/counter.component';
import {TranslatorComponent} from './components/translator/translator.component';
import {CountryGuesserWrapperComponent} from './pages/country-guesser-wrapper/country-guesser-wrapper.component';
import {DropdownWrapperComponent} from './pages/dropdown-wrapper/dropdown-wrapper.component';
import {InvestFormWrapperComponent} from './pages/invest-form-wrapper/invest-form-wrapper.component';
import {LandingComponent} from './pages/landing/landing.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    title: 'Home',
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
  {
    title: 'Counter',
    path: 'counter',
    component: CounterComponent,
  },
  {
    title: 'Dropdown',
    path: 'dropdown',
    component: DropdownWrapperComponent,
  },
  {
    title: 'Translator',
    path: 'translator',
    component: TranslatorComponent,
  },
  {
    title: 'Invest form',
    path: 'invest-form',
    component: InvestFormWrapperComponent,
  },
  {
    title: 'Country guesser',
    path: 'country-guesser',
    component: CountryGuesserWrapperComponent,
  },
  {path: '**', component: PageNotFoundComponent},
];
