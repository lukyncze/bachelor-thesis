<script lang="ts" context="module">
  export type GuessedCountries = ReadonlyArray<string>;
</script>

<script lang="ts">
  import {onMount} from 'svelte';
  import {polyfillCountryFlagEmojis} from 'country-flag-emoji-polyfill';
  import CountryGuessInput from './CountryGuessInput.svelte';
  import GuessedCountriesList from './GuessedCountriesList.svelte';
  import type {Countries, Country} from './country';
  import {getRandomCountry} from './helpers';
  import HintBoxes from './hint-boxes/HintBoxes.svelte';
  import LoseModal from './modals/LoseModal.svelte';
  import WinModal from './modals/WinModal.svelte';

  const defaultHintsEnabledCount = 1;
  const maximumCountryGuesses = 8;

  export let countries: Countries;

  let randomCountry: Country = getRandomCountry(countries);
  let guessedCountries: GuessedCountries = [];
  let hintsEnabledCount = defaultHintsEnabledCount;
  let totalGuessesNeeded = 1;
  let isWinModalOpen = false;
  let isLoseModalOpen = false;

  // Načtení polyfillu pro zobrazení vlajek států.
  onMount(() => polyfillCountryFlagEmojis());

  const handleEvaluateGuessAndUpdateState = (guessedCountry: string) => {
    if (hasGuessedCountry(guessedCountry)) {
      hintsEnabledCount = maximumCountryGuesses;
      totalGuessesNeeded = guessedCountries.length + 1;
      isWinModalOpen = true;
      return;
    }

    if (hasReachedMaximumGuesses() && !hasGuessedCountry(guessedCountry)) {
      isLoseModalOpen = true;
      return;
    }

    guessedCountries = [...guessedCountries, guessedCountry];
    hintsEnabledCount++;
  };

  const handleSetInitialState = () => {
    randomCountry = getRandomCountry(countries);
    guessedCountries = [];
    hintsEnabledCount = defaultHintsEnabledCount;
  };

  const hasGuessedCountry = (guessedCountry: string) => {
    return randomCountry.name.common === guessedCountry;
  };

  const hasReachedMaximumGuesses = () => guessedCountries.length + 1 === maximumCountryGuesses;
</script>

<div class="container mx-auto space-y-6 sm:space-y-8">
  <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-4">
    <HintBoxes {randomCountry} {hintsEnabledCount} />
  </div>

  <div class="space-y-6 lg:flex lg:justify-center lg:gap-12 lg:space-y-0">
    <CountryGuessInput
      {countries}
      {guessedCountries}
      evaluateGuessAndUpdateState={handleEvaluateGuessAndUpdateState}
    />

    <GuessedCountriesList {countries} {guessedCountries} {randomCountry} />
  </div>
</div>

{#if isWinModalOpen}
  <WinModal
    {randomCountry}
    {totalGuessesNeeded}
    handleClose={() => {
      handleSetInitialState();
      isWinModalOpen = false;
    }}
  />
{/if}

{#if isLoseModalOpen}
  <LoseModal
    {randomCountry}
    handleClose={() => {
      handleSetInitialState();
      isLoseModalOpen = false;
    }}
  />
{/if}
