import {useEffect, useRef, useState} from 'react';
import {Country} from './country';
import {getAllCountries} from './api/getAllCountries';
import {CanceledError} from 'axios';

function useCountries() {
  const [countries, setCountries] = useState<ReadonlyArray<Country>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchCountriesData = async () => {
      setIsLoading(true);
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      try {
        const options = {signal: abortControllerRef.current.signal};
        const response = await getAllCountries(options);

        if (response.code === 'error') {
          if (response.error instanceof CanceledError) return;

          throw new Error(
            `There was an error with getting the countries data (${response.error.message}). Please reload the page.`,
          );
        }

        if (response.data.length === 0) {
          throw new Error('There are no countries to guess. Please try again later.');
        }

        setCountries(response.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountriesData();
  }, []);

  return [countries, error, isLoading] as const;
}

export default useCountries;
