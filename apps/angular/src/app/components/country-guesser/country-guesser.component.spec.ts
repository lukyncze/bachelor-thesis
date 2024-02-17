import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CountryGuesserComponent} from './country-guesser.component';

describe('CountryGuesserComponent', () => {
  let component: CountryGuesserComponent;
  let fixture: ComponentFixture<CountryGuesserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryGuesserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryGuesserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
