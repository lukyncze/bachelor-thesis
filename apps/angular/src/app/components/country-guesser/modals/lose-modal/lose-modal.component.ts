import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Country} from '../../country';
import {BaseModalComponent} from '../base-modal/base-modal.component';

@Component({
  selector: 'lose-modal',
  standalone: true,
  templateUrl: './lose-modal.component.html',
  imports: [BaseModalComponent],
})
export class LoseModalComponent {
  @Input({required: true}) randomCountry!: Country;

  @Output() handleClose = new EventEmitter<void>();
}
