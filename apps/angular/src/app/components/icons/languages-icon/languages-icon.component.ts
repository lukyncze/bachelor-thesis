import {Component, Input} from '@angular/core';

@Component({
  selector: 'languages-icon',
  standalone: true,
  templateUrl: './languages-icon.component.html',
})
export class LanguagesIconComponent {
  @Input() className = 'inline-block w-14 h-14';
}
