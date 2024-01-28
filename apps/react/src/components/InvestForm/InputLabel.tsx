import {ReactNode} from 'react';

interface LabelProps {
  id: string;
  children: ReactNode;
}

function InputLabel({id, children}: LabelProps) {
  return (
    <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700">
      {children}
    </label>
  );
}

export default InputLabel;
