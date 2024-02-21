export type DropdownSize = 'sm' | 'md' | 'lg';

// Record je TypeScriptový typ, který definuje objekt s pevně danými klíči a hodnotami.
export const dropdownSize: Record<DropdownSize, string> = {
  sm: 'py-1.5 px-2 text-xs',
  md: 'py-2 px-3 text-sm',
  lg: 'py-3 px-5 text-base',
};
