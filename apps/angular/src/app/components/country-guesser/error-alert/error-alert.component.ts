import {Component, Input} from '@angular/core';
import {ErrorIconComponent} from '../../icons/error-icon/error-icon.component';

@Component({
  selector: 'error-alert',
  standalone: true,
  templateUrl: './error-alert.component.html',
  imports: [ErrorIconComponent],
})
export class ErrorAlertComponent {
  @Input() message = '';
}
