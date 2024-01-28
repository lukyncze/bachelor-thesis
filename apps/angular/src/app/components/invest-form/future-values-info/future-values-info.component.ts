import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {FutureValueInfoComponent} from '../future-value-info/future-value-info.component';
import {FutureValues} from '../types';

type PresentFutureValuesProps = FutureValues;

@Component({
  selector: 'future-values-info',
  standalone: true,
  templateUrl: './future-values-info.component.html',
  imports: [CommonModule, FutureValueInfoComponent],
})
export class FutureValuesInfoComponent {
  // Trik pro zajištění toho, aby v inputu byla hodnota daného datového typu předána,
  // ale zároveň aby se nezobrazovala chyba typescriptu s neinicializovanou vlastností.
  @Input({required: true}) futureValues!: PresentFutureValuesProps;
}
