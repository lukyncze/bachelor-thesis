import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GuessedCountriesListComponent} from './guessed-countries-list.component';

describe('GuessedCountriesListComponent', () => {
  let component: GuessedCountriesListComponent;
  let fixture: ComponentFixture<GuessedCountriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuessedCountriesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GuessedCountriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
