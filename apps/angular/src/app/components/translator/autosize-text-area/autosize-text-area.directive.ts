import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

// Updates the height of a <textarea> when the value changes.
@Directive({
  selector: '[autosizeTextArea]',
  standalone: true,
})
export class AutosizeTextAreaDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('input') onInputChange() {
    this.adjustTextAreaHeight();
  }

  private adjustTextAreaHeight() {
    if (this.el.nativeElement) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      this.renderer.setStyle(this.el.nativeElement, 'height', '0px');

      // We then set the computed height directly to the native element
      // Native element is a element on which we set this directive
      const computedHeight = `${this.el.nativeElement.scrollHeight + 36}px`;
      this.renderer.setStyle(this.el.nativeElement, 'height', computedHeight);
    }
  }
}

// Inspiration:
// https://medium.com/@oherterich/creating-a-textarea-with-dynamic-height-using-react-and-typescript-5ed2d78d9848
// https://codesandbox.io/s/autosize-textarea-owwtu?from-embed=&file=/src/useAutosizeTextArea.ts
