<script lang="ts">
  import Button from '../button/Button.svelte';
  import {type GuessedCountries} from './CountryGuesser.svelte';
  import {type Countries} from './country';

  const countryHintsCount = 8;

  export let countries: Countries;
  export let guessedCountries: GuessedCountries;
  export let evaluateGuessAndUpdateState: (guessedCountry: string) => void;

  $: countriesWithoutAlreadyGuessed = countries.filter(
    country => !guessedCountries.includes(country.name.common)
  );

  let filteredCountries: Countries = countries.slice(0, countryHintsCount);
  let currentGuess = '';
  let isOpen = false;
  let isValidGuess = false;
  let selectedGuessIndex = 0;

  const handleGuessButtonClick = () => {
    evaluateGuessAndUpdateState(currentGuess);
    handleChangeSelectedGuess('');
  };

  const handleChangeSelectedGuess = (guessedCountry: string) => {
    updateGuessAndFilteredCountries(guessedCountry);
    isOpen = false;
  };

  const handleInputChange = (target: EventTarget | null) => {
    if (target instanceof HTMLInputElement) {
      const formattedGuess = convertToFormattedGuess(target.value);
      updateGuessAndFilteredCountries(formattedGuess);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!isOpen) return;

    if (event.key === 'ArrowUp') {
      changeSelectedGuessIndex(-1);
      event.preventDefault();
    } else if (event.key === 'ArrowDown') {
      changeSelectedGuessIndex(1);
      event.preventDefault();
    } else if (event.key === 'Enter' && filteredCountries.length > 0) {
      handleChangeSelectedGuess(filteredCountries[selectedGuessIndex].name.common);
    } else if (event.key === 'Escape') {
      isOpen = false;
    }
  };

  const updateGuessAndFilteredCountries = (guessedCountry: string) => {
    const updatedFilteredCountries = getFilteredCountries(guessedCountry);

    currentGuess = guessedCountry;
    isValidGuess = !!updatedFilteredCountries.find(({name}) => name.common === guessedCountry);
    filteredCountries = updatedFilteredCountries;
    clampSelectedGuessIndex(filteredCountries);
  };

  const getFilteredCountries = (guessedCountry: string) => {
    const filteredCountries = countriesWithoutAlreadyGuessed.filter(country =>
      country.name.common.toLowerCase().includes(guessedCountry.toLowerCase())
    );
    return filteredCountries.splice(0, countryHintsCount);
  };

  const clampSelectedGuessIndex = (filteredCountries: Countries) => {
    if (filteredCountries.length > 0 && selectedGuessIndex >= filteredCountries.length) {
      selectedGuessIndex = filteredCountries.length - 1;
    }
  };

  const changeSelectedGuessIndex = (value: number) => {
    if (selectedGuessIndex + value < 0) return;
    if (selectedGuessIndex + value >= filteredCountries.length) return;

    selectedGuessIndex += value;
  };

  const convertToFormattedGuess = (guess: string) => {
    const [firstLetter, ...rest] = guess;
    return firstLetter ? `${firstLetter.toUpperCase()}${rest.join('').toLowerCase()}` : '';
  };
</script>

<div class="relative group">
  <div class="flex">
    <input
      type="text"
      value={currentGuess}
      on:input={({target}) => handleInputChange(target)}
      on:click={() => {
        updateGuessAndFilteredCountries(currentGuess);
        isOpen = true;
      }}
      on:keydown={handleKeyDown}
      class="block rounded-md w-full p-2 shadow-sm bg-gray-100 border border-gray-400 lg:w-[20rem] xl:w-[24rem]"
    />

    <Button
      className="w-40 !p-2 grid place-content-center border border-gray-400 bg-green-800 text-white animate-pulse 
            lg:w-28 xl:w-32 hover:animate-none hover:bg-green-900 disabled:animate-none disabled:bg-red-800"
      onClick={handleGuessButtonClick}
      disabled={!isValidGuess}
    >
      Take a guess
    </Button>
  </div>

  <div
    class={`flex flex-col absolute top-18 w-full duration-150 opacity-0 pointer-events-none bg-gray-200 rounded-lg border border-gray-300 
          ${isOpen ? 'group-focus-within:opacity-100 group-focus-within:pointer-events-auto' : ''}`}
  >
    {#if filteredCountries.length > 0}
      {#each filteredCountries as filteredCountry, index}
        <Button
          key={index}
          onClick={() => handleChangeSelectedGuess(filteredCountry.name.common)}
          className={`rounded-lg p-2 ${selectedGuessIndex === index ? 'bg-gray-300' : ''}`}
        >
          {filteredCountry.flag}
          {filteredCountry.name.common}
        </Button>
      {/each}

      {#if filteredCountries.length === 1}
        <span class="rounded-lg p-2 text-center">
          Hit enter to select <b>{filteredCountries[0].name.common}</b>
        </span>
      {/if}
    {:else}
      <div class="rounded-lg p-2">No country found. Please, try to change your input.</div>
    {/if}
  </div>

  {#if !filteredCountries.length}
    <div class="rounded-lg mt-2">No country found. Please, try to change your input.</div>
  {/if}

  {#if currentGuess.length && filteredCountries.length && !isValidGuess}
    <div class="rounded-lg mt-2">Please enter/select a valid full country name.</div>
  {/if}

  {#if !currentGuess.length}
    <div class="rounded-lg mt-2">Enter a country you want to guess.</div>
  {/if}
</div>
