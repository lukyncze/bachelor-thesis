<script lang="ts">
  export let futureValue: number;

  $: localizedFutureValue = `${futureValue.toLocaleString('de-DE')}€`;
</script>

<div class="p-1 sm:w-1/2">
  <p class="text-xl font-semibold mb-2 text-gray-800"><slot /></p>
  <p class="text-5xl font-bold">{localizedFutureValue}</p>
</div>
