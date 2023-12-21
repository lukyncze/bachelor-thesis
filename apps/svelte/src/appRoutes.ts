import Translator from './lib/components/translator/Translator.svelte';
import Counter from './lib/pages/Counter.svelte';
import DropdownWrapper from './lib/pages/DropdownWrapper.svelte';
import Landing from './lib/pages/Landing.svelte';
import PageNotFound from './lib/pages/PageNotFound.svelte';

export const appRoutes = [
  {
    name: 'Home',
    href: '/',
    component: Landing,
  },
  {
    name: 'Counter',
    href: '/counter',
    component: Counter,
  },
  {
    name: 'Dropdown',
    href: '/dropdown',
    component: DropdownWrapper,
  },
  {
    name: 'Translator',
    href: '/translator',
    component: Translator,
  },
  {
    href: '*',
    component: PageNotFound,
  },
];

