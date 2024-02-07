import {KeyboardEvent, useEffect, useState} from 'react';
import {Country} from './useCountries';

interface CountryGuessProps {
  countries: ReadonlyArray<Country>;
  currentGuess: string;
  setCurrentGuess: (currentGuess: string) => void;
  evaluateGuessAndUpdateState: () => void;
}

const countryHintsCount = 8;

function CountryGuessInput({
  countries,
  currentGuess,
  setCurrentGuess,
  evaluateGuessAndUpdateState,
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
    const filterOutSearchByUserGuess = (country: Country) => {
      return country.name.common.toLowerCase().includes(currentGuess.toLowerCase());
    };
    const searchForExactCountry = (country: Country) => {
      return country.name.common.toLowerCase() === currentGuess.toLowerCase();
    };

    const filteredCountries = countries.filter(country => filterOutSearchByUserGuess(country));
    setFilteredCountries(filteredCountries.slice(0, countryHintsCount));
    setIsValidGuess(!!countries.find(searchForExactCountry));
  }, [currentGuess, countries]);

  return (
    <div className="relative group">
      <div className="flex mt-6">
        <input
          type="text"
          value={currentGuess}
          onChange={({target}) => setCurrentGuess(target.value)}
          onClick={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="block rounded-md p-1.5 shadow-sm bg-gray-100 border border-gray-400"
        />

        <button
          type="button"
          className="rounded-lg p-1.5 grid h-full place-content-center bg-cyan-600 border border-gray-400 disabled:bg-red-800 disabled:text-white"
          onClick={() => {
            evaluateGuessAndUpdateState();
            setIsOpen(false);
          }}
          disabled={!isValidGuess}
        >
          Guess
        </button>
      </div>

      <div
        className={`flex flex-col absolute top-18 w-full duration-150 opacity-0 pointer-events-none bg-gray-100 rounded-md ${isOpen ? 'group-focus-within:opacity-100 group-focus-within:pointer-events-auto' : ''}`}
      >
        {/* TODO: Already guessed countries should not be in filtered countries */}
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
