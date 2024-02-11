import HintBox, {HintBoxProps} from './HintBox';
import {Country} from '../country';
import {sizeIcon} from '../../icons/sizeIcon';
import {populationIcon} from '../../icons/populationIcon';
import {landlockedIcon} from '../../icons/landlockedIcon';
import {regionIcon} from '../../icons/regionIcon';
import {languagesIcon} from '../../icons/languagesIcon';
import {capitalIcon} from '../../icons/capitalIcon';
import {bordersIcon} from '../../icons/bordersIcon';
import {flagIcon} from '../../icons/flagIcon';

interface HintBoxesProps {
  randomCountry: Country;
  hintsEnabledCount: number;
}

function HintBoxes({randomCountry, hintsEnabledCount}: HintBoxesProps) {
  const hintBoxes: ReadonlyArray<HintBoxProps> = [
    {
      title: 'Size',
      abbrTitle: 'The size of the country in km²',
      hint: `${randomCountry.area.toLocaleString()} km²`,
      hintIcon: sizeIcon,
    },
    {
      title: 'Population',
      abbrTitle: '',
      hint: `${randomCountry.population.toLocaleString()} people`,
      hintIcon: populationIcon,
    },
    {
      title: 'Landlocked',
      abbrTitle: '',
      hint: randomCountry.landlocked ? 'Yes' : 'No',
      hintIcon: landlockedIcon,
    },
    {
      title: 'Region',
      abbrTitle: '',
      hint: randomCountry.region || 'None',
      hintIcon: regionIcon,
    },
    {
      title: 'Languages',
      abbrTitle: '',
      hint: Object.keys(randomCountry.languages).length
        ? Object.values(randomCountry.languages).join(', ')
        : 'None',
      hintIcon: languagesIcon,
    },
    {
      title: 'Capital',
      abbrTitle: '',
      hint: randomCountry.capital.length ? Object.values(randomCountry.capital).join(', ') : 'None',
      hintIcon: capitalIcon,
    },
    {
      title: 'Borders',
      abbrTitle: '',
      hint: randomCountry.borders.length ? Object.values(randomCountry.borders).join(', ') : 'None',
      hintIcon: bordersIcon,
    },
    {
      title: 'Flag',
      abbrTitle: '',
      hint: null,
      hintIcon: flagIcon,
      flagImage: {
        src: randomCountry.flags.png,
        alt: 'Country flag',
      },
    },
  ];

  return (
    <>
      {hintBoxes.map((hintBox, index) => (
        <HintBox key={index} {...hintBox} hintEnabled={index + 1 <= hintsEnabledCount} />
      ))}
    </>
  );
}

export default HintBoxes;
