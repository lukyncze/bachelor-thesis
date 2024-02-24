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

  // Kontroler, který umožňuje zrušit asynchronní požadavek.
  const abortControllerRef = useRef<AbortController | null>(null);
  // Reference na časovač pro zpoždění.
  const delayTimerRef = useRef<number>();

  useEffect(() => {
    // Zrušení asynchronního požadavku a časovače při zničení komponenty.
    return () => {
      clearTimeout(delayTimerRef.current);
      abortControllerRef?.current?.abort();
    };
  }, []);

  useEffect(() => {
    // Callback funkce pro zpracování přeložení textu.
    const handleTranslation = async () => {
      if (!inputText.length) return;

      // Zrušení předchozího asynchronního požadavku.
      abortControllerRef.current?.abort();
      // Vytvoření nového kontroleru pro zrušení asynchronního požadavku.
      abortControllerRef.current = new AbortController();
      setLoading(true);

      const parsedInputText = inputText.replace(/\n/g, '');
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
        body: `[{"Text":"${parsedInputText}"}]`,
        signal: abortControllerRef.current?.signal,
      };

      try {
        // Odeslání HTTP POST požadavku na server, který nám vrátí přeložený text v nějaké struktuře.
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(
            `Something went wrong: ${response.status} Error. Please reload the page.`,
          );
        }

        const result = await response.json();
        const translatedText = result[0].translations[0].text as string;
        setOutputText(translatedText);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        // Pokud je chyba typu AbortError, tak ji ignorujeme.
        if (error.name === 'AbortError') return;

        setError(error);
      } finally {
        setLoading(false);
      }
    };

    // Zrušení předchozího časovače.
    clearTimeout(delayTimerRef.current);

    // Zpoždění překladu o 300 ms.
    delayTimerRef.current = setTimeout(() => handleTranslation(), 300);

    // Zrušení časovače při zničení komponenty.
    return () => clearTimeout(delayTimerRef.current);
  }, [inputText, outputLanguage]);

  return (
    <div className="container mx-auto">
      <div className="flex border border-b-0 py-1 items-center">
        <h3 className="w-1/2 pl-2">Automatické rozpoznávání jazyka</h3>

        <LanguageDropdown
          options={languages}
          onChange={selectedLanguage =>
            selectedLanguage && setOutputLanguage(selectedLanguage.value)
          }
        />
      </div>

      <div className="flex text-xl">
        <TranslationInput inputText={inputText} setInputText={setInputText} />

        <TranslationOutput
          inputText={inputText}
          outputText={outputText}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
}

export default Translator;
