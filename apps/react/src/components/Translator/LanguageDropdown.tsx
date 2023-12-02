import Dropdown, {Option} from '../Dropdown/Dropdown';

interface LanguageDropdown {
  options: ReadonlyArray<Option>;
  onChange: (selectedLanguage: Option | null) => void;
}

function LanguageDropdown({options, onChange}: LanguageDropdown) {
  return (
    <Dropdown
      key='language-dropdown'
      options={options}
      defaultValue={options[0]}
      placeholder='Select a language for translation'
      onChange={onChange}
      variant='secondary'
    />
  );
}

export default LanguageDropdown;

