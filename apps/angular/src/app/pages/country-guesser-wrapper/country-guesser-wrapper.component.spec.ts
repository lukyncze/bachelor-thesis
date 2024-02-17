import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CountryGuesserWrapperComponent} from './country-guesser-wrapper.component';

describe('CountryGuesserWrapperComponent', () => {
  let component: CountryGuesserWrapperComponent;
  let fixture: ComponentFixture<CountryGuesserWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryGuesserWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryGuesserWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
