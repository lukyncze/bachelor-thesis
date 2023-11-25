import {CommonModule} from '@angular/common';
import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {dropdownSize} from './../../../../../svelte/src/lib/components/dropdown/dropdownSize';
import {ArrowDownComponent} from "./arrow-down.component";
import {ArrowUpComponent} from "./arrow-up.component";
import {DropdownSize} from './dropdownSize';
import {DropdownVariant, dropdownVariantStyles} from './dropdownVariants';

export interface Option {
  label: string;
  value: string;
}

@Component({
    selector: 'dropdown',
    standalone: true,
    templateUrl: './dropdown.component.html',
    imports: [CommonModule, ArrowDownComponent, ArrowUpComponent]
})
export class DropdownComponent implements OnInit {
  public selectedOption?: Option | null;
  public isOpen = false;

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
  
  @ViewChild('dropdownButtonRef') buttonRef!: ElementRef<HTMLButtonElement>;

  @HostListener('document:pointerdown', ['$event.target'])
  onClickOutsideDropdown(target: HTMLElement): void {
    if (this.isOpen && !this.buttonRef.nativeElement.contains(target)) {
      this.isOpen = false;
    }
  }
  
  constructor() {}
  
  public ngOnInit(): void {
    this.selectedOption = this.defaultValue;
    this.getDropdownStyles();
  }

  protected toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  protected handleOptionClick(option: Option): void {
    this.selectedOption = option;
    this.isOpen = false;
    this.changeSelected.emit(option)
  }

  private getDropdownStyles(): void {
    const {buttonStyles, divStyles, optionStyles} = dropdownVariantStyles[this.variant];
    this.buttonStyles = buttonStyles;
    this.divStyles = divStyles
    this.optionStyles = optionStyles;
    this.sizeStyles = dropdownSize[this.size];
  }
}
