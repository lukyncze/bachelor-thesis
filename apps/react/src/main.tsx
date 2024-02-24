import './index.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import axios from 'axios';
import axiosRetry, {exponentialDelay, isNetworkError, isRetryableError} from 'axios-retry';
import AppLayout from './pages/AppLayout.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import {appRoutes} from './routes/appRoutes.ts';

// axiosRetry konfigurace.
axiosRetry(axios, {
  retries: 3,
  retryDelay: (...arg) => exponentialDelay(...arg, 500),
  retryCondition(error) {
    return isNetworkError(error) || isRetryableError(error);
  },
});

// Vytvoření routeru pomocí react-router-dom.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<ErrorPage />}>
      {appRoutes.map(route => (
        <Route
          key={route.name}
          index={route.index}
          path={route.path}
          Component={route.component}
          caseSensitive
        />
      ))}
    </Route>,
  ),
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
