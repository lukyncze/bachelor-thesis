<script lang="ts">
  import {onDestroy} from 'svelte';
  import LanguageDropdown from '../components/translator/LanguageDropdown.svelte';
  import TranslationInput from '../components/translator/TranslationInput.svelte';
  import TranslationOutput from '../components/translator/TranslationOutput.svelte';
  import {languages} from '../components/translator/languages';

  let inputText = '';
  let outputText = '';
  let outputLanguage = languages[0].value;
  let loading = false;
  let error: Error | null = null;

  // Kontroler, který umožňuje zrušit asynchronní požadavek.
  let abortController: AbortController | null = null;
  // Reference na časovač pro zpoždění.
  let delayTimer: number;

  $: if (inputText.length && outputLanguage) {
    // Zrušení předchozího časovače.
    clearTimeout(delayTimer);

    // Zpoždění překladu o 300 ms.
    delayTimer = setTimeout(() => handleTranslation(), 300);
  }

  onDestroy(() => {
    // Zrušení asynchronního požadavku a časovače při zničení komponenty.
    clearTimeout(delayTimer);
    abortController?.abort();
  });

  // Funkce pro zpracování přeložení textu.
  const handleTranslation = async () => {
    if (!inputText.length) return;

    // Zrušení předchozího asynchronního požadavku.
    abortController?.abort();
    // Vytvoření nového kontroleru pro zrušení asynchronního požadavku.
    abortController = new AbortController();
    loading = true;

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
      signal: abortController.signal,
    };

    try {
      // Odeslání HTTP POST požadavku na server, který nám vrátí přeložený text v nějaké struktuře.
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Something went wrong: ${response.status} Error. Please reload the page.`);
      }

      const result = await response.json();
      outputText = result[0].translations[0].text as string;
    } catch (err: any) {
      // Pokud je chyba typu AbortError, tak ji ignorujeme.
      if (err.name === 'AbortError') return;

      error = err;
    } finally {
      loading = false;
    }
  };
</script>

<div class="container mx-auto">
  <div class="flex border border-b-0 py-1 items-center">
    <h3 class="w-1/2 pl-2">Automatické rozpoznávání jazyka</h3>

    <LanguageDropdown
      options={languages}
      onChange={selectedLanguage => selectedLanguage && (outputLanguage = selectedLanguage.value)}
    />
  </div>

  <div class="flex text-xl">
    <TranslationInput bind:inputText />

    <TranslationOutput {inputText} {outputText} {loading} {error} />
  </div>
</div>
