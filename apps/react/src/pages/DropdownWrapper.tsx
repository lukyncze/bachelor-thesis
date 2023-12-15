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
  {label: 'Alice Blue', value: '#F0F8FF'},
  {label: 'Antique White', value: '#FAEBD7'},
  {label: 'Aqua', value: '#00FFFF'},
  {label: 'Aquamarine', value: '#7FFFD4'},
  {label: 'Azure', value: '#F0FFFF'},
  {label: 'Beige', value: '#F5F5DC'},
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
