import {isRouteErrorResponse, useRouteError} from 'react-router-dom';

const getErrorMessage = (error: unknown) => {
  if (isRouteErrorResponse(error)) {
    return `${error.data.message || error.statusText} - ${error.status} error`;
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === 'string') {
    return error;
  }

  console.error(error);

  return 'Unknown error';
};

function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="flex flex-col gap-8 justify-center items-center h-screen">
      <h2 className="text-5xl font-bold">Oops!</h2>

      <p className="text-lg">Omlouváme se, došlo k neočekávané chybě.</p>

      <p className="text-lg text-slate-500">
        <i>{getErrorMessage(error)}</i>
      </p>
    </div>
  );
}

export default ErrorPage;

// https://stackoverflow.com/a/76126878/14501892
