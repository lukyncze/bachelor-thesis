import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {DropdownComponent, Option} from '../../components/dropdown/dropdown.component';
import {DropdownSize} from '../../components/dropdown/dropdownSize';
import {DropdownVariant} from '../../components/dropdown/dropdownVariants';

@Component({
  selector: 'dropdown-wrapper',
  standalone: true,
  imports: [CommonModule, DropdownComponent],
  templateUrl: './dropdown-wrapper.component.html',
})
export class DropdownWrapperComponent {
  protected dropdownVariants: ReadonlyArray<DropdownVariant> = [
    'primary',
    'secondary',
    'neutral',
    'light',
    'dark',
    'info',
    'success',
    'warning',
    'error',
  ];
  protected colors: ReadonlyArray<Option> = [
    {label: 'Rose', value: '#be123c'},
    {label: 'Amber', value: '#b45309'},
    {label: 'Lime', value: '#4d7c0f'},
    {label: 'Cyan', value: '#0e7490'},
    {label: 'Indigo', value: '#4338ca'},
    {label: 'Fuchsia', value: '#a21caf'},
  ];
  protected sizes: ReadonlyArray<DropdownSize> = ['sm', 'md', 'lg'];

  protected selectedColor: Option | null = null;

  protected handleChangeSelected(selectedColor: Option): void {
    this.selectedColor = selectedColor;
  }
}
