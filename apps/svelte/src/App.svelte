<script lang="ts">
  import {QueryClient, QueryClientProvider} from '@tanstack/svelte-query';
  import Router, {type RouteDefinition} from 'svelte-spa-router';
  import {wrap} from 'svelte-spa-router/wrap';
  import Header from './lib/components/layout/Header.svelte';
  import Footer from './lib/components/layout/Footer.svelte';
  import {appRoutes} from './lib/routes/appRoutes';

  const routes: RouteDefinition = appRoutes.reduce(
    (routesMap, route) => routesMap.set(route.path, wrap({component: route.component})),
    new Map()
  );

  const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <div class="min-h-screen flex flex-col">
    <Header />

    <main class="flex-grow p-8">
      <Router {routes} />
    </main>

    <Footer />
  </div>
</QueryClientProvider>
