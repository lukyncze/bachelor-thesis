// Definice a export TypeScriptového typu
export type DropdownVariant =
  | 'primary'
  | 'secondary'
  | 'neutral'
  | 'light'
  | 'dark'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

// Record je TypeScriptový typ, který definuje objekt s pevně danými klíči (typu DropdownVariant) a jeho hodnotami.
export const dropdownVariantStyles: Record<
  DropdownVariant,
  {buttonStyles: string; divStyles: string; optionStyles: string}
> = {
  primary: {
    buttonStyles: 'bg-blue-700 text-white hover:bg-blue-900 focus:ring-blue-800',
    divStyles: 'ring-blue-700',
    optionStyles: 'hover:bg-blue-100',
  },
  secondary: {
    buttonStyles: 'bg-gray-300 text-gray-700 hover:bg-gray-400 focus:ring-gray-400',
    divStyles: 'ring-gray-500',
    optionStyles: 'hover:bg-gray-100',
  },
  neutral: {
    buttonStyles: 'bg-white text-gray-700 hover:bg-gray-100 focus:ring-gray-200',
    divStyles: 'ring-gray-300',
    optionStyles: 'hover:bg-gray-100',
  },
  light: {
    buttonStyles: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-300',
    divStyles: 'ring-gray-400',
    optionStyles: 'hover:bg-gray-100',
  },
  dark: {
    buttonStyles: 'bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-900',
    divStyles: 'ring-gray-900',
    optionStyles: 'hover:bg-gray-200',
  },
  info: {
    buttonStyles: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-600',
    divStyles: 'ring-blue-700',
    optionStyles: 'hover:bg-blue-100',
  },
  success: {
    buttonStyles: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-600',
    divStyles: 'ring-green-700',
    optionStyles: 'hover:bg-green-100',
  },
  warning: {
    buttonStyles: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-600',
    divStyles: 'ring-yellow-700',
    optionStyles: 'hover:bg-yellow-100',
  },
  error: {
    buttonStyles: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-600',
    divStyles: 'ring-red-700',
    optionStyles: 'hover:bg-red-100',
  },
};
