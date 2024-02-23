import {CommonModule} from '@angular/common';
import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {ArrowDownIconComponent} from '../icons/arrow-down-icon/arrow-down-icon.component';
import {ArrowUpIconComponent} from '../icons/arrow-up-icon/arrow-up-icon.component';
import {DropdownSize, dropdownSize} from './dropdownSize';
import {DropdownVariant, dropdownVariantStyles} from './dropdownVariants';

export interface Option {
  label: string;
  value: string;
}

@Component({
  selector: 'dropdown',
  standalone: true,
  templateUrl: './dropdown.component.html',
  imports: [CommonModule, ArrowDownIconComponent, ArrowUpIconComponent],
})
export class DropdownComponent implements OnInit {
  public selectedOption?: Option | null;
  public isOpen = false;

  // Toto ID je třeba nastavit na root element dropdown komponenty.
  protected dropdownId = `id-${crypto.randomUUID()}`;

  protected buttonStyles = '';
  protected divStyles = '';
  protected optionStyles = '';
  protected sizeStyles = '';

  @Input() options: ReadonlyArray<Option> = [];
  @Input() defaultValue: Option | null = null;
  @Input() placeholder = 'Select an option';
  @Input() variant: DropdownVariant = 'primary';
  @Input() size: DropdownSize = 'md';

  @Output() changeSelected = new EventEmitter<Option>();

  // Dekorátor @HostListener umožňuje naslouchat na události.
  // V tomto případě nasloucháme na událost pointerdown, která je vyvolána jakémkoli kliknutí myší.
  // Callback metoda onClickOutsideDropdown zajistí zavření dropdownu, pokud uživatel klikne mimo něj.
  @HostListener('document:pointerdown', ['$event.target'])
  onClickOutsideDropdown(target: HTMLElement): void {
    if (this.isOpen && !target.closest(`#${this.dropdownId}`)) {
      this.isOpen = false;
    }
  }

  // Metoda ngOnInit je volána po inicializaci komponenty a jejích vlastností.
  // Pro používání této metody musíme pro třídu implementovat rozhraní OnInit.
  public ngOnInit(): void {
    this.selectedOption = this.defaultValue;
    this.getDropdownStyles();
  }

  // Ubslužná metoda, ovládá otevírání a zavírání dropdownu
  protected toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  // Ubslužná metoda, která je volána po kliknutí na jednotlivé položky v dropdownu
  protected handleOptionClick(option: Option): void {
    this.selectedOption = option;
    this.isOpen = false;
    this.changeSelected.emit(option);
  }

  // Pomocná metoda, která nastaví styly pro dropdown podle zvolené varianty a velikosti
  private getDropdownStyles(): void {
    const {buttonStyles, divStyles, optionStyles} = dropdownVariantStyles[this.variant];
    this.buttonStyles = buttonStyles;
    this.divStyles = divStyles;
    this.optionStyles = optionStyles;
    this.sizeStyles = dropdownSize[this.size];
  }
}
