import {ComponentType} from 'react';
import Translator from '../components/Translator/Translator';
import Counter from '../pages/Counter';
import DropdownWrapper from '../pages/DropdownWrapper';
import Landing from '../pages/Landing';

interface AppRoute {
  name: string;
  path: string;
  component: ComponentType;
  index?: boolean;
}

export const appRoutes: ReadonlyArray<AppRoute> = [
  {
    name: 'Home',
    path: '/',
    component: Landing,
    index: true,
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
    path: 'translator',
    component: Translator,
  },
];
