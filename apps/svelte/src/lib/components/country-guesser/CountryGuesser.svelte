<script lang="ts" context="module">
  export type GuessedCountries = ReadonlyArray<string>;
</script>

<script lang="ts">
  import GuessedCountriesList from './GuessedCountriesList.svelte';
  import type {Countries} from './country';
  import HintBoxes from './hint-boxes/HintBoxes.svelte';

  export let countries: Countries;
</script>

<div class="container mx-auto space-y-6 sm:space-y-8">
  <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-4">
    <HintBoxes randomCountry={countries[0]} hintsEnabledCount={8} />
  </div>

  <div class="space-y-6 lg:flex lg:justify-center lg:gap-12 lg:space-y-0">
    <span>CountryGuessInput</span>
    <!-- <CountryGuessInput
      {countries}
      {currentGuess}
      {guessedCountries}
      {setCurrentGuess}
      {evaluateGuessAndUpdateState}
    /> -->

    <GuessedCountriesList
      {countries}
      guessedCountries={countries.map(c => c.name.common).slice(0, 8)}
      randomCountry={countries[0]}
    />
  </div>
</div>

<!-- {isWinModalOpen ? (
<WinModal
randomCountry={randomCountry}
totalGuessesNeeded={totalGuessesNeeded}
handleClose={() => {
handleSetInitialState();
setIsWinModalOpen(false);
}}
/>
) : null}

{isLoseModalOpen ? (
<LoseModal
randomCountry={randomCountry}
handleClose={() => {
handleSetInitialState();
setIsLoseModalOpen(false);
}}
/>
) : null} -->
