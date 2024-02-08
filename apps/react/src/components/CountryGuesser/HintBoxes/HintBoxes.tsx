import HintBox, {HintBoxProps} from './HintBox';
import {Country} from '../useCountries';

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
      children: '🌍',
    },
    {
      title: 'Population',
      abbrTitle: '',
      hint: `${randomCountry.population.toLocaleString()} people`,
      children: '👥',
    },
    {
      title: 'Landlocked',
      abbrTitle: '',
      hint: randomCountry.landlocked ? 'Yes' : 'No',
      children: '🏃‍♂️',
    },
    {
      title: 'Region',
      abbrTitle: '',
      hint: randomCountry.region || 'None',
      children: '🌐',
    },
    {
      title: 'Languages',
      abbrTitle: '',
      hint: randomCountry.languages ? Object.values(randomCountry.languages).join(', ') : 'None',
      children: '🗣️',
    },
    {
      title: 'Capital',
      abbrTitle: '',
      hint: randomCountry.capital.length ? Object.values(randomCountry.capital).join(', ') : 'None',
      children: '🏛️',
    },
    {
      title: 'Borders',
      abbrTitle: '',
      hint: randomCountry.borders.length ? Object.values(randomCountry.borders).join(', ') : 'None',
      children: '🚧',
    },
    {
      title: 'Flag',
      abbrTitle: '',
      hint: null,
      children: <img src={randomCountry.flags.png} alt="Country flag" />,
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
