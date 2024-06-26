import {type ComponentType} from 'svelte';
import Translator from '../pages/Translator.svelte';
import Counter from '../pages/Counter.svelte';
import DropdownWrapper from '../pages/DropdownWrapper.svelte';
import Landing from '../pages/Landing.svelte';
import PageNotFound from '../pages/PageNotFound.svelte';
import InvestFormWrapper from '../pages/InvestFormWrapper.svelte';
import CountryGuesserWrapper from '../pages/CountryGuesserWrapper.svelte';

interface AppRoute {
  name?: string;
  path: string;
  component: ComponentType;
}

export const appRoutes: ReadonlyArray<AppRoute> = [
  {
    name: 'Home',
    path: '/',
    component: Landing,
  },
  {
    name: 'Counter',
    path: '/counter',
    component: Counter,
  },
  {
    name: 'Dropdown',
    path: '/dropdown',
    component: DropdownWrapper,
  },
  {
    name: 'Translator',
    path: '/translator',
    component: Translator,
  },
  {
    name: 'Invest form',
    path: '/invest-form',
    component: InvestFormWrapper,
  },
  {
    name: 'Country guesser',
    path: '/country-guesser',
    component: CountryGuesserWrapper,
  },
  {
    path: '*',
    component: PageNotFound,
  },
];

