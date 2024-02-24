import {ReactNode} from 'react';

interface FutureValueInfoProps {
  futureValue: number;
  children: ReactNode;
}

const getLocalizedFutureValue = (value: number): string => `${value.toLocaleString('de-DE')}€`;

function FutureValueInfo({children, futureValue}: FutureValueInfoProps) {
  return (
    <div className="p-1 sm:w-1/2">
      <p className="text-xl font-semibold mb-2 text-gray-800">{children}</p>
      <p className="text-5xl font-bold">{getLocalizedFutureValue(futureValue)}</p>
    </div>
  );
}

export default FutureValueInfo;
