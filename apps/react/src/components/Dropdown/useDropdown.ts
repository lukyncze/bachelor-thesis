import {useEffect, useState} from 'react';
import {Option} from './Dropdown';

// React Hook, který se stará o logiku rozevíracího seznamu.
function useDropdown(
  onChange: (selectedOption: Option | null) => void,
  defaultValue: Option | null,
) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  // Toto ID je třeba nastavit na root element dropdown komponenty.
  const dropdownId = `id-${crypto.randomUUID()}`;

  // Ubslužná funkce, která se stará o logiku po kliknutí na jednotlivé položky v dropdownu.
  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  // useEffect je hook, který umožňuje provádět efekty v komponentě.
  useEffect(() => {
    // Obslužná funkce handleClickOutsideDropdown zajistí zavření dropdownu, pokud uživatel klikne mimo něj.
    const handleClickOutsideDropdown = ({target}: PointerEvent) => {
      if (!(target as HTMLElement).closest(`#${dropdownId}`)) {
        setIsOpen(false);
      }
    };

    // Přidáme posluchač události na událost pointerdown a jeho obslužnou funkci.
    document.addEventListener('pointerdown', handleClickOutsideDropdown);

    // Funkce, která se zavolá při odpojení komponenty.
    return () => {
      // Odebereme posluchač události na událost pointerdown a jeho obslužnou funkci.
      document.removeEventListener('pointerdown', handleClickOutsideDropdown);
    };
    // Druhý parametr useEffectu je pole závislostí, které určuje, kdy se má useEffect spustit.
  }, [dropdownId]);

  // Vrátíme všechny hodnoty, které chceme mít dostupné zvenčí.
  return [dropdownId, selectedOption, isOpen, setIsOpen, handleOptionClick] as const;
}

export default useDropdown;
