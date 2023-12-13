import {useEffect} from 'react';

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (textAreaRef: HTMLTextAreaElement | null, value: string) => {
  useEffect(() => {
    if (textAreaRef) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.style.height = '0px';

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textAreaRef.style.height = `${textAreaRef.scrollHeight + 36}px`;
    }
  }, [textAreaRef, value]);
};

export default useAutosizeTextArea;

// https://medium.com/@oherterich/creating-a-textarea-with-dynamic-height-using-react-and-typescript-5ed2d78d9848
// https://codesandbox.io/s/autosize-textarea-owwtu?from-embed=&file=/src/useAutosizeTextArea.ts

// V převzatém zdrojovém kódu označovat jeho modifikace
// V textu dokumentu okomentovat co jsem změnil a z jakého důvodu...
