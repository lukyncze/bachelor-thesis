<script lang="ts">
  export let className: string;
  export let onClick: () => void;
</script>

<button
  type="button"
  class="px-4 py-2 rounded-md focus:outline-none {className}"
  on:click={onClick}
  {...$$restProps}
>
  <slot />
</button>
