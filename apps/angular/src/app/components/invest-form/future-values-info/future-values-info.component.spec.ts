import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FutureValuesInfoComponent} from './future-values-info.component';

describe('FutureValuesInfoComponent', () => {
  let component: FutureValuesInfoComponent;
  let fixture: ComponentFixture<FutureValuesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutureValuesInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FutureValuesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
