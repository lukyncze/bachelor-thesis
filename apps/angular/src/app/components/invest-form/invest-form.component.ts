import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputLabelComponent} from './input-label/input-label.component';
import {InvestFormData} from './types';

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
  // Použití "!" zajistí to, že TypeScript nezobrazí chybu ohledně neinicializované vlastnosti.
  // -----
  // Pokud bychom chtěli chybu vypnout, můžeme přenastavit následující nastavení v tsconfig.json:
  // "compilerOptions": {
  //   ...
  //   "strictPropertyInitialization": false
  // },
  protected investForm!: InvestForm;

  @Input() defaultValues: InvestFormData = {
    oneOffInvestment: 500,
    investmentLength: 10,
    averageSavingsInterest: 5,
    averageSP500Interest: 10,
  };

  @Output() formChanged = new EventEmitter<InvestFormData>();

  // FormBuilder slouží k vytváření formulářů a jejich prvků.
  constructor(private readonly fb: FormBuilder) {}

  public ngOnInit(): void {
    this.investForm = this.initializeInvestForm();
  }

  protected onSubmit(): void {
    this.formChanged.emit(this.investForm.value as InvestFormData);
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
    // Vytvoření formuláře s výchozími hodnotami (případně vlastnostmi) a validátory.
    // Jednotlivé prvky FormGroup bývají označovány jako FormControl.
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
