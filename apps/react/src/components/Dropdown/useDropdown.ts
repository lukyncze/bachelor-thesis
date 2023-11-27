import {useEffect, useState} from "react";
import {Option} from "./Dropdown";

function useDropdown(onChange: (selectedOption: Option | null) => void, defaultValue: Option | null) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  // Toto ID je třeba nastavit na root element dropdown komponenty
  const dropdownId = `id-${crypto.randomUUID()}`;

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };
  
  useEffect(() => {
    const handleClickOutsideDropdown = ({target}: PointerEvent) => {
      if (!(target as HTMLElement).closest(`#${dropdownId}`)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('pointerdown', handleClickOutsideDropdown);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutsideDropdown);
    };
  }, [dropdownId]);

  return {
    id: dropdownId,
    selectedOption,
    isOpen,
    setIsOpen,
    handleOptionClick,
  };
}

export default useDropdown