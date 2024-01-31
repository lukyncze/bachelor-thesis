<script lang="ts">
  export let id: string;
</script>

<label for={id} class="block mb-2 text-sm font-medium text-gray-700">
  <slot />
</label>
