interface TranslationInputProps {
  inputText: string;
  setInputText: (inputText: string) => void;
}

const maximumCharactersCount = 2500;

function TranslationInput({inputText, setInputText}: TranslationInputProps) {
  return (
    <div className='relative w-1/2 h-fit'>
      <textarea
        className='block border w-full h-80 p-3 resize-none'
        placeholder='Type to translate ...'
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />

      <div className='absolute top-2 right-2 text-gray-500 text-sm'>
        Icon for removing the input text
      </div>

      <div className='absolute bottom-2 right-2 text-gray-500 text-sm'>
        {inputText.length} / {maximumCharactersCount} characters
      </div>
    </div>
  );
}

export default TranslationInput;

