import axios, {type AxiosRequestConfig} from 'axios';
import {type Countries} from '../country';
import {requestHandler} from './requestHandler';

export const getAllCountries = async () => {
  const fetchCountriesData = requestHandler<object, Countries>(() =>
    axios.request(getRequestConfig())
  );
  const response = await fetchCountriesData({});

  if (response.code === 'error') {
    throw new Error(
      `There was an error with getting the countries data (${response.error.message}). Please reload the page.`
    );
  }

  if (response.data.length === 0) {
    throw new Error('There are no countries to guess. Please try again later.');
  }

  return getSortedCountriesByName(response.data);
};

const getRequestConfig = (): AxiosRequestConfig => {
  return {
    method: 'GET',
    url: import.meta.env.VITE_REST_COUNTRIES_BASE_URL,
    params: {fields: import.meta.env.VITE_REST_COUNTRIES_QUERY_PARAMS_FIELDS},
  };
};

const getSortedCountriesByName = (countries: Countries): Countries => {
  return countries.toSorted((a, b) => a.name.common.localeCompare(b.name.common));
};

