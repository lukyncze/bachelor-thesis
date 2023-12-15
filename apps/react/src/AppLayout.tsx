import {Outlet} from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow p-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
