<script lang="ts">
  import CloseIcon from './CloseIcon.svelte';
  import {autoresizeTextArea} from './autoresizeTextArea';

  export let inputText: string;

  const maximumCharactersCount = 800;
</script>

<div class="relative w-1/2">
  <div class="border h-full">
    <textarea
      bind:value={inputText}
      use:autoresizeTextArea
      class="block w-full min-h-0 p-3 pr-12 pb-8 resize-none !outline-none"
      placeholder="Type to translate ..."
    />
  </div>

  {#if inputText.length}
    <button
      class="absolute top-2 right-2 text-gray-500 text-sm p-1.5 hover:bg-gray-100"
      on:click={() => (inputText = '')}
    >
      <CloseIcon />
    </button>
  {/if}

  <span class="absolute bottom-2 right-2 text-gray-500 text-sm">
    {inputText.length} / {maximumCharactersCount} characters
  </span>
</div>
