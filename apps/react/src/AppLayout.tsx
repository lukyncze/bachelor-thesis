import {useEffect, useState} from 'react';
import {Outlet, Link, useLocation} from 'react-router-dom';
import {sunIcon} from './assets/svg/sun';
import {moonIcon} from './assets/svg/moon';

interface RouteLink {
  text: string;
  to: string;
}

const links: ReadonlyArray<RouteLink> = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Counter',
    to: '/counter',
  },
  {
    text: 'Dropdown',
    to: '/dropdown',
  },
  {
    text: 'Translator',
    to: '/translator',
  },
];

function AppLayout() {
  const userModePreference = localStorage.getItem('data-mode') ? true : false;
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(userModePreference);
  const {pathname: currentPathName} = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-mode', 'dark');
      localStorage.setItem('data-mode', 'dark');
    } else {
      document.documentElement.removeAttribute('data-mode');
      localStorage.removeItem('data-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <nav className="bg-gray-200 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                React framework
              </h1>
            </Link>

            <div className="flex items-center lg:order-2">
              <button
                type="button"
                onClick={() => setIsDarkMode(isDarkMode => !isDarkMode)}
                className="text-sm px-3 py-2 lg:py-2.5 mr-1 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                {isDarkMode ? moonIcon : sunIcon}
              </button>

              <button
                type="button"
                onClick={() => setIsMobileNavOpen(isMobileNavOpen => !isMobileNavOpen)}
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                data-collapse-toggle="mobile-menu"
                aria-controls="mobile-menu"
                aria-expanded={isMobileNavOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`w-6 h-6 ${isMobileNavOpen ? 'hidden' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>

                <svg
                  className={`w-6 h-6 ${isMobileNavOpen ? '' : 'hidden'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              id="mobile-menu"
              className={`justify-between items-center w-full lg:flex lg:w-auto lg:ml-auto lg:mr-10 lg:order-1 ${
                isMobileNavOpen ? '' : 'hidden'
              }`}
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {links.map(link => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={
                        'block py-2 pr-4' +
                        `${
                          link.to === currentPathName
                            ? ' pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white'
                            : ' pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                        }`
                      }
                      {...(link.to === currentPathName ? {'aria-current': 'page'} : {})}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow p-8">
        <Outlet />
      </main>

      <footer className="p-4 bg-gray-100 md:p-8 lg:p-8 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <p className="mb-6 text-gray-500 dark:text-gray-400">
            Vytvořeno jako bakalářská práce na Slezské univerzitě v Opavě
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <Link to="#" className="mr-4 hover:underline md:mr-6">
                Text práce
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Github repozitář
              </Link>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; 2023-2024 Lukáš Sukeník
          </span>
        </div>
      </footer>
    </div>
  );
}

export default AppLayout;

// Design taken from:
// https://flowbite.com/blocks/marketing/header/
// https://flowbite.com/blocks/marketing/footer/
