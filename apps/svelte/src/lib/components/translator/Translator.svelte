<script lang="ts">
  import {onDestroy} from 'svelte';
  import LanguageDropdown from './LanguageDropdown.svelte';
  import TranslationInput from './TranslationInput.svelte';
  import TranslationOutput from './TranslationOutput.svelte';
  import {languages} from './languages';

  let inputText = '';
  let outputText = '';
  let outputLanguage = languages[0].value;
  let loading = false;
  let error: Error | null = null;

  let abortController: AbortController | null = null;
  let delayTimer: number;

  $: {
    if (inputText.length && outputLanguage) {
      clearTimeout(delayTimer);

      delayTimer = setTimeout(() => handleTranslation(), 300);
    }
  }

  onDestroy(() => {
    clearTimeout(delayTimer);
    abortController?.abort();
  });

  const handleTranslation = async () => {
    if (!inputText.length) return;

    abortController?.abort();
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
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Something went wrong: ${response.status} Error. Please reload the page.`);
      }

      const result = await response.json();
      outputText = result[0].translations[0].text as string;
    } catch (err: any) {
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
