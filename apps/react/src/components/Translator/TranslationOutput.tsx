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
    <textarea
      className='w-1/2 p-2 border'
      value={value}
      placeholder={props.loading ? 'Loading ...' : ''}
      readOnly
    />
  );
}

export default TranslationOutput;

