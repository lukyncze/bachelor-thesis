import {Component, Input} from '@angular/core';

@Component({
  selector: 'copy-icon',
  standalone: true,
  templateUrl: './copy-icon.component.html',
})
export class CopyIconComponent {
  @Input() protected className = 'w-5 h-5 ml-1';
}
