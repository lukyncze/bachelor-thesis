<script lang="ts">
  import Button from '../components/button/Button.svelte';

  let count = 0;

  const increment = () => (count += 1);
  const decrement = () => (count -= 1);
  const reset = () => (count = 0);
</script>

<div class="bg-gray-200 p-6 rounded-md shadow-md">
  <p class="text-xl font-semibold mb-4">Current count: {count}</p>

  <div class="flex gap-4">
    <Button className="bg-blue-500 text-white hover:bg-blue-600" onClick={increment}>
      Increment
    </Button>

    <Button className="bg-orange-500 text-white hover:bg-orange-600" onClick={decrement}>
      Decrement
    </Button>

    <Button className="bg-gray-500 text-white hover:bg-gray-600" onClick={reset}>Reset</Button>
  </div>
</div>
