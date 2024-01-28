import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {FutureValues} from '../formValues';
import {FutureValueInfoComponent} from '../future-value-info/future-value-info.component';

type PresentFutureValuesProps = FutureValues;

@Component({
  selector: 'future-values-info',
  standalone: true,
  templateUrl: './future-values-info.component.html',
  imports: [CommonModule, FutureValueInfoComponent],
})
export class FutureValuesInfoComponent {
  @Input({required: true}) futureValues!: PresentFutureValuesProps;
}
