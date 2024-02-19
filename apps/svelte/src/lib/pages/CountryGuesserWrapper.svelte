<script lang="ts">
  import CountryGuesser from '../components/country-guesser/CountryGuesser.svelte';
  import {mockedData} from '../components/country-guesser/mockedData';

  let countries = mockedData;
  let error = false;
</script>

{#if error}
  <div class="container flex flex-col justify-center justify-items-center mx-auto">ErrorAlert</div>
{:else if countries.length > 0}
  <CountryGuesser {countries} />
{:else}
  <div class="container flex flex-col justify-center justify-items-center mx-auto">
    LoadingSkeleton
  </div>
{/if}
