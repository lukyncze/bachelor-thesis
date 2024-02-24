<script lang="ts">
  import Button from '../../button/Button.svelte';
  import CloseIcon from '../../icons/CloseIcon.svelte';

  export let title: string;
  export let handleClose: () => void;
</script>

<div
  id="static-modal"
  data-modal-backdrop="static"
  tabIndex={-1}
  aria-hidden="true"
  class="overflow-y-auto overflow-x-hidden flex fixed items-center justify-center inset-0 z-50 w-full h-[calc(100%-1rem)] max-h-full"
>
  <div class="relative p-4 w-full max-w-3xl max-h-full">
    <div class="relative border bg-gray-200 border-gray-400 rounded-lg shadow dark:bg-gray-700">
      <div
        class="flex items-center justify-between p-3 md:px-5 md:py-3 border-b border-gray-300 rounded-t dark:border-gray-600"
      >
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>

        <button
          data-modal-hide="static-modal"
          class="text-gray-800 bg-transparent hover:bg-gray-300 hover:text-gray-900 rounded-lg text-sm w-10 h-10 ms-auto inline-flex justify-center items-center dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          on:click={handleClose}
        >
          <CloseIcon />
          <span class="sr-only">Close modal</span>
        </button>
      </div>

      <div class="p-4 md:p-5 space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          <slot />
        </p>
      </div>

      <div
        class="flex items-center p-3 md:px-5 md:py-3 border-t border-gray-300 rounded-b dark:border-gray-600"
      >
        <Button
          data-modal-hide="static-modal"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleClose}
        >
          Restart the game
        </Button>
      </div>
    </div>
  </div>
</div>

<!-- Převzato a upraveno podle: -->
<!-- https://flowbite.com/docs/components/modal/ -->
