import {Component, Input} from '@angular/core';

@Component({
  selector: 'region-icon',
  standalone: true,
  templateUrl: './region-icon.component.html',
})
export class RegionIconComponent {
  @Input() className = 'inline-block w-14 h-14';
}
