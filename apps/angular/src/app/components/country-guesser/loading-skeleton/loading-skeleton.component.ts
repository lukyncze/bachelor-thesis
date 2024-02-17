import {Component} from '@angular/core';

@Component({
  selector: 'loading-skeleton',
  standalone: true,
  templateUrl: './loading-skeleton.component.html',
})
export class LoadingSkeletonComponent {
  protected items = Array.from({length: 6});
}
