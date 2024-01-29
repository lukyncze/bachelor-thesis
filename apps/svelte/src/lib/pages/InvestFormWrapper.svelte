<script lang="ts">
  import InvestForm from '../components/invest-form/InvestForm.svelte';
  import {type InvestFormData} from '../components/invest-form/types';

  const defaultValues: InvestFormData = {
    oneOffInvestment: 10_000,
    investmentLength: 10,
    averageSavingsInterest: 2,
    averageSP500Interest: 9.8,
  };
</script>

<div class="container mx-auto">
  <InvestForm {defaultValues} />
</div>
