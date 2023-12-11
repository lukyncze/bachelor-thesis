import {CommonModule} from '@angular/common';
import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {CopyIconComponent} from './copy-icon/copy-icon.component';

@Component({
  selector: 'translation-output',
  standalone: true,
  templateUrl: './translation-output.component.html',
  imports: [CommonModule, CopyIconComponent],
})
export class TranslationOutputComponent {
  @Input() inputText = '';
  @Input() outputText = '';
  @Input() loading = false;
  @Input() error: Error | null = null;

  @ViewChild('textAreaRef') textAreaRef!: ElementRef;

  protected get value(): string {
    if (this.error) return this.error.message;

    if (this.loading || !this.inputText.length) return '';

    return this.outputText;
  }

  protected handleCopyClick(): void {
    navigator.clipboard.writeText(this.outputText);
  }
}
