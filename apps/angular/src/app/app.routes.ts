import {Routes} from '@angular/router';
import {CounterComponent} from './components/counter/counter.component';
import {TranslatorComponent} from './components/translator/translator.component';
import {DropdownWrapperComponent} from './pages/dropdown-wrapper/dropdown-wrapper.component';
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
  {path: '**', component: PageNotFoundComponent},
];
