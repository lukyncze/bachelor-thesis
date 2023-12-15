import './index.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import AppLayout from './AppLayout.tsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Landing from './pages/Landing.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Counter from './pages/Counter.tsx';
import DropdownWrapper from './pages/DropdownWrapper.tsx';
import Translator from './components/Translator/Translator.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Landing />} />
      <Route path="counter" element={<Counter />} />
      <Route path="dropdown" element={<DropdownWrapper />} />
      <Route path="translator" element={<Translator />} />
    </Route>,
  ),
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
