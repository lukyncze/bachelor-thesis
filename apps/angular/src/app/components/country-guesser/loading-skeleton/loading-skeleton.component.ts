import {Component} from '@angular/core';

@Component({
  selector: 'loading-skeleton',
  standalone: true,
  templateUrl: './loading-skeleton.component.html',
})
export class LoadingSkeletonComponent {
  // Pole s 6 prázdnými položkami.
  protected items = Array.from({length: 6});
}
