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
      abbrTitle: 'The number of people living in the country',
      hint: `${randomCountry.population.toLocaleString()} people`,
      hintIcon: populationIcon,
    },
    {
      title: 'Landlocked',
      abbrTitle: 'Is country landlocked (does not have a sea)?',
      hint: randomCountry.landlocked ? 'Yes' : 'No',
      hintIcon: landlockedIcon,
    },
    {
      title: 'Region',
      abbrTitle: 'The region of the world the country is in',
      hint: randomCountry.region || 'None',
      hintIcon: regionIcon,
    },
    {
      title: 'Languages',
      abbrTitle: 'The languages spoken in the country',
      hint: Object.keys(randomCountry.languages).length
        ? Object.values(randomCountry.languages).join(', ')
        : 'None',
      hintIcon: languagesIcon,
    },
    {
      title: 'Capital',
      abbrTitle: 'The capital city of the country',
      hint: randomCountry.capital.length ? Object.values(randomCountry.capital).join(', ') : 'None',
      hintIcon: capitalIcon,
    },
    {
      title: 'Borders',
      abbrTitle: 'The countries that border the country',
      hint: randomCountry.borders.length ? Object.values(randomCountry.borders).join(', ') : 'None',
      hintIcon: bordersIcon,
    },
    {
      title: 'Flag',
      abbrTitle: 'The flag of the country',
      hint: '',
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
        <HintBox key={index} {...hintBox} hintEnabled={index < hintsEnabledCount} />
      ))}
    </>
  );
}

export default HintBoxes;
