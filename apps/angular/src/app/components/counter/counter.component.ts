import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {CounterButtonComponent} from './button/counter-button.component';

@Component({
  selector: 'counter',
  standalone: true,
  templateUrl: './counter.component.html',
  imports: [CommonModule, CounterButtonComponent],
})
export class CounterComponent {
  protected count = 0;

  protected increment(): void {
    this.count++;
  }

  protected decrement(): void {
    this.count--;
  }

  protected reset(): void {
    this.count = 0;
  }
}
