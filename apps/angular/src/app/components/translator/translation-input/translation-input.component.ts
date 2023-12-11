import {CommonModule} from '@angular/common';
import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CloseIconComponent} from './close-icon/close-icon.component';

@Component({
  selector: 'translation-input',
  standalone: true,
  templateUrl: './translation-input.component.html',
  imports: [CommonModule, CloseIconComponent],
})
export class TranslationInputComponent {
  protected maximumCharactersCount = 800;

  @Input() public inputText = '';

  @Output() public setInputText = new EventEmitter<string>();

  @ViewChild('textAreaRef') textAreaRef!: ElementRef;

  protected handleInputChange(event: Event): void {
    const target = event.target as HTMLTextAreaElement;

    if (target.value.length <= this.maximumCharactersCount) {
      this.setInputText.emit(target.value);
    }
  }
}
