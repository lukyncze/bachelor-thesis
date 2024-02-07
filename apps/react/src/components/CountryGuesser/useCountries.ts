import {useEffect, useRef, useState} from 'react';
import {mockedData} from './mockedData';

export interface Country {
  flags: Flags;
  name: Name;
  independent: boolean;
  currencies: Currencies;
  capital: ReadonlyArray<string>;
  region: string;
  subregion: string;
  languages: Languages;
  latlng: ReadonlyArray<number>;
  landlocked: boolean;
  borders: ReadonlyArray<string>;
  area: number;
  flag: string;
  population: number;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Name {
  common: string;
  official: string;
}

interface Currencies {
  [key: string]: {
    name: string;
    symbol: string;
  };
}

interface Languages {
  [key: string]: string;
}

function useCountries() {
  const [countries, setCountries] = useState<ReadonlyArray<Country>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchCountriesData = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      try {
        // const response = await fetch(
        //   'https://restcountries.com/v3.1/all?fields=name,flags,region,subregion,population,capitals,currencies,independent,landlocked,area,capital,languages,flag,borders,latlng',
        //   {signal: abortControllerRef.current?.signal},
        // );
        // const data = await response.json();
        const data = mockedData;
        setCountries(data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.name === 'AbortError') return;

        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountriesData();
  }, []);

  return [countries, isLoading, error] as const;
}

export default useCountries;
