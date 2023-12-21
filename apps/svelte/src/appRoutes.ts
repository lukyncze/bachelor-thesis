import Translator from './lib/components/translator/Translator.svelte';
import Counter from './lib/pages/Counter.svelte';
import DropdownWrapper from './lib/pages/DropdownWrapper.svelte';
import Landing from './lib/pages/Landing.svelte';
import PageNotFound from './lib/pages/PageNotFound.svelte';

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

