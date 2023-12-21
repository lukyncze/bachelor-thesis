<script lang="ts">
  import {beforeUpdate} from 'svelte';
  import {link, location} from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';
  import MoonIcon from './MoonIcon.svelte';
  import SunIcon from './SunIcon.svelte';
  import {appRoutes} from '../../routes/appRoutes';

  const routes = appRoutes.filter(route => route.name);
  let isMobileNavOpen = false;
  let isDarkMode = localStorage.getItem('data-mode') ? true : false;

  beforeUpdate(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-mode', 'dark');
      localStorage.setItem('data-mode', 'dark');
    } else {
      document.documentElement.removeAttribute('data-mode');
      localStorage.removeItem('data-mode');
    }
  });

  const toggleDarkMode = () => (isDarkMode = !isDarkMode);

  const toggleMobileNav = () => (isMobileNavOpen = !isMobileNavOpen);
</script>

<header>
  <nav class="bg-gray-100 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <a href="/" use:link class="flex items-center">
        <h1 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Svelte framework
        </h1>
      </a>

      <div class="flex items-center lg:order-2">
        <button
          type="button"
          on:click={toggleDarkMode}
          class="text-sm px-3 py-2 lg:py-2.5 mr-1 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          {#if isDarkMode}
            <MoonIcon />
          {:else}
            <SunIcon />
          {/if}
        </button>

        <button
          type="button"
          on:click={toggleMobileNav}
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          data-collapse-toggle="mobile-menu"
          aria-controls="mobile-menu"
          aria-expanded={isMobileNavOpen}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class={`w-6 h-6 ${isMobileNavOpen ? 'hidden' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>

          <svg
            class={`w-6 h-6 ${isMobileNavOpen ? '' : 'hidden'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        class={`justify-between items-center w-full lg:flex lg:w-auto lg:ml-auto lg:mr-10 lg:order-1 ${
          isMobileNavOpen ? '' : 'hidden'
        }`}
      >
        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          {#each routes as route}
            <li>
              <a
                href={route.path}
                class="block py-2 pr-4 pl-3 lg:p-0"
                use:link
                use:active={{
                  className:
                    'text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 dark:text-white',
                  inactiveClassName:
                    'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700',
                }}
                aria-current={route.path === $location ? 'page' : null}
              >
                {route.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </nav>
</header>

<!-- Design taken from: -->
<!-- https://flowbite.com/blocks/marketing/header/ -->
