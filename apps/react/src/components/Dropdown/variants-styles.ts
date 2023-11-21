import {DropdownVariant} from "./Dropdown";

export const variantStyles: Record<DropdownVariant, {button: string; div: string; option: string}> = {
  primary: {
    button: 'bg-blue-700 text-white hover:bg-blue-900 focus:ring-blue-800',
    div: 'ring-blue-700',
    option: 'hover:bg-blue-100',
  },
  secondary: {
    button: 'bg-gray-300 text-gray-700 hover:bg-gray-400 focus:ring-gray-400',
    div: 'ring-gray-500',
    option: 'hover:bg-gray-100',
  },
  neutral: {
    button: 'bg-white text-gray-700 hover:bg-gray-100 focus:ring-gray-200',
    div: 'ring-gray-300',
    option: 'hover:bg-gray-100',
  },
  light: {
    button: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-300',
    div: 'ring-gray-400',
    option: 'hover:bg-gray-100',
  },
  dark: {
    button: 'bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-900',
    div: 'ring-gray-900',
    option: 'hover:bg-gray-200',
  },
  info: {
    button: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-600',
    div: 'ring-blue-700',
    option: 'hover:bg-blue-100',
  },
  success: {
    button: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-600',
    div: 'ring-green-700',
    option: 'hover:bg-green-100',
  },
  warning: {
    button: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-600',
    div: 'ring-yellow-700',
    option: 'hover:bg-yellow-100',
  },
  error: {
    button: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-600',
    div: 'ring-red-700',
    option: 'hover:bg-red-100',
  },
};