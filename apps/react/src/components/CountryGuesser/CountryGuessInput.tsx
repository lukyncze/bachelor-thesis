import {KeyboardEvent, useEffect, useState} from 'react';
import {Country} from './useCountries';

interface CountryGuessProps {
  countries: ReadonlyArray<Country>;
  currentGuess: string;
  setCurrentGuess: (currentGuess: string) => void;
  evaluateGuessAndUpdateState: () => void;
  guessedCountries: ReadonlyArray<string>;
}

const countryHintsCount = 8;

function CountryGuessInput({
  countries,
  currentGuess,
  setCurrentGuess,
  evaluateGuessAndUpdateState,
  guessedCountries,
}: CountryGuessProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isValidGuess, setIsValidGuess] = useState(false);
  const [selectedGuessIndex, setSelectedGuessIndex] = useState(0);
  const [filteredCountries, setFilteredCountries] = useState<ReadonlyArray<Country>>([]);

  const handleChangeSelectedGuess = (guess: string) => {
    setCurrentGuess(guess);
    setSelectedGuessIndex(0);
    setIsOpen(false);
  };

  const handleChangeSelectedGuessIndex = (value: number) => {
    if (selectedGuessIndex + value < 0) return;
    if (selectedGuessIndex + value >= filteredCountries.length) return;

    setSelectedGuessIndex(currentIndex => currentIndex + value);
  };

  const handleKeyDown = ({key, currentTarget}: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return;

    if (key === 'ArrowDown') {
      handleChangeSelectedGuessIndex(1);
    } else if (key === 'ArrowUp') {
      handleChangeSelectedGuessIndex(-1);
    } else if (key === 'Enter') {
      handleChangeSelectedGuess(filteredCountries[selectedGuessIndex].name.common);
      currentTarget.blur();
    }
  };

  useEffect(() => {
    const filterOutAlreadyGuessedCountries = (country: Country) => {
      return !guessedCountries.includes(country.name.common);
    };
    const filterOutSearchByUserGuess = (country: Country) => {
      return country.name.common.toLowerCase().includes(currentGuess.toLowerCase());
    };
    const searchForExactCountry = (country: Country) => {
      return country.name.common.toLowerCase() === currentGuess.toLowerCase();
    };

    const countriesWithoutAlreadyGuesses = countries.filter(country =>
      filterOutAlreadyGuessedCountries(country),
    );
    const filteredCountries = countriesWithoutAlreadyGuesses.filter(country =>
      filterOutSearchByUserGuess(country),
    );
    setFilteredCountries(filteredCountries.slice(0, countryHintsCount));
    setIsValidGuess(!!countriesWithoutAlreadyGuesses.find(searchForExactCountry));
  }, [currentGuess, countries, guessedCountries]);

  return (
    <div className="relative group">
      <div className="flex">
        <input
          type="text"
          value={currentGuess}
          onChange={({target}) => setCurrentGuess(target.value)}
          onClick={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="block rounded-md w-full p-2 shadow-sm bg-gray-100 border border-gray-400 lg:w-[20rem] xl:w-[24rem]"
        />

        <button
          type="button"
          className="rounded-lg w-40 p-2 grid place-content-center border border-gray-400 bg-green-800 text-white animate-pulse 
            lg:w-28 xl:w-32 hover:animate-none hover:bg-green-900 disabled:animate-none disabled:bg-red-800"
          onClick={() => {
            evaluateGuessAndUpdateState();
            setIsOpen(false);
          }}
          disabled={!isValidGuess}
        >
          Take a guess
        </button>
      </div>

      <div
        className={`flex flex-col absolute top-18 w-full duration-150 opacity-0 pointer-events-none bg-gray-200 rounded-lg border border-gray-300 
          ${isOpen ? 'group-focus-within:opacity-100 group-focus-within:pointer-events-auto' : ''}`}
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

export default CountryGuessInput;
