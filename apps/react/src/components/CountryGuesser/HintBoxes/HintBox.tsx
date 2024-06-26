import {ImgHTMLAttributes, ReactNode} from 'react';

export interface HintBoxProps {
  title: string;
  abbrTitle: string;
  hint: string;
  hintIcon: ReactNode;
  hintEnabled?: boolean;
  // React typy, reprezentují všechny atributy, které může mít HTML element <img>.
  flagImage?: ImgHTMLAttributes<HTMLImageElement>;
}

function HintBox({title, abbrTitle, hint = '?', hintIcon, hintEnabled, flagImage}: HintBoxProps) {
  const showFlagHint = flagImage && hintEnabled;

  return (
    <abbr
      title={abbrTitle}
      className="grid aspect-square max-w-40 md:max-w-56 rounded-lg items-center border-2 border-gray-600 no-underline"
    >
      <div className="text-center">
        {showFlagHint ? <img {...flagImage} /> : hintIcon}
        <h3 className="text-center">{title}</h3>
        <p>{hintEnabled ? hint : '?'}</p>
      </div>
    </abbr>
  );
}

export default HintBox;
