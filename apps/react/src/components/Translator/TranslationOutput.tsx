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
  const value = getTextAreaValue(props);

  return (
    <div className='relative w-1/2 h-fit'>
      <textarea
        className='block border w-full h-80 p-3 resize-none'
        value={value}
        placeholder={props.loading ? 'Loading ...' : ''}
        readOnly
      />

      <div className='absolute bottom-2 right-2 text-gray-500 text-sm'>
        Icon for copying output text
      </div>
    </div>
  );
}

export default TranslationOutput;

