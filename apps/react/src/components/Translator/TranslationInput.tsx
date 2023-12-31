import {ChangeEvent, useRef} from 'react';
import {closeIcon} from '../icons/closeIcon';
import useAutosizeTextArea from './useAutoresizeTextarea';

interface TranslationInputProps {
  inputText: string;
  setInputText: (inputText: string) => void;
}

function TranslationInput({inputText, setInputText}: TranslationInputProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const maximumCharactersCount = 800;

  useAutosizeTextArea(textAreaRef.current, inputText);

  const handleInputChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    if (target.value.length <= maximumCharactersCount) {
      setInputText(target.value);
    }
  };

  return (
    <div className="relative w-1/2">
      <div className="border h-full">
        <textarea
          ref={textAreaRef}
          className="block w-full min-h-0 p-3 pr-12 pb-8 resize-none !outline-none"
          placeholder="Type to translate ..."
          value={inputText}
          onChange={handleInputChange}
        />
      </div>

      {inputText.length ? (
        <button
          className="absolute top-2 right-2 text-gray-500 text-sm p-1.5 hover:bg-gray-100"
          onClick={() => setInputText('')}
        >
          {closeIcon}
        </button>
      ) : null}

      <span className="absolute bottom-2 right-2 text-gray-500 text-sm">
        {inputText.length} / {maximumCharactersCount} characters
      </span>
    </div>
  );
}

export default TranslationInput;
