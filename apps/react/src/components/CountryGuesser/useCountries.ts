import {useEffect, useRef, useState} from 'react';
import {mockedData} from './mockedData';

export interface Country {
  name: Name;
  area: number;
  population: number;
  landlocked: boolean;
  region: string;
  languages: Languages;
  capital: ReadonlyArray<string>;
  borders: ReadonlyArray<string>;
  flags: Flags;
  flag: string;
  latlng: ReadonlyArray<number>;
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
        //   'https://restcountries.com/v3.1/all?fields=name,area,population,landlocked,region,languages,capital,borders,flags,flag,latlng',
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
