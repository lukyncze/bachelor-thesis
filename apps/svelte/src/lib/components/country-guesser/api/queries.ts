import {createQuery} from '@tanstack/svelte-query';
import {type Countries} from '../country';
import {getAllCountries} from './getAllCountries';

export const useAllCountries = () => {
  return createQuery<Countries>({queryKey: ['allCountriesQuery'], queryFn: getAllCountries});
};

