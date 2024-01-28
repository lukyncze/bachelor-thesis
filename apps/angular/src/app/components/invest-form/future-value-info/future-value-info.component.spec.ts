import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FutureValueInfoComponent} from './future-value-info.component';

describe('FutureValueInfoComponent', () => {
  let component: FutureValueInfoComponent;
  let fixture: ComponentFixture<FutureValueInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutureValueInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FutureValueInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
