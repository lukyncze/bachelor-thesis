import Translator from '../pages/Translator.svelte';
import Counter from '../pages/Counter.svelte';
import DropdownWrapper from '../pages/DropdownWrapper.svelte';
import Landing from '../pages/Landing.svelte';
import PageNotFound from '../pages/PageNotFound.svelte';

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
    path: '*',
    component: PageNotFound,
  },
];

