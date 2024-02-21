import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {AutosizeTextAreaDirective} from '../autosize-text-area/autosize-text-area.directive';
import {CopyIconComponent} from '../../icons/copy-icon/copy-icon.component';

@Component({
  selector: 'translation-output',
  standalone: true,
  templateUrl: './translation-output.component.html',
  imports: [CommonModule, CopyIconComponent, AutosizeTextAreaDirective],
})
export class TranslationOutputComponent {
  @Input() inputText = '';
  @Input() outputText = '';
  @Input() loading = false;
  @Input() error: Error | null = null;

  protected get value(): string {
    if (this.error) return this.error.message;

    if (this.loading || !this.inputText.length) return '';

    return this.outputText;
  }

  protected handleCopyClick(): void {
    // Zkopírování textu do schránky (CTRL+C)
    navigator.clipboard.writeText(this.outputText);
  }
}
