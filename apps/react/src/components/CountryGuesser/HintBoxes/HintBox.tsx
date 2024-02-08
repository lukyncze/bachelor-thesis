import {ReactNode} from 'react';

export interface HintBoxProps {
  title: string;
  abbrTitle: string;
  children: ReactNode;
  hint: string | null;
  hintEnabled?: boolean;
}

function HintBox({title, abbrTitle, hint = '?', hintEnabled, children}: HintBoxProps) {
  return (
    <abbr
      title={abbrTitle}
      className="grid aspect-square max-w-40 md:max-w-56 rounded-lg items-center border-2 border-gray-600 no-underline"
    >
      <div className="text-center">
        {hint !== null || hintEnabled ? <div>{children}</div> : null}
        <h3 className="text-center">{title}</h3>
        <p>{hintEnabled ? hint : '?'}</p>
      </div>
    </abbr>
  );
}

export default HintBox;
