import {useEffect, useRef, useState} from 'react';
import {Country} from './country';

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
        const url = `${import.meta.env.VITE_REST_COUNTRIES_BASE_URL}${import.meta.env.VITE_REST_COUNTRIES_QUERY_PARAMS}`;
        const options: RequestInit = {signal: abortControllerRef.current.signal};
        const response = await fetch(url, options);
        const data = await response.json();
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
