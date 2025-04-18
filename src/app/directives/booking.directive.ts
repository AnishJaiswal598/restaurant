import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appBooking]',
  standalone: true,
})
export class BookingDirective implements OnChanges {
  @Input() currentStatus: string = 'available';
  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentStatus'].currentValue == 'booked') {
      this.el.nativeElement.style.backgroundColor = 'red';
      this.el.nativeElement.style.cursor = 'not-allowed';
    } else if (changes['currentStatus'].currentValue == 'progress') {
      this.el.nativeElement.style.backgroundColor = 'yellow';
      this.el.nativeElement.style.cursor = 'pointer';
    } else {
      this.el.nativeElement.style.backgroundColor = 'aqua';
      this.el.nativeElement.style.cursor = 'pointer';
    }
  }
}
