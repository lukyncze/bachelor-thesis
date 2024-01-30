<script lang="ts">
  import FutureValueInfo from './FutureValueInfo.svelte';
  import {type FutureValues} from './types';

  export let futureValues: FutureValues;
</script>

<div class="space-y-6 mt-4 bg-blue-300 p-6 rounded-lg shadow-md sm:flex sm:space-y-0">
  <FutureValueInfo futureValue={futureValues.futureValueOfSavings}>
    Future value on savings account
  </FutureValueInfo>

  <FutureValueInfo futureValue={futureValues.futureValueOfSP500}>
    Future value after investing in S&P 500
  </FutureValueInfo>
</div>
