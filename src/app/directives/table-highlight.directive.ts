import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appTableHighlight]',
  standalone: true,
})
export class TableHighlightDirective {
  @Input() status: 'available' | 'selected' | 'booked' = 'available';
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.applyStatusStyles();
  }

  private applyStatusStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.renderer.removeStyle(this.el.nativeElement, 'border');

    switch (this.status) {
      case 'selected':
        this.renderer.setStyle(
          this.el.nativeElement,
          'background-color',
          '#90EE90'
        );
        this.renderer.setStyle(
          this.el.nativeElement,
          'border',
          '2px solid #2E8B57'
        );
        break;

      case 'booked':
        this.renderer.setStyle(
          this.el.nativeElement,
          'background-color',
          '#FFB6B6'
        );
        this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.6');
        this.renderer.setStyle(this.el.nativeElement, 'cursor', 'not-allowed');
        break;

      case 'available':
      default:
        this.renderer.setStyle(
          this.el.nativeElement,
          'background-color',
          '#00FFFF'
        );
        break;
    }
  }
}
