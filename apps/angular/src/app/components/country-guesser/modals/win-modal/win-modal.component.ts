import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Country} from '../../country';
import {BaseModalComponent} from '../base-modal/base-modal.component';

@Component({
  selector: 'win-modal',
  standalone: true,
  templateUrl: './win-modal.component.html',
  imports: [BaseModalComponent],
})
export class WinModalComponent {
  @Input({required: true}) randomCountry!: Country;
  @Input({required: true}) totalGuessesNeeded = 0;

  @Output() handleClose = new EventEmitter<void>();
}
