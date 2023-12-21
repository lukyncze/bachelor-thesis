<script lang="ts">
  import {type SvelteComponent} from 'svelte';
  import Router, {type RouteDefinition} from 'svelte-spa-router';
  import Header from './lib/components/layout/Header.svelte';
  import Footer from './lib/components/layout/Footer.svelte';
  import {appRoutes} from './lib/routes/appRoutes';

  const routes: RouteDefinition = appRoutes.reduce(
    (acc, route) => {
      acc[route.path] = route.component as typeof SvelteComponent;
      return acc;
    },
    {} as Record<string, typeof SvelteComponent>
  );
</script>

<div class="min-h-screen flex flex-col">
  <Header />

  <main class="flex-grow p-8">
    <Router {routes} />
  </main>

  <Footer />
</div>
