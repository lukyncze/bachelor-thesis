import {useEffect, useState} from 'react';
import {Country} from './useCountries';

interface CountryGuessProps {
  countries: ReadonlyArray<Country>;
  guess: string;
  setGuess: (value: string) => void;
}

const countryHintsCount = 8;

function CountryGuess({countries, guess, setGuess}: CountryGuessProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGuessIndex, setSelectedGuessIndex] = useState(0);
  const [filteredCountries, setFilteredCountries] = useState<ReadonlyArray<Country>>(
    countries.slice(0, countryHintsCount),
  );

  const handleChangeSelectedGuess = (guess: string) => {
    setGuess(guess);
    setSelectedGuessIndex(0);
    setIsOpen(false);
  };

  const handleChangeSelectedGuessIndex = (value: number) => {
    if (selectedGuessIndex + value < 0) return;
    if (selectedGuessIndex + value >= filteredCountries.length) return;

    setSelectedGuessIndex(index => index + value);
  };

  useEffect(() => {
    const filterOutSearchByUserGuess = (country: Country) => {
      return country.name.common.toLowerCase().includes(guess.toLowerCase());
    };

    setFilteredCountries(
      countries.filter(country => filterOutSearchByUserGuess(country)).slice(0, countryHintsCount),
    );
  }, [guess, countries]);

  return (
    <div id="countryGuess" className="relative group">
      <div className="flex mt-6">
        <input
          type="text"
          value={guess}
          onChange={({target}) => setGuess(target.value)}
          onClick={() => setIsOpen(true)}
          onKeyDown={({key}) => {
            if (!isOpen) return;
            if (key === 'ArrowDown') {
              handleChangeSelectedGuessIndex(1);
            }
            if (key === 'ArrowUp') {
              handleChangeSelectedGuessIndex(-1);
            }
            if (key === 'Enter') {
              handleChangeSelectedGuess(filteredCountries[selectedGuessIndex].name.common);
            }
          }}
          className="block rounded-md p-1.5 shadow-sm bg-gray-100 border border-gray-400"
        />
        <button
          type="button"
          className="rounded-lg p-1.5 grid h-full place-content-center bg-cyan-600 border border-gray-400"
          onClick={() => setIsOpen(false)}
        >
          Guess
        </button>
      </div>

      <div
        className={`flex flex-col absolute top-18 w-full duration-150 opacity-0 pointer-events-none bg-gray-100 rounded-md ${isOpen ? 'group-focus-within:opacity-100 group-focus-within:pointer-events-auto' : ''}`}
      >
        {filteredCountries.map((filteredCountry, index) => {
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleChangeSelectedGuess(filteredCountry.name.common)}
              className={`rounded-lg p-2 ${selectedGuessIndex === index ? 'bg-gray-300' : ''}`}
            >
              {filteredCountry.flag} {filteredCountry.name.common}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CountryGuess;
