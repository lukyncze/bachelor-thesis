<script lang="ts">
  const items = Array.from({length: 6});
</script>

<div role="status" class="animate-pulse">
  {#each items as item, index}
    <div
      class={`${index === 0 ? '!h-6' : 'h-4'} 
        bg-gray-300 rounded-full dark:bg-gray-400 w-full mt-4`}
    ></div>
  {/each}
  <span class="sr-only">Loading...</span>
</div>
