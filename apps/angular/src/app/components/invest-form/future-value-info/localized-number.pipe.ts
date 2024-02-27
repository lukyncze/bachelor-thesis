import {Pipe, PipeTransform} from '@angular/core';

// Roura, která převede číslo na formátovaný string s měnou (€).
@Pipe({
  name: 'localizedNumber',
  standalone: true,
})
export class LocalizedNumberPipe implements PipeTransform {
  public transform(value: number): string {
    return `${value.toLocaleString('de-DE')}€`;
  }
}
