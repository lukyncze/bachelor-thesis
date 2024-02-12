import {NgComponentOutlet} from '@angular/common';
import {Component, Input, OnInit, Type} from '@angular/core';

type HintComponent = Type<unknown>;

interface FlagImage {
  src: string;
  alt: string;
}

export interface HintBox {
  title: string;
  abbrTitle: string;
  hint: string;
  hintComponent: HintComponent;
  hintEnabled?: boolean;
  flagImage?: FlagImage;
}

@Component({
  selector: 'hint-box',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './hint-box.component.html',
})
export class HintBoxComponent implements OnInit {
  protected showFlagHint = false;

  @Input({required: true}) title = '';
  @Input({required: true}) abbrTitle = '';
  @Input({required: true}) hint = '?';
  @Input({required: true}) hintComponent!: HintComponent;
  @Input() hintEnabled = false;
  @Input() flagImage?: FlagImage;

  public ngOnInit() {
    this.showFlagHint = !!this.flagImage && this.hintEnabled;
  }
}
