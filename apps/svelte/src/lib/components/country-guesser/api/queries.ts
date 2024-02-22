import {useQuery} from '@sveltestack/svelte-query';
import {AxiosError} from 'axios';
import {type Countries} from '../country';
import {getAllCountries} from './getAllCountries';

export const useAllCountries = () => {
  return useQuery<Countries, AxiosError>('allCountriesQuery', getAllCountries);
};

