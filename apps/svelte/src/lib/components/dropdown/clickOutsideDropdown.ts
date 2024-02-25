export const clickOutsideDropdown = (
  node: HTMLDivElement,
  callback: (event: PointerEvent) => void
) => {
  const handlePointerDown = (event: PointerEvent) => callback(event);

  document.addEventListener('pointerdown', handlePointerDown);

  return {
    destroy() {
      document.removeEventListener('pointerdown', handlePointerDown);
    },
  };
};
