import {useState} from 'react';
import {DropdownSize} from '../components/Dropdown/dropdownSize';
import Dropdown, {Option} from '../components/Dropdown/Dropdown';
import {DropdownVariant} from '../components/Dropdown/dropdownVariants';

const dropdownVariants: ReadonlyArray<DropdownVariant> = [
  'primary',
  'secondary',
  'neutral',
  'light',
  'dark',
  'info',
  'success',
  'warning',
  'error',
];

const colors = [
  {label: 'Rose', value: '#be123c'},
  {label: 'Amber', value: '#b45309'},
  {label: 'Lime', value: '#4d7c0f'},
  {label: 'Cyan', value: '#0e7490'},
  {label: 'Indigo', value: '#4338ca'},
  {label: 'Fuchsia', value: '#a21caf'},
];

function DropdownWrapper() {
  const [selectedColor, setSelectedColor] = useState<Option | null>(null);

  const renderDropdownComponents = (size: DropdownSize = 'md') => {
    return (
      <div className="flex gap-2 justify-center items-center h-20">
        {dropdownVariants.map(variant => (
          <Dropdown
            key={`${variant}-${size}`}
            options={colors}
            defaultValue={selectedColor}
            placeholder="Select a color"
            onChange={selectedColor => setSelectedColor(selectedColor)}
            variant={variant}
            size={size}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {renderDropdownComponents('sm')}
      {renderDropdownComponents()}
      {renderDropdownComponents('lg')}
    </>
  );
}

export default DropdownWrapper;
