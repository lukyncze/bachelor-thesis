<script lang="ts" context="module">
  import {type ComponentType} from 'svelte';

  interface FlagImage {
    src: string;
    alt: string;
  }

  export interface HintBoxProps {
    title: string;
    abbrTitle: string;
    hint: string;
    hintComponent: ComponentType;
    hintEnabled?: boolean;
    flagImage?: FlagImage;
  }
</script>

<script lang="ts">
  export let title: string;
  export let abbrTitle: string;
  export let hint = '?';
  export let hintComponent: ComponentType;
  export let hintEnabled = false;
  // TODO: Pohledat zda lze vytvořit optional property
  export let flagImage: FlagImage | undefined = undefined;

  const HintComponent = hintComponent;
</script>

<abbr
  title={abbrTitle}
  class="grid aspect-square max-w-40 md:max-w-56 rounded-lg items-center border-2 border-gray-600 no-underline"
>
  <div class="text-center">
    {#if flagImage && hintEnabled}
      <img {...flagImage} src={flagImage.src} alt={flagImage.alt} />
    {:else}
      <HintComponent />
      <!-- Je také možné použít tuto syntax: <svelte:component this={HintComponent} /> -->
    {/if}
    <h3 class="text-center">{title}</h3>
    <p>{hintEnabled ? hint : '?'}</p>
  </div>
</abbr>
