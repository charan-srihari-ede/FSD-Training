import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]',
})
export class TextHighlightDirective {
  @Input() appTextHighlight = '';

  constructor(private elemRef: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.color = this.appTextHighlight;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elemRef.nativeElement.style.color = 'black';
  }
}
