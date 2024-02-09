import {ReactNode} from 'react';
import Button from '../../Button/Button';
import {closeIcon} from '../../icons/closeIcon';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  children: ReactNode;
}

function Modal({isOpen, handleClose, title, children}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex={-1}
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden flex fixed items-center justify-center inset-0 z-50 w-full h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-3xl max-h-full">
        <div className="relative border bg-gray-200 border-gray-400 rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-3 md:px-5 md:py-3 border-b border-gray-300 rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>

            <button
              data-modal-hide="static-modal"
              className="text-gray-800 bg-transparent hover:bg-gray-300 hover:text-gray-900 rounded-lg text-sm w-10 h-10 ms-auto inline-flex justify-center items-center dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={handleClose}
            >
              {closeIcon}
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-4 md:p-5 space-y-4">
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">{children}</p>
          </div>

          <div className="flex items-center p-3 md:px-5 md:py-3 border-t border-gray-300 rounded-b dark:border-gray-600">
            <Button
              data-modal-hide="static-modal"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleClose}
            >
              Restart the game
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

// Design taken from:
// https://flowbite.com/docs/components/modal/
