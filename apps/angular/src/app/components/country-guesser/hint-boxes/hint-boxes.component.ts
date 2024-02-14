import {Component, Input, OnInit} from '@angular/core';
import {BordersIconComponent} from '../../icons/borders-icon/borders-icon.component';
import {CapitalIconComponent} from '../../icons/capital-icon/capital-icon.component';
import {FlagIconComponent} from '../../icons/flag-icon/flag-icon.component';
import {LandlockedIconComponent} from '../../icons/landlocked-icon/landlocked-icon.component';
import {LanguagesIconComponent} from '../../icons/languages-icon/languages-icon.component';
import {PopulationIconComponent} from '../../icons/population-icon/population-icon.component';
import {RegionIconComponent} from '../../icons/region-icon/region-icon.component';
import {SizeIconComponent} from '../../icons/size-icon/size-icon.component';
import {Country} from '../country';
import {HintBox, HintBoxComponent} from './hint-box/hint-box.component';

@Component({
  selector: 'hint-boxes',
  standalone: true,
  templateUrl: './hint-boxes.component.html',
  imports: [HintBoxComponent],
})
export class HintBoxesComponent implements OnInit {
  protected hintBoxes: ReadonlyArray<HintBox> = [];

  @Input({required: true}) randomCountry!: Country;
  @Input({required: true}) hintsEnabledCount!: number;

  public ngOnInit() {
    this.hintBoxes = this.getHintBoxesData(this.randomCountry);
  }

  private getHintBoxesData(randomCountry: Country): ReadonlyArray<HintBox> {
    return [
      {
        title: 'Size',
        abbrTitle: 'The size of the country in km²',
        hint: `${randomCountry.area.toLocaleString()} km²`,
        hintComponent: SizeIconComponent,
      },
      {
        title: 'Population',
        abbrTitle: 'The number of people living in the country',
        hint: `${randomCountry.population.toLocaleString()} people`,
        hintComponent: PopulationIconComponent,
      },
      {
        title: 'Landlocked',
        abbrTitle: 'Is country landlocked (does not have a sea)?',
        hint: randomCountry.landlocked ? 'Yes' : 'No',
        hintComponent: LandlockedIconComponent,
      },
      {
        title: 'Region',
        abbrTitle: 'The region of the world the country is in',
        hint: randomCountry.region || 'None',
        hintComponent: RegionIconComponent,
      },
      {
        title: 'Languages',
        abbrTitle: 'The languages spoken in the country',
        hint: Object.keys(randomCountry.languages).length
          ? Object.values(randomCountry.languages).join(', ')
          : 'None',
        hintComponent: LanguagesIconComponent,
      },
      {
        title: 'Capital',
        abbrTitle: 'The capital city of the country',
        hint: randomCountry.capital.length
          ? Object.values(randomCountry.capital).join(', ')
          : 'None',
        hintComponent: CapitalIconComponent,
      },
      {
        title: 'Borders',
        abbrTitle: 'The countries that border the country',
        hint: randomCountry.borders.length
          ? Object.values(randomCountry.borders).join(', ')
          : 'None',
        hintComponent: BordersIconComponent,
      },
      {
        title: 'Flag',
        abbrTitle: 'The flag of the country',
        hint: '',
        hintComponent: FlagIconComponent,
        flagImage: {
          src: randomCountry.flags.png,
          alt: 'Country flag',
        },
      },
    ];
  }
}
