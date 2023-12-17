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
    {label: 'Alice Blue', value: '#F0F8FF'},
    {label: 'Antique White', value: '#FAEBD7'},
    {label: 'Aqua', value: '#00FFFF'},
    {label: 'Aquamarine', value: '#7FFFD4'},
    {label: 'Azure', value: '#F0FFFF'},
    {label: 'Beige', value: '#F5F5DC'},
  ];
  protected sizes: ReadonlyArray<DropdownSize> = ['sm', 'md', 'lg'];

  protected selectedColor: Option | null = null;

  protected handleChangeSelected(selectedColor: Option): void {
    this.selectedColor = selectedColor;
  }
}
