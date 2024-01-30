<script lang="ts">
  import FutureValuesInfo from '../components/invest-form/FutureValuesInfo.svelte';
  import InvestForm from '../components/invest-form/InvestForm.svelte';
  import futureValuesCalculator from '../components/invest-form/futureValuesCalculator';
  import {type InvestFormData} from '../components/invest-form/types';

  const defaultValues: InvestFormData = {
    oneOffInvestment: 10_000,
    investmentLength: 10,
    averageSavingsInterest: 2,
    averageSP500Interest: 9.8,
  };

  let investFormData: InvestFormData;

  $: futureValues = futureValuesCalculator(investFormData);
</script>

<div class="container mx-auto">
  <InvestForm bind:investFormData {defaultValues} />

  {#if futureValues}
    <FutureValuesInfo {futureValues} />
  {/if}
</div>
