// Svelte akce pro automatickou aktualizaci výšky textové oblasti <textarea>.
export const autoresizeTextArea = (element: HTMLTextAreaElement) => {
  element.addEventListener('input', () => resizeTextArea(element));

  return {
    destroy() {
      element.removeEventListener('input', () => resizeTextArea(element));
    },
  };
};

const resizeTextArea = (element: HTMLTextAreaElement) => {
  // Abychom získali správnou výšku scrollHeight pro textovou oblast, musíme výšku resetovat.
  element.style.height = '0px';
  // Výšku pak nastavíme přímo na nativní prvek.
  element.style.height = `${element.scrollHeight + 36}px`;
};

