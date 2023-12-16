import './index.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import AppLayout from './pages/AppLayout.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import {appRoutes} from './routes/appRoutes.ts';

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
