import {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Countries} from './country';
import Button from '../Button/Button';
import {GuessedCountries} from './CountryGuesser';

interface CountryGuessProps {
  countries: Countries;
  guessedCountries: GuessedCountries;
  evaluateGuessAndUpdateState: (guessedCountry: string) => void;
}

const countryHintsCount = 8;

function CountryGuessInput({
  countries,
  guessedCountries,
  evaluateGuessAndUpdateState,
}: CountryGuessProps) {
  const countriesWithoutAlreadyGuessed: Countries = countries.filter(
    country => !guessedCountries.includes(country.name.common),
  );
  const [filteredCountries, setFilteredCountries] = useState<Countries>(
    countriesWithoutAlreadyGuessed.slice(0, countryHintsCount),
  );
  const [currentGuess, setCurrentGuess] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isValidGuess, setIsValidGuess] = useState(false);
  const [selectedGuessIndex, setSelectedGuessIndex] = useState(0);

  const handleGuessButtonClick = () => {
    if (isValidGuess) evaluateGuessAndUpdateState(currentGuess);

    handleChangeSelectedGuess('');
  };

  const handleChangeSelectedGuess = (guessedCountry: string) => {
    updateGuessAndFilteredCountries(guessedCountry);
    setIsOpen(false);
  };

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const formattedGuess = convertToFormattedGuess(target.value);
    updateGuessAndFilteredCountries(formattedGuess);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return;

    if (event.key === 'ArrowUp') {
      changeSelectedGuessIndex(-1);
      event.preventDefault();
    } else if (event.key === 'ArrowDown') {
      changeSelectedGuessIndex(1);
      event.preventDefault();
    } else if (event.key === 'Enter' && filteredCountries.length > 0) {
      handleChangeSelectedGuess(filteredCountries[selectedGuessIndex].name.common);
      event.currentTarget.blur();
    } else if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const updateGuessAndFilteredCountries = (guessedCountry: string) => {
    const filteredCountries = getFilteredCountries(guessedCountry);
    const isValidGuess = !!filteredCountries.find(({name}) => name.common === guessedCountry);

    setCurrentGuess(guessedCountry);
    setIsValidGuess(isValidGuess);
    setFilteredCountries(filteredCountries);
    clampSelectedGuessIndex(filteredCountries);
  };

  const getFilteredCountries = (guessedCountry: string) => {
    const filteredCountries = countriesWithoutAlreadyGuessed.filter(country =>
      country.name.common.toLowerCase().includes(guessedCountry.toLowerCase()),
    );
    return filteredCountries.splice(0, countryHintsCount);
  };

  const clampSelectedGuessIndex = (filteredCountries: Countries) => {
    if (filteredCountries.length > 0 && selectedGuessIndex >= filteredCountries.length) {
      setSelectedGuessIndex(filteredCountries.length - 1);
    }
  };

  const changeSelectedGuessIndex = (value: number) => {
    if (selectedGuessIndex + value < 0) return;
    if (selectedGuessIndex + value >= filteredCountries.length) return;

    setSelectedGuessIndex(currentIndex => currentIndex + value);
  };

  const convertToFormattedGuess = (guess: string) => {
    const [firstLetter, ...rest] = guess;
    return firstLetter ? `${firstLetter.toUpperCase()}${rest.join('').toLowerCase()}` : '';
  };

  return (
    <div className="relative group">
      <div className="flex">
        <input
          type="text"
          value={currentGuess}
          onChange={handleInputChange}
          onClick={() => {
            updateGuessAndFilteredCountries(currentGuess);
            setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          className="block rounded-md w-full p-2 shadow-sm bg-gray-100 border border-gray-400 lg:w-[20rem] xl:w-[24rem]"
        />

        <Button
          className="rounded-lg w-40 !p-2 grid place-content-center border border-gray-400 bg-green-800 text-white animate-pulse 
            lg:w-28 xl:w-32 hover:animate-none hover:bg-green-900 disabled:animate-none disabled:bg-red-800"
          onClick={handleGuessButtonClick}
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
          <>
            {filteredCountries.map((filteredCountry, index) => (
              <Button
                key={index}
                onClick={() => handleChangeSelectedGuess(filteredCountry.name.common)}
                className={`rounded-lg p-2 ${selectedGuessIndex === index ? 'bg-gray-300' : ''}`}
              >
                {filteredCountry.flag} {filteredCountry.name.common}
              </Button>
            ))}

            {filteredCountries.length === 1 ? (
              <span className="rounded-lg p-2 text-center">
                Hit enter to select <b>{filteredCountries[0].name.common}</b>
              </span>
            ) : null}
          </>
        ) : (
          <div className="rounded-lg p-2">No country found. Please, try to change your input.</div>
        )}
      </div>

      {!filteredCountries.length ? (
        <div className="rounded-lg mt-2">No country found. Please, try to change your input.</div>
      ) : null}

      {currentGuess.length && filteredCountries.length && !isValidGuess ? (
        <div className="rounded-lg mt-2">Please enter/select a valid full country name.</div>
      ) : null}

      {!currentGuess.length ? (
        <div className="rounded-lg mt-2">Enter a country you want to guess.</div>
      ) : null}
    </div>
  );
}

export default CountryGuessInput;
