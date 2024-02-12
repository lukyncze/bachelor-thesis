import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {FutureValuesCalculatorService} from '../../components/invest-form/future-values-calculator/future-values-calculator.service';
import {FutureValuesInfoComponent} from '../../components/invest-form/future-values-info/future-values-info.component';
import {InvestFormComponent} from '../../components/invest-form/invest-form.component';
import {FutureValues, InvestFormData} from '../../components/invest-form/types';

@Component({
  selector: 'invest-form-wrapper',
  standalone: true,
  templateUrl: './invest-form-wrapper.component.html',
  imports: [CommonModule, InvestFormComponent, FutureValuesInfoComponent],
})
export class InvestFormWrapperComponent {
  protected defaultValues: InvestFormData = {
    oneOffInvestment: 10_000,
    investmentLength: 10,
    averageSavingsInterest: 2,
    averageSP500Interest: 9.8,
  };
  protected futureValues?: FutureValues;

  constructor(private readonly futureValuesCalculator: FutureValuesCalculatorService) {}

  protected handleFormChanged(formValues: InvestFormData): void {
    this.futureValues = this.futureValuesCalculator.calculate(formValues);
  }
}
