<script lang="ts">
  import {CanceledError} from 'axios';
  import {onMount} from 'svelte';
  import {getAllCountries} from '../components/country-guesser/api/getAllCountries';
  import {type Countries} from '../components/country-guesser/country';
  import CountryGuesser from '../components/country-guesser/CountryGuesser.svelte';
  import ErrorAlert from '../components/country-guesser/ErrorAlert.svelte';
  import LoadingSkeleton from '../components/country-guesser/LoadingSkeleton.svelte';

  let countries: Countries = [];
  let isLoading = false;
  let error: Error | null = null;
  let abortController: AbortController | null = null;

  onMount(() => fetchCountriesData());

  const fetchCountriesData = async (): Promise<void> => {
    isLoading = true;
    abortController?.abort();
    abortController = new AbortController();

    try {
      const options = {signal: abortController.signal};
      const response = await getAllCountries(options);

      if (response.code === 'error') {
        if (response.error instanceof CanceledError) return;

        throw new Error(
          `There was an error with getting the countries data (${response.error.message}). Please reload the page.`
        );
      }

      if (response.data.length === 0) {
        throw new Error('There are no countries to guess. Please try again later.');
      }

      countries = getSortedCountriesByName(response.data);
    } catch (err: any) {
      error = err;
    } finally {
      isLoading = false;
    }
  };

  const getSortedCountriesByName = (countries: Countries): Countries => {
    return countries.toSorted((a, b) => a.name.common.localeCompare(b.name.common));
  };
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
