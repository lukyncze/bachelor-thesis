import {errorIcon} from '../icons/errorIcon';

interface ErrorAlertProps {
  message: string;
}

function ErrorAlert({message}: ErrorAlertProps) {
  return (
    <div
      className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-200"
      role="alert"
    >
      {errorIcon}
      <span className="sr-only">Error</span>
      <p className="font-medium pl-2">{message}</p>
    </div>
  );
}

export default ErrorAlert;
