// https://learn.svelte.dev/tutorial/actions

export const autoresizeTextArea = (element: HTMLTextAreaElement) => {
  element.addEventListener('input', () => resizeTextArea(element));

  return {
    destroy() {
      element.removeEventListener('input', () => resizeTextArea(element));
    },
  };
};

const resizeTextArea = (element: HTMLTextAreaElement) => {
  element.style.height = '0px';
  element.style.height = `${element.scrollHeight + 36}px`;
};

