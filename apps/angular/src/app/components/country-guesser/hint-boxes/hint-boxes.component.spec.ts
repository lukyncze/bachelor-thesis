import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HintBoxesComponent} from './hint-boxes.component';

describe('HintBoxesComponent', () => {
  let component: HintBoxesComponent;
  let fixture: ComponentFixture<HintBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HintBoxesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HintBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
