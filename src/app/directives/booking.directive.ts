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
    } else if (changes['currentStatus'].currentValue == 'progress') {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    } else {
      this.el.nativeElement.style.backgroundColor = 'aqua';
    }
  }
}
