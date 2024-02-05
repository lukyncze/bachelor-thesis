import {ReactNode} from 'react';

interface HintBoxProps {
  title: string;
  abbrTitle: string;
  hint?: string;
  children?: ReactNode;
}

function HintBox({title, abbrTitle, hint = '?', children}: HintBoxProps) {
  return (
    <abbr
      title={abbrTitle}
      className="grid aspect-square max-w-40 md:max-w-56 rounded-lg items-center border-2 border-black no-underline"
    >
      <div className="text-center">
        <div>{children}</div>
        <h3 className="text-center">{title}</h3>
        <p>{hint}</p>
      </div>
    </abbr>
  );
}

export default HintBox;
