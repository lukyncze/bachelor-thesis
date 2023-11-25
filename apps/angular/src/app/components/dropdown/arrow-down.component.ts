import {Component, Input} from "@angular/core";

@Component({
  selector: 'arrow-down',
  standalone: true,
  templateUrl: './arrow-down.component.html',
})
export class ArrowDownComponent {
  @Input() protected className = 'w-5 h-5 ml-1';
}
