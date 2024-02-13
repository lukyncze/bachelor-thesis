import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CountryGuessInputComponent} from './country-guess-input.component';

describe('CountryGuessInputComponent', () => {
  let component: CountryGuessInputComponent;
  let fixture: ComponentFixture<CountryGuessInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryGuessInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryGuessInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
