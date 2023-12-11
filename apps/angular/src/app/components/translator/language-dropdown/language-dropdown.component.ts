import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DropdownComponent, Option} from '../../dropdown/dropdown.component';

@Component({
  selector: 'language-dropdown',
  standalone: true,
  templateUrl: './language-dropdown.component.html',
  imports: [CommonModule, DropdownComponent],
})
export class LanguageDropdownComponent {
  @Input() options: ReadonlyArray<Option> = [];

  @Output() languageChange = new EventEmitter<Option>();

  protected handleChangeSelected(selectedLanguage: Option): void {
    this.languageChange.emit(selectedLanguage);
  }
}
