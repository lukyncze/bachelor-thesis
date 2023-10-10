interface LinkProps {
  text: string;
  link: string;
}

const Link = ({text, link}: LinkProps) => {
  return (
    <li>
      <a href={link} className='hover:text-gray-300'>
        {text}
      </a>
    </li>
  );
};

function Navigation() {
  return (
    <nav className='absolute z-50 text-white p-4'>
      <ul className='flex space-x-4'>
        <Link text='Home' link='#' />
        <Link text='Projects' link='#' />
        <Link text='About' link='#' />
        <Link text='Experiments' link='#' />
        <Link text='Contact' link='#' />
      </ul>
    </nav>
  );
}

export default Navigation;

