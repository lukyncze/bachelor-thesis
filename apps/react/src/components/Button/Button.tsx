import {ReactNode} from 'react';

interface ButtonProps {
  className: string;
  onClick: () => void;
  children: ReactNode;
}

function Button({className, onClick, children}: ButtonProps): JSX.Element {
  return (
    <button className={`px-4 py-2 rounded-md focus:outline-none ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
