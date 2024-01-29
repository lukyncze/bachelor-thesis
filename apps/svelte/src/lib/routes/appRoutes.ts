import Translator from '../pages/Translator.svelte';
import Counter from '../pages/Counter.svelte';
import DropdownWrapper from '../pages/DropdownWrapper.svelte';
import Landing from '../pages/Landing.svelte';
import PageNotFound from '../pages/PageNotFound.svelte';
import InvestFormWrapper from '../pages/InvestFormWrapper.svelte';

export const appRoutes = [
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
    path: '*',
    component: PageNotFound,
  },
];

