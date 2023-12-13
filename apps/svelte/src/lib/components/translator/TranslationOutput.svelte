<script lang="ts">
  import {beforeUpdate} from 'svelte';
  import CopyIcon from './CopyIcon.svelte';
  import {autoresizeTextArea} from './autoresizeTextArea';

  export let inputText: string;
  export let outputText: string;
  export let loading: boolean;
  export let error: Error | null;

  let value = '';
  let placeholder = '';

  beforeUpdate(() => {
    value = getTextAreaValue();
    placeholder = loading ? 'Loading ...' : '';
  });

  const getTextAreaValue = () => {
    if (error) return error.message;

    if (loading || !inputText.length) return '';

    return outputText;
  };

  const handleCopyClick = () => navigator.clipboard.writeText(outputText);
</script>

<div class="relative w-1/2">
  <div class="border h-full bg-gray-100">
    <textarea
      bind:value
      use:autoresizeTextArea
      {placeholder}
      class="block w-full min-h-0 p-3 pr-12 pb-8 resize-none bg-inherit !outline-none"
      readonly
    />
  </div>

  <!-- zde by mel byt outputText... -->
  {#if inputText.length}
    <button
      on:click={handleCopyClick}
      class="absolute bottom-2 right-2 text-gray-500 text-sm p-1.5 hover:bg-gray-200"
    >
      <CopyIcon />
    </button>
  {/if}
</div>
