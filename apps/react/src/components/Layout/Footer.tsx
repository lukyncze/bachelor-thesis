import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer className="p-4 bg-gray-100 md:p-8 lg:p-8 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          Vytvořeno jako bakalářská práce na Slezské univerzitě v Opavě
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <Link
              to="https://github.com/lukyncze/bachelor-thesis/blob/main/thesis/sablona_ukazka.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 hover:underline md:mr-6"
            >
              Text práce
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/lukyncze/bachelor-thesis"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Github repozitář
            </Link>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2023-2024 Lukáš Sukeník
        </span>
      </div>
    </footer>
  );
}

export default Footer;

// Převzato a upraveno podle:
// https://flowbite.com/blocks/marketing/footer/
