import {ReactNode} from 'react';

interface CountryGuesserSVGWrapperProps {
  children: ReactNode;
}

function CountryGuesserSVGWrapper({children}: CountryGuesserSVGWrapperProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
      data-slot="icon"
      className="inline-block w-14 h-14"
    >
      {children}
    </svg>
  );
}

export default CountryGuesserSVGWrapper;
