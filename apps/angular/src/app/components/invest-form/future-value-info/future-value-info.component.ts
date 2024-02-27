import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {LocalizedNumberPipe} from './localized-number.pipe';

@Component({
  selector: 'future-value-info',
  standalone: true,
  imports: [CommonModule, LocalizedNumberPipe],
  templateUrl: './future-value-info.component.html',
})
export class FutureValueInfoComponent {
  @Input({required: true}) futureValue = 0;
}
