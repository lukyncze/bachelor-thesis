import {ButtonHTMLAttributes, ReactNode} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  onClick: () => void;
  children: ReactNode;
}

function Button({className, children, ...props}: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={`px-4 py-2 rounded-md focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
