<script lang="ts">
  import {type GuessedCountries} from './CountryGuesser.svelte';
  import type {Countries, Country} from './country';
  import {getEnrichedGuessedCountries, type EnrichedGuessedCountries} from './helpers';

  export let countries: Countries;
  export let guessedCountries: GuessedCountries;
  export let randomCountry: Country;

  const enrichedGuessedCountries: EnrichedGuessedCountries = getEnrichedGuessedCountries(
    countries,
    guessedCountries,
    randomCountry
  );
</script>

<div class="border-t border-gray-300 pt-4 lg:border-t-0 lg:pt-0">
  <h2 class="text-xl font-bold mb-3">Guessed countries</h2>

  <div class="flex flex-col w-full lg:w-[27rem] xl:w-[32rem]">
    {#if enrichedGuessedCountries.length > 0}
      <ul class="space-y-2">
        {#each enrichedGuessedCountries as country, index}
          <li class="flex justify-between rounded-md bg-gray-100 p-1.5">
            <span>
              {index + 1}. {country.name}
              {country.flag}
            </span>
            <span>{country.distanceFromRandomCountry} km away</span>
          </li>
        {/each}
      </ul>
    {:else}
      <p>No country guessed yet. Please, take a guess!</p>
    {/if}
  </div>

  {#if enrichedGuessedCountries.length > 0}
    <p class="mt-4">Away distance is calculated from the center of each country.</p>
  {/if}
</div>
