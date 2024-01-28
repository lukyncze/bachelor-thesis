import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {FormFieldValues, FutureValues} from '../../components/invest-form/formValues';
import {FutureValuesCalculatorService} from '../../components/invest-form/future-values-calculator/future-values-calculator.service';
import {FutureValuesInfoComponent} from '../../components/invest-form/future-values-info/future-values-info.component';
import {InvestFormComponent} from '../../components/invest-form/invest-form.component';

@Component({
  selector: 'form-wrapper',
  standalone: true,
  templateUrl: './form-wrapper.component.html',
  imports: [CommonModule, InvestFormComponent, FutureValuesInfoComponent],
})
export class FormWrapperComponent {
  protected defaultValues: FormFieldValues = {
    oneOffInvestment: 10_000,
    investmentLength: 10,
    averageSavingsInterest: 2,
    averageSP500Interest: 9.8,
  };
  protected result?: FutureValues;

  constructor(private readonly futureValuesCalculator: FutureValuesCalculatorService) {}

  protected handleFormChanged(formValues: FormFieldValues): void {
    this.result = this.futureValuesCalculator.calculate(formValues);
  }
}
