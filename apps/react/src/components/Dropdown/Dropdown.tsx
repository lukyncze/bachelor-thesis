import {arrowUpIcon} from '../icons/arrowUpIcon';
import {arrowDownIcon} from '../icons/arrowDownIcon';
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
  // Použití vlastního hooku useDropdown.
  const [id, selectedOption, isOpen, setIsOpen, handleOptionClick] = useDropdown(
    onChange,
    defaultValue,
  );

  const {buttonStyles, divStyles, optionStyles} = dropdownVariantStyles[variant];
  const sizeStyles = dropdownSize[size];

  return (
    // Dynamické atributy nastavujeme pomocí NÁZEV_ATRIBUTU={HODNOTA}
    <div className="relative inline-block text-left" id={id}>
      <div className="rounded-md shadow-sm">
        {/* Pro poslouchání na události v DOMu můžeme použít syntaxi: NÁZEV_UDÁLOSTI={OBSLUŽNÁ_METODA} */}
        <button
          type="button"
          className={`inline-flex justify-center items-center w-full rounded-md ${sizeStyles} font-medium focus:outline-none focus:ring-1 focus:ring-offset-0.8 ${buttonStyles}`}
          onClick={event => {
            event.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          {selectedOption ? selectedOption.label : placeholder}
          {isOpen ? arrowUpIcon : arrowDownIcon}
        </button>
      </div>

      {/* Pro podmíněné vykreslovaní můžeme využít bloky { } a v nich klasický JavaScript */}
      {isOpen && (
        <div
          className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-opacity-100 z-10 ${divStyles}`}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/* Pro vykreslení listu (pole hodnot) můžeme využít bloky { } a JavaScriptovou funkci .map() */}
            {options.map(option => (
              <button
                key={option.value}
                className={`block w-full text-left px-4 py-2 text-sm hover:text-gray-900 ${optionStyles}`}
                role="menuitem"
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
