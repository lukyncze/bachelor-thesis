import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AutosizeTextAreaDirective} from '../autosize-text-area/autosize-text-area.directive';
import {CloseIconComponent} from '../../icons/close-icon/close-icon.component';

@Component({
  selector: 'translation-input',
  standalone: true,
  templateUrl: './translation-input.component.html',
  imports: [CommonModule, CloseIconComponent, AutosizeTextAreaDirective],
})
export class TranslationInputComponent {
  protected maximumCharactersCount = 800;

  @Input() public inputText = '';

  @Output() public setInputText = new EventEmitter<string>();

  protected handleInputChange(event: Event): void {
    const target = event.target as HTMLTextAreaElement;

    if (target.value.length <= this.maximumCharactersCount) {
      this.setInputText.emit(target.value);
    }
  }
}
