import {useQuery} from '@sveltestack/svelte-query';
import axios, {AxiosError, type AxiosRequestConfig} from 'axios';
import type {Countries} from '../country';
import {requestHandler} from './requestHandler';

const getAllCountries = async () => {
  const getData = requestHandler<object, Countries>((params) => axios.request(getRequestConfig(params)));
  const response = await getData({});

  if (response.code === 'success') {
    if (response.data.length === 0) {
      throw new Error('There are no countries to guess. Please try again later.');
    }

    return getSortedCountriesByName(response.data);
  } else {
    throw new Error(
      `There was an error with getting the countries data (${response.error.message}). Please reload the page.`
    );
  }
};

export const useAllCountries = () => {
  return useQuery<Countries, AxiosError>('allCountries', getAllCountries);
};

const getRequestConfig = (params: object): AxiosRequestConfig => {
  return {
    method: 'GET',
    url: import.meta.env.VITE_REST_COUNTRIES_BASE_URL,
    params: {fields: import.meta.env.VITE_REST_COUNTRIES_QUERY_PARAMS_FIELDS},
    ...params
  };
};

const getSortedCountriesByName = (countries: Countries): Countries => {
  return countries.toSorted((a, b) => a.name.common.localeCompare(b.name.common));
};

