import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ButtonWrapperComponent} from './counter-button.component';

describe('ButtonComponent', () => {
  let component: ButtonWrapperComponent;
  let fixture: ComponentFixture<ButtonWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
