import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {FutureValueInfoComponent} from '../future-value-info/future-value-info.component';
import {FutureValues} from '../types';

type FutureValuesInfoProps = FutureValues;

@Component({
  selector: 'future-values-info',
  standalone: true,
  templateUrl: './future-values-info.component.html',
  imports: [CommonModule, FutureValueInfoComponent],
})
export class FutureValuesInfoComponent {
  // Použití {required: true} zajistí to, že vyplnění vstupní vlastnosti je vždy povinné.
  // Zároveň použití "!" pak zajistí to, že TypeScript nezobrazí chybu ohledně neinicializované vlastnosti.
  // -----
  // Pokud bychom chtěli chybu vypnout, můžeme přenastavit následující nastavení v tsconfig.json:
  // "compilerOptions": {
  //   ...
  //   "strictPropertyInitialization": false
  // },
  @Input({required: true}) futureValues!: FutureValuesInfoProps;
}
