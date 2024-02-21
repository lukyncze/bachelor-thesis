import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

// Direktiva pro automatickou aktualizaci výšky textové oblasti <textarea>.
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
      // Abychom získali správnou výšku scrollHeight pro textovou oblast, musíme výšku resetovat.
      this.renderer.setStyle(this.el.nativeElement, 'height', '0px');

      // Vypočtenou výšku pak nastavíme přímo na nativní prvek
      // Nativní prvek je prvek, na kterém nastavujeme tuto direktivu
      const computedHeight = `${this.el.nativeElement.scrollHeight + 36}px`;
      this.renderer.setStyle(this.el.nativeElement, 'height', computedHeight);
    }
  }
}

// Převzato a upraveno podle:
// https://medium.com/@oherterich/creating-a-textarea-with-dynamic-height-using-react-and-typescript-5ed2d78d9848
// https://codesandbox.io/s/autosize-textarea-owwtu?from-embed=&file=/src/useAutosizeTextArea.ts
