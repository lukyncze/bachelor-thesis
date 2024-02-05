import {useEffect, useRef, useState} from 'react';

const mockedData: ReadonlyArray<Country> = [
  {
    flags: {
      png: 'https://flagcdn.com/w320/ad.png',
      svg: 'https://flagcdn.com/ad.svg',
      alt: 'The flag of Andorra features three equal vertical bands of blue, yellow and red, with the coat of arms of Andorra centered in the yellow band.',
    },
    name: {
      common: 'Andorra',
      official: 'Principality of Andorra',
    },
    independent: true,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    capital: ['Andorra la Vella'],
    region: 'Europe',
    subregion: 'Southern Europe',
    languages: {
      cat: 'Catalan',
    },
    latlng: [42.5, 1.5],
    landlocked: true,
    borders: ['FRA', 'ESP'],
    area: 468,
    flag: '🇦🇩',
    population: 77265,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/tf.png',
      svg: 'https://flagcdn.com/tf.svg',
      alt: '',
    },
    name: {
      common: 'French Southern and Antarctic Lands',
      official: 'Territory of the French Southern and Antarctic Lands',
    },
    independent: false,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    capital: ['Port-aux-Français'],
    region: 'Antarctic',
    subregion: '',
    languages: {
      fra: 'French',
    },
    latlng: [-49.25, 69.167],
    landlocked: false,
    borders: [],
    area: 7747,
    flag: '🇹🇫',
    population: 400,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/la.png',
      svg: 'https://flagcdn.com/la.svg',
      alt: 'The flag of Laos is composed of three horizontal bands of red, blue and red. The blue band is twice the height of the red bands and bears a white circle at its center.',
    },
    name: {
      common: 'Laos',
      official: "Lao People's Democratic Republic",
    },
    independent: true,
    currencies: {
      LAK: {
        name: 'Lao kip',
        symbol: '₭',
      },
    },
    capital: ['Vientiane'],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    languages: {
      lao: 'Lao',
    },
    latlng: [18, 105],
    landlocked: true,
    borders: ['MMR', 'KHM', 'CHN', 'THA', 'VNM'],
    area: 236800,
    flag: '🇱🇦',
    population: 7275556,
  },
];

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
  const [guessCountry, setGuessCountry] = useState<Country>();
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
        const randomCountry = data[Math.floor(Math.random() * data.length)];
        setCountries(data);
        setGuessCountry(randomCountry);
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

  return [countries, guessCountry, isLoading, error] as const;
}

export default useCountries;
