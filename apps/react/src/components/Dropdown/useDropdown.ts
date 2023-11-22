import {useEffect, useRef, useState} from "react";
import {Option} from "./Dropdown";

function useDropdown(onChange: (selectedOption: Option | null) => void, defaultValue: Option | null) {
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

  return {
    selectedOption,
    isOpen,
    setIsOpen,
    dropdownRef,
    handleOptionClick,
  };
}

export default useDropdown