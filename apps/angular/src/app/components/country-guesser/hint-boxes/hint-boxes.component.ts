import {Component, Input, OnInit} from '@angular/core';
import {BordersIconComponent} from '../../icons/borders-icon/borders-icon.component';
import {Country} from '../country';
import {HintBox, HintBoxComponent} from '../hint-box/hint-box.component';

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
        hintComponent: BordersIconComponent,
      },
      {
        title: 'Population',
        // TODO: abbr titles...
        abbrTitle: '',
        hint: `${randomCountry.population.toLocaleString()} people`,
        hintComponent: BordersIconComponent,
      },
      {
        title: 'Landlocked',
        abbrTitle: '',
        hint: randomCountry.landlocked ? 'Yes' : 'No',
        hintComponent: BordersIconComponent,
      },
      {
        title: 'Region',
        abbrTitle: '',
        hint: randomCountry.region || 'None',
        hintComponent: BordersIconComponent,
      },
      {
        title: 'Languages',
        abbrTitle: '',
        hint: Object.keys(randomCountry.languages).length
          ? Object.values(randomCountry.languages).join(', ')
          : 'None',
        hintComponent: BordersIconComponent,
      },
      {
        title: 'Capital',
        abbrTitle: '',
        hint: randomCountry.capital.length
          ? Object.values(randomCountry.capital).join(', ')
          : 'None',
        hintComponent: BordersIconComponent,
      },
      {
        title: 'Borders',
        abbrTitle: '',
        hint: randomCountry.borders.length
          ? Object.values(randomCountry.borders).join(', ')
          : 'None',
        hintComponent: BordersIconComponent,
      },
      {
        title: 'Flag',
        abbrTitle: '',
        hint: '',
        hintComponent: BordersIconComponent,
        flagImage: {
          src: randomCountry.flags.png,
          alt: 'Country flag',
        },
      },
    ];
  }
}
