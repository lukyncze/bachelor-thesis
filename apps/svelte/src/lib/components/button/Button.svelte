<script lang="ts">
  export let className: string;
  export let onClick: () => void;
</script>

<!-- Proměnná $$restProps obsahuje ostatní vlastnosti, které nejsou v komponentě přijímány pomocí klíčového slova "export". -->
<button
  type="button"
  class="px-4 py-2 rounded-md focus:outline-none {className}"
  on:click={onClick}
  {...$$restProps}
>
  <!-- slot slouží k vykreslení obsahu, který vložíme mezi párové tagy dané komponenty. -->
  <slot />
</button>
