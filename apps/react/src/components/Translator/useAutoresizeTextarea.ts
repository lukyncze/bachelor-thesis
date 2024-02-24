import {useEffect} from 'react';

// Hook pro automatickou aktualizaci výšky textové oblasti <textarea>.
const useAutosizeTextArea = (textAreaRef: HTMLTextAreaElement | null, value: string) => {
  useEffect(() => {
    if (textAreaRef) {
      // Abychom získali správnou výšku scrollHeight pro textovou oblast, musíme výšku resetovat.
      textAreaRef.style.height = '0px';

      // Výšku pak nastavíme přímo.
      // Při pokusu o nastavení této hodnoty pomocí stavu nebo odkazu bude výsledkem nesprávná hodnota.
      textAreaRef.style.height = `${textAreaRef.scrollHeight + 36}px`;
    }
  }, [textAreaRef, value]);
};

export default useAutosizeTextArea;

// Převzato a upraveno podle:
// https://medium.com/@oherterich/creating-a-textarea-with-dynamic-height-using-react-and-typescript-5ed2d78d9848
// https://codesandbox.io/s/autosize-textarea-owwtu?from-embed=&file=/src/useAutosizeTextArea.ts
