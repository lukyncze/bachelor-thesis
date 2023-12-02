interface TranslationInputProps {
  inputText: string;
  setInputText: (inputText: string) => void;
}

function TranslationInput({inputText, setInputText}: TranslationInputProps) {
  return (
    <textarea
      className='w-1/2 p-2 border'
      placeholder='Type to translate ...'
      value={inputText}
      onChange={e => setInputText(e.target.value)}
    />
  );
}

export default TranslationInput;

