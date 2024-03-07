import {createQuery, type CreateQueryResult} from '@tanstack/svelte-query';
import {type Countries} from '../country';
import {getAllCountries} from './getAllCountries';

// Funkce sloužící k získání všech zemí.
export const useAllCountries = (): CreateQueryResult<Countries, Error> => {
  return createQuery<Countries>({queryKey: ['allCountriesQuery'], queryFn: getAllCountries});
};
