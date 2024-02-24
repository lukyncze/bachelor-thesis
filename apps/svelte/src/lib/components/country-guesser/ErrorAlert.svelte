<script lang="ts">
  import ErrorIcon from '../icons/ErrorIcon.svelte';

  export let message: string;
</script>

<div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-200" role="alert">
  <ErrorIcon />
  <span class="sr-only">Error</span>
  <p class="font-medium pl-2">{message}</p>
</div>
