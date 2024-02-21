import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CloseIconComponent} from '../../icons/close-icon/close-icon.component';
import {AutosizeTextAreaDirective} from '../autosize-text-area/autosize-text-area.directive';

@Component({
  selector: 'translation-input',
  standalone: true,
  templateUrl: './translation-input.component.html',
  imports: [CommonModule, FormsModule, CloseIconComponent, AutosizeTextAreaDirective],
})
export class TranslationInputComponent {
  protected maximumCharactersCount = 800;

  @Input() public inputText = '';

  @Output() public setInputText = new EventEmitter<string>();

  protected handleInputChange(value: string): void {
    if (value.length <= this.maximumCharactersCount) {
      this.setInputText.emit(value);
    }
  }
}
