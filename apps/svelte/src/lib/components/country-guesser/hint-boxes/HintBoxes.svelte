<script lang="ts">
  import HintBox, {type HintBoxProps} from './HintBox.svelte';
  import {type Country} from '../country';
  import BordersIcon from '../../icons/BordersIcon.svelte';
  import PopulationIcon from '../../icons/PopulationIcon.svelte';
  import LandlockedIcon from '../../icons/LandlockedIcon.svelte';
  import RegionIcon from '../../icons/RegionIcon.svelte';
  import LanguagesIcon from '../../icons/LanguagesIcon.svelte';
  import CapitalIcon from '../../icons/CapitalIcon.svelte';
  import SizeIcon from '../../icons/SizeIcon.svelte';
  import FlagIcon from '../../icons/FlagIcon.svelte';

  export let randomCountry: Country;
  export let hintsEnabledCount: number;

  const hintBoxes: ReadonlyArray<HintBoxProps> = [
    {
      title: 'Size',
      abbrTitle: 'The size of the country in km²',
      hint: `${randomCountry.area.toLocaleString()} km²`,
      hintComponent: SizeIcon,
    },
    {
      title: 'Population',
      abbrTitle: 'The number of people living in the country',
      hint: `${randomCountry.population.toLocaleString()} people`,
      hintComponent: PopulationIcon,
    },
    {
      title: 'Landlocked',
      abbrTitle: 'Is country landlocked (does not have a sea)?',
      hint: randomCountry.landlocked ? 'Yes' : 'No',
      hintComponent: LandlockedIcon,
    },
    {
      title: 'Region',
      abbrTitle: 'The region of the world the country is in',
      hint: randomCountry.region || 'None',
      hintComponent: RegionIcon,
    },
    {
      title: 'Languages',
      abbrTitle: 'The languages spoken in the country',
      hint: Object.keys(randomCountry.languages).length
        ? Object.values(randomCountry.languages).join(', ')
        : 'None',
      hintComponent: LanguagesIcon,
    },
    {
      title: 'Capital',
      abbrTitle: 'The capital city of the country',
      hint: randomCountry.capital.length ? Object.values(randomCountry.capital).join(', ') : 'None',
      hintComponent: CapitalIcon,
    },
    {
      title: 'Borders',
      abbrTitle: 'The countries that border the country',
      hint: randomCountry.borders.length ? Object.values(randomCountry.borders).join(', ') : 'None',
      hintComponent: BordersIcon,
    },
    {
      title: 'Flag',
      abbrTitle: 'The flag of the country',
      hint: '',
      hintComponent: FlagIcon,
      flagImage: {
        src: randomCountry.flags.png,
        alt: 'Country flag',
      },
    },
  ];
</script>

{#each hintBoxes as hintBox, index}
  <HintBox {...hintBox} hintEnabled={index < hintsEnabledCount} />
{/each}
