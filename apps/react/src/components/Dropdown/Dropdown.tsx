import {useState, useEffect, useRef} from 'react';
import {arrowUp} from '../../assets/svg/arrow-up';
import {arrowDown} from '../../assets/svg/arrow-down';
import {variantStyles} from './variants-styles';

export interface Option {
  label: string;
  value: string;
}

export type DropdownVariant =
  | 'primary'
  | 'secondary'
  | 'neutral'
  | 'light'
  | 'dark'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

interface DropdownProps {
  options: ReadonlyArray<Option>;
  onChange: (selectedOption: Option | null) => void;
  defaultValue?: Option | null;
  placeholder?: string;
  variant?: DropdownVariant;
}

function Dropdown({
  options,
  onChange,
  defaultValue = null,
  placeholder = 'Select an option',
  variant = 'primary',
}: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  const handleClickOutsideDropdown = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideDropdown);

    return () => {
      document.removeEventListener('click', handleClickOutsideDropdown);
    };
  }, []);

  const {button, div, option: optionClass} = variantStyles[variant];

  return (
    <div className='relative inline-block text-left' ref={dropdownRef}>
      <div className='rounded-md shadow-sm'>
        <button
          type='button'
          className={`inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-offset-0.8 ${button}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? selectedOption.label : placeholder}
          {isOpen ? arrowUp : arrowDown}
        </button>
      </div>

      {isOpen && (
        <div
          className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-opacity-100 ${div}`}
        >
          <div
            className='py-1'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'
          >
            {options.map(option => (
              <button
                key={option.value}
                className={`block w-full text-left px-4 py-2 text-sm hover:text-gray-900 ${optionClass}`}
                role='menuitem'
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;

