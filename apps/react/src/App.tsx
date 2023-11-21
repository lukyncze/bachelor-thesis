import {useState} from 'react';
import Counter from './components/Counter';
import Dropdown, {DropdownVariant, Option} from './components/Dropdown/Dropdown';

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

function App() {
  const [selectedColor, setSelectedColor] = useState<Option | null>(null);

  return (
    <>
      <h1>React Landing Page</h1>

      <Counter />

      <div className='flex gap-2 justify-center items-center h-20'>
        {dropdownVariants.map(variant => (
          <Dropdown
            key={variant}
            options={colors}
            defaultValue={selectedColor}
            placeholder='Select a color'
            onChange={selectedColor => setSelectedColor(selectedColor)}
            variant={variant}
          />
        ))}
        {/* https://www.youtube.com/watch?v=bAJlYgeovlg */}
        {/* https://baseweb.design/components/select/ */}
      </div>
    </>
  );
}

export default App;

