import {useEffect, useRef, useState} from "react";
import {Option} from "./Dropdown";

function useDropdown(onChange: (selectedOption: Option | null) => void, defaultValue: Option | null) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  const handleClickOutsideDropdown = ({target}: PointerEvent) => {
    if (dropdownButtonRef.current && !dropdownButtonRef.current.contains(target as HTMLElement)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('pointerdown', handleClickOutsideDropdown);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutsideDropdown);
    };
  }, []);

  return {
    selectedOption,
    isOpen,
    setIsOpen,
    dropdownButtonRef,
    handleOptionClick,
  };
}

export default useDropdown