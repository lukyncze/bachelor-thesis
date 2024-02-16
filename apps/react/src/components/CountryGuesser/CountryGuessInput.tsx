import {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {Countries, Country} from './country';
import Button from '../Button/Button';
import {GuessedCountries} from './CountryGuesser';

interface CountryGuessProps {
  countries: Countries;
  currentGuess: string;
  guessedCountries: GuessedCountries;
  setCurrentGuess: (currentGuess: string) => void;
  evaluateGuessAndUpdateState: () => void;
}

const countryHintsCount = 8;

function CountryGuessInput({
  countries,
  currentGuess,
  guessedCountries,
  setCurrentGuess,
  evaluateGuessAndUpdateState,
}: CountryGuessProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isValidGuess, setIsValidGuess] = useState(false);
  const [selectedGuessIndex, setSelectedGuessIndex] = useState(0);
  const [filteredCountries, setFilteredCountries] = useState<Countries>([]);

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
    } else if (key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const formattedGuess = convertToFormattedGuess(target.value);
    setCurrentGuess(formattedGuess);
  };

  const convertToFormattedGuess = (guess: string) => {
    const [firstLetter, ...rest] = guess;
    return firstLetter ? `${firstLetter.toUpperCase()}${rest.join('').toLowerCase()}` : '';
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
    const clampSelectedGuessIndex = () => {
      if (filteredCountries.length > 0 && selectedGuessIndex >= filteredCountries.length) {
        setSelectedGuessIndex(filteredCountries.length - 1);
      }
    };

    const countriesWithoutAlreadyGuessed = countries.filter(country =>
      filterOutAlreadyGuessedCountries(country),
    );
    const filteredCountries = countriesWithoutAlreadyGuessed.filter(country =>
      filterOutSearchByUserGuess(country),
    );
    setFilteredCountries(filteredCountries.slice(0, countryHintsCount));
    setIsValidGuess(!!filteredCountries.find(searchForExactCountry));
    clampSelectedGuessIndex();
  }, [currentGuess, countries, guessedCountries, selectedGuessIndex]);

  return (
    <div className="relative group">
      <div className="flex">
        <input
          type="text"
          value={currentGuess}
          onChange={handleInputChange}
          onClick={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="block rounded-md w-full p-2 shadow-sm bg-gray-100 border border-gray-400 lg:w-[20rem] xl:w-[24rem]"
        />

        <Button
          className="rounded-lg w-40 !p-2 grid place-content-center border border-gray-400 bg-green-800 text-white animate-pulse 
            lg:w-28 xl:w-32 hover:animate-none hover:bg-green-900 disabled:animate-none disabled:bg-red-800"
          onClick={() => {
            evaluateGuessAndUpdateState();
            setIsOpen(false);
          }}
          disabled={!isValidGuess}
        >
          Take a guess
        </Button>
      </div>

      <div
        className={`flex flex-col absolute top-18 w-full duration-150 opacity-0 pointer-events-none bg-gray-200 rounded-lg border border-gray-300 
          ${isOpen ? 'group-focus-within:opacity-100 group-focus-within:pointer-events-auto' : ''}`}
      >
        {filteredCountries.length > 0 ? (
          filteredCountries.map((filteredCountry, index) => (
            <Button
              key={index}
              onClick={() => handleChangeSelectedGuess(filteredCountry.name.common)}
              className={`rounded-lg p-2 ${selectedGuessIndex === index ? 'bg-gray-300' : ''}`}
            >
              {filteredCountry.flag} {filteredCountry.name.common}
            </Button>
          ))
        ) : (
          <div className="rounded-lg p-2">No country found. Please, try to change your input.</div>
        )}
      </div>

      {!filteredCountries.length ? (
        <div className="rounded-lg mt-2">No country found. Please, try to change your input.</div>
      ) : null}

      {currentGuess.length && filteredCountries.length && !isValidGuess ? (
        <div className="rounded-lg mt-2">Please enter/select a full country name.</div>
      ) : null}

      {!currentGuess.length ? (
        <div className="rounded-lg mt-2">Enter a country you want to guess.</div>
      ) : null}
    </div>
  );
}

export default CountryGuessInput;
