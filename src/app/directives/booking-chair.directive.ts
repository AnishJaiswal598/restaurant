import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appBookingChair]',
  standalone: true,
})
export class BookingChairDirective implements OnChanges {
  @Input() currentStatus: string = 'available';
  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentStatus'].currentValue == 'booked') {
      this.el.nativeElement.style.backgroundColor = ' #a61919';
    } else if (changes['currentStatus'].currentValue == 'progress') {
      this.el.nativeElement.style.backgroundColor = ' #8c8c02';
    } else {
      this.el.nativeElement.style.backgroundColor = ' #3498db';
    }
  }
}
