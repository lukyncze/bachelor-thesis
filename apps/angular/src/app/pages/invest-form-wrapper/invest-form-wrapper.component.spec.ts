import {ComponentFixture, TestBed} from '@angular/core/testing';
import {InvestFormWrapperComponent} from './invest-form-wrapper.component';

describe('FormWrapperComponent', () => {
  let component: InvestFormWrapperComponent;
  let fixture: ComponentFixture<InvestFormWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestFormWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
