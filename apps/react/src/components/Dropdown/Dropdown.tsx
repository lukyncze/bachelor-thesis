import {arrowUp} from '../../assets/svg/arrow-up';
import {arrowDown} from '../../assets/svg/arrow-down';
import {DropdownVariant, dropdownVariantStyles} from './dropdownVariants';
import useDropdown from './useDropdown';
import {DropdownSize, dropdownSize} from './dropdownSize';

export interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: ReadonlyArray<Option>;
  onChange: (selectedOption: Option | null) => void;
  defaultValue?: Option | null;
  placeholder?: string;
  variant?: DropdownVariant;
  size?: DropdownSize;
}

function Dropdown({
  options,
  onChange,
  defaultValue = null,
  placeholder = 'Select an option',
  variant = 'primary',
  size = 'md',
}: DropdownProps) {
  const {selectedOption, isOpen, setIsOpen, dropdownRef, handleOptionClick} = useDropdown(
    onChange,
    defaultValue
  );

  const {buttonStyles, divStyles, optionStyles} = dropdownVariantStyles[variant];
  const sizeStyles = dropdownSize[size];

  return (
    <div className='relative inline-block text-left' ref={dropdownRef}>
      <div className='rounded-md shadow-sm'>
        <button
          type='button'
          className={`inline-flex justify-center items-center w-full rounded-md ${sizeStyles} font-medium focus:outline-none focus:ring-1 focus:ring-offset-0.8 ${buttonStyles}`}
          onClick={event => {
            event.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          {selectedOption ? selectedOption.label : placeholder}
          {isOpen ? arrowUp : arrowDown}
        </button>
      </div>

      {isOpen && (
        <div
          className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-opacity-100 z-10 ${divStyles}`}
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
                className={`block w-full text-left px-4 py-2 text-sm hover:text-gray-900 ${optionStyles}`}
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

