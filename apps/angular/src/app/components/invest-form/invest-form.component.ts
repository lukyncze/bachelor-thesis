import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormFieldValues} from './formValues';
import {InputLabelComponent} from './input-label/input-label.component';

type InvestForm = FormGroup<{
  oneOffInvestment: FormControl<number | null>;
  investmentLength: FormControl<number | null>;
  averageSavingsInterest: FormControl<number | null>;
  averageSP500Interest: FormControl<number | null>;
}>;

@Component({
  selector: 'invest-form',
  standalone: true,
  templateUrl: './invest-form.component.html',
  imports: [CommonModule, ReactiveFormsModule, InputLabelComponent],
})
export class InvestFormComponent implements OnInit {
  // This is a workaround for disabling typescript problem e.g. with the initialization of investForm
  // that can be used instead of using ! in the investForm property declaration.
  // "compilerOptions": {
  //   ...
  //   "strictPropertyInitialization": false
  // },
  protected investForm!: InvestForm;

  @Input() defaultValues: FormFieldValues = {
    oneOffInvestment: 500,
    investmentLength: 10,
    averageSavingsInterest: 5,
    averageSP500Interest: 10,
  };

  @Output() formChanged = new EventEmitter<FormFieldValues>();

  constructor(private readonly fb: FormBuilder) {}

  public ngOnInit(): void {
    this.investForm = this.initializeInvestForm();
  }

  protected onSubmit(): void {
    this.formChanged.emit(this.investForm.value as FormFieldValues);
  }

  protected get oneOffInvestmentControl() {
    return this.investForm.controls.oneOffInvestment;
  }

  protected get investmentLengthControl() {
    return this.investForm.controls.investmentLength;
  }

  protected get averageSavingsInterestControl() {
    return this.investForm.controls.averageSavingsInterest;
  }

  protected get averageSP500InterestControl() {
    return this.investForm.controls.averageSP500Interest;
  }

  private initializeInvestForm() {
    return this.fb.group({
      oneOffInvestment: [
        this.defaultValues.oneOffInvestment,
        [Validators.required, Validators.min(20), Validators.max(99_999_999)],
      ],
      investmentLength: [
        this.defaultValues.investmentLength,
        [Validators.required, Validators.min(3), Validators.max(60)],
      ],
      averageSavingsInterest: [
        this.defaultValues.averageSavingsInterest,
        [Validators.required, Validators.min(0), Validators.max(10)],
      ],
      averageSP500Interest: [
        {value: this.defaultValues.averageSP500Interest, disabled: false},
        [Validators.required],
      ],
    });
  }
}
