<script lang="ts">
  import {onMount} from 'svelte';
  import CountryGuesser from '../components/country-guesser/CountryGuesser.svelte';
  import ErrorAlert from '../components/country-guesser/ErrorAlert.svelte';
  import LoadingSkeleton from '../components/country-guesser/LoadingSkeleton.svelte';
  import {mockedData} from '../components/country-guesser/mockedData';

  let countries = mockedData.toSorted((a, b) => a.name.common.localeCompare(b.name.common));
  let error: Error | null = null;

  onMount(() => {
    // fetch data
  });
</script>

{#if error}
  <div class="container flex flex-col justify-center justify-items-center mx-auto">
    <ErrorAlert message={error.message} />
  </div>
{:else if countries.length > 0}
  <CountryGuesser {countries} />
{:else}
  <div class="container flex flex-col justify-center justify-items-center mx-auto">
    <LoadingSkeleton />
  </div>
{/if}
