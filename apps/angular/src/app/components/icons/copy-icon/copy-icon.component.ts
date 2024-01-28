import {Component, Input} from '@angular/core';

@Component({
  selector: 'copy-icon',
  standalone: true,
  templateUrl: './copy-icon.component.html',
})
export class CopyIconComponent {
  @Input() className = 'w-6 h-6';
}
