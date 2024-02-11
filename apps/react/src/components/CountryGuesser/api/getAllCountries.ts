import axios, {AxiosRequestConfig} from 'axios';
import {Country} from '../country';
import {requestHandler} from './requestHandler';

interface CountriesRequestOptions {
  signal: AbortSignal;
}

export const getAllCountries = requestHandler<CountriesRequestOptions, ReadonlyArray<Country>>(
  params => axios.request(getRequestConfig(params)),
);

const getRequestConfig = ({signal}: CountriesRequestOptions): AxiosRequestConfig => {
  return {
    method: 'GET',
    url: import.meta.env.VITE_REST_COUNTRIES_BASE_URL,
    params: {fields: import.meta.env.VITE_REST_COUNTRIES_QUERY_PARAMS_FIELDS},
    signal,
  };
};
