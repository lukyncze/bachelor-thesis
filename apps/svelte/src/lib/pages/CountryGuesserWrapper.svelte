<script lang="ts">
  import CountryGuesser from '../components/country-guesser/CountryGuesser.svelte';

  let countries = [];
  let error = false;
</script>

{#if error}
  <div class="container flex flex-col justify-center justify-items-center mx-auto">ErrorAlert</div>
{:else if countries.length > 0}
  <CountryGuesser />;
{:else}
  <div class="container flex flex-col justify-center justify-items-center mx-auto">
    LoadingSkeleton
  </div>
{/if}
