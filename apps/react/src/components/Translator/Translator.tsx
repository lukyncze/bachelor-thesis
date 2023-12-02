import {useEffect, useRef, useState} from 'react';
import TranslationInput from './TranslationInput';
import TranslationOutput from './TranslationOutput';
import {languages} from './languages';
import LanguageDropdown from './LanguageDropdown';

function Translator() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [outputLanguage, setOutputLanguage] = useState(languages[0].value);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);
  const delayTimerRef = useRef<number>();

  useEffect(() => {
    return () => {
      clearTimeout(delayTimerRef.current);
      abortControllerRef?.current?.abort();
    };
  }, []);

  useEffect(() => {
    const handleTranslation = async () => {
      if (!inputText.length) return;

      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      setLoading(true);

      const url = `${import.meta.env.VITE_RAPID_API_BASE_URL}${outputLanguage}${
        import.meta.env.VITE_RAPID_API_QUERY_PARAMS
      }`;
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
          'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
        },
        body: `[{"Text":"${inputText}"}]`,
        signal: abortControllerRef.current?.signal,
      };

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.status} Error`);
        }

        const result = await response.json();
        const translatedText = result[0].translations[0].text as string;
        setOutputText(translatedText);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.name === 'AbortError') return;

        setError(error);
      } finally {
        setLoading(false);
      }
    };

    clearTimeout(delayTimerRef.current);

    delayTimerRef.current = setTimeout(() => handleTranslation(), 300);

    return () => clearTimeout(delayTimerRef.current);
  }, [inputText, outputLanguage]);

  return (
    <>
      <h2>Translator</h2>

      <div className='container mx-auto p-4'>
        <LanguageDropdown
          options={languages}
          onChange={selectedLanguage =>
            selectedLanguage && setOutputLanguage(selectedLanguage.value)
          }
        />

        <div className='flex gap-5'>
          <TranslationInput inputText={inputText} setInputText={setInputText} />

          <TranslationOutput
            inputText={inputText}
            outputText={outputText}
            loading={loading}
            error={error}
          />
        </div>
      </div>
    </>
  );
}

export default Translator;

