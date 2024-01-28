import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'future-value-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './future-value-info.component.html',
})
export class FutureValueInfoComponent {
  protected localizedFutureValue = 'No localized future value set!';

  @Input({required: true}) set futureValue(value: number) {
    this.localizedFutureValue = this.getLocalizedNumber(value);
  }

  private getLocalizedNumber(value: number): string {
    return `${value.toLocaleString('de-DE')}€`;
  }
}
