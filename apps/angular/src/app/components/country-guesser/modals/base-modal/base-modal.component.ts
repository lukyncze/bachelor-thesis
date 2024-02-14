import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CloseIconComponent} from '../../../icons/close-icon/close-icon.component';

@Component({
  selector: 'base-modal',
  standalone: true,
  templateUrl: './base-modal.component.html',
  imports: [CloseIconComponent],
})
export class BaseModalComponent {
  @Input({required: true}) title = '';

  @Output() handleClose = new EventEmitter<void>();
}
