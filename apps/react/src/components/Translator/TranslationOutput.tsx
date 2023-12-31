import {useRef} from 'react';
import {copyIcon} from '../icons/copyIcon';
import useAutosizeTextArea from './useAutoresizeTextarea';

interface TranslationOutputProps {
  inputText: string;
  outputText: string;
  loading: boolean;
  error: Error | null;
}

function getTextAreaValue({inputText, outputText, loading, error}: TranslationOutputProps) {
  if (error) return error.message;

  if (loading || !inputText.length) return '';

  return outputText;
}

function TranslationOutput(props: TranslationOutputProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const {inputText, outputText, loading} = props;
  const value = getTextAreaValue(props);

  useAutosizeTextArea(textAreaRef.current, outputText);

  // Po zkopírování by na uživatele mohla vyskočit nějaká hláška (pop-up)
  const handleCopyClick = () => navigator.clipboard.writeText(outputText);

  return (
    <div className="relative w-1/2">
      <div className="border h-full bg-gray-100">
        <textarea
          ref={textAreaRef}
          className="block w-full min-h-0 p-3 pr-12 pb-8 resize-none bg-inherit !outline-none"
          value={value}
          placeholder={loading ? 'Loading ...' : ''}
          readOnly
        />
      </div>

      {inputText.length && outputText.length ? (
        <button
          onClick={handleCopyClick}
          className="absolute bottom-2 right-2 text-gray-500 text-sm p-1.5 hover:bg-gray-200"
        >
          {copyIcon}
        </button>
      ) : null}
    </div>
  );
}

export default TranslationOutput;
