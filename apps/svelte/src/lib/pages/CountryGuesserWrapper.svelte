<script lang="ts">
  import {useAllCountries} from '../components/country-guesser/api/queries';
  import CountryGuesser from '../components/country-guesser/CountryGuesser.svelte';
  import ErrorAlert from '../components/country-guesser/ErrorAlert.svelte';
  import LoadingSkeleton from '../components/country-guesser/LoadingSkeleton.svelte';

  const countries = useAllCountries();
</script>

{#if $countries.isError}
  <div class="container flex flex-col justify-center justify-items-center mx-auto">
    <ErrorAlert message={$countries.error.message} />
  </div>
{:else if $countries.data}
  <CountryGuesser countries={$countries.data} />
{:else}
  <div class="container flex flex-col justify-center justify-items-center mx-auto">
    <LoadingSkeleton />
  </div>
{/if}
