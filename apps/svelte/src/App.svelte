<script lang="ts">
  import Router from 'svelte-spa-router';
  import Header from './lib/components/layout/Header.svelte';
  import Footer from './lib/components/layout/Footer.svelte';
  import {appRoutes} from './appRoutes';

  const routes = appRoutes.reduce(
    (acc, route) => {
      acc[route.path] = route.component;
      return acc;
    },
    {} as Record<string, object>
  );
</script>

<div class="min-h-screen flex flex-col">
  <Header />

  <main class="flex-grow p-8">
    <Router {routes} />
  </main>

  <Footer />
</div>
