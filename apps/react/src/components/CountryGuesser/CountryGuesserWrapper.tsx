import {useState} from 'react';
import useCountries from './useCountries';
import CountryGuess from './CountryGuess';
import HintBoxes from './HintBoxes';
import WinModal from './Modals/WinModal';
import LoseModal from './Modals/LoseModal';

const maximumCountryGuesses = 8;

function CountryGuesserWrapper() {
  const [countries, randomCountry, isLoading, error] = useCountries();
  const [guessedCountries, setGuessedCountries] = useState<ReadonlyArray<string>>([]);
  const [hintsEnabledCount, setHintsEnabledCount] = useState(1);
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const [isLoseModalOpen, setIsLoseModalOpen] = useState(false);
  console.log(`🚀 ~ CountryGuesserWrapper ~ randomCountry:`, randomCountry?.name.common);

  const hasGuessedCountry = (countryName: string) => countryName === randomCountry?.name.common;
  const hasReachedMaximumGuesses = () => guessedCountries.length + 1 === maximumCountryGuesses;

  const handleSetGuessedCountries = (countryName: string) => {
    setGuessedCountries([...guessedCountries, countryName]);
    setHintsEnabledCount(hintsEnabledCount + 1);

    if (hasGuessedCountry(countryName)) {
      setHintsEnabledCount(maximumCountryGuesses);
      setIsWinModalOpen(true);
      return;
    }

    if (hasReachedMaximumGuesses() && !hasGuessedCountry(countryName)) {
      setIsLoseModalOpen(true);
      return;
    }
  };

  const handleSetInitialState = () => {
    setGuessedCountries([]);
    setHintsEnabledCount(1);
  };

  if (error) {
    return <p>There was an error with getting the countries data. Please try again later.</p>;
  }

  if (isLoading) {
    return <p>Loading the Country guesser. Please wait.</p>;
  }

  if (countries.length > 0 && randomCountry) {
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
          <HintBoxes randomCountry={randomCountry} hintsEnabledCount={hintsEnabledCount} />
        </div>

        <div className="flex flex-col items-center justify-center">
          <CountryGuess countries={countries} setCurrentGuess={handleSetGuessedCountries} />
        </div>

        <WinModal
          isOpen={isWinModalOpen}
          handleClose={() => {
            handleSetInitialState();
            setIsWinModalOpen(false);
          }}
          randomCountry={randomCountry}
          totalTriesNeeded={hintsEnabledCount}
        />
        <LoseModal
          isOpen={isLoseModalOpen}
          handleClose={() => {
            handleSetInitialState();
            setIsLoseModalOpen(false);
          }}
          randomCountry={randomCountry}
        />
      </div>
    );
  }

  return <p>There are no countries to guess. Please try again later.</p>;
}

export default CountryGuesserWrapper;
