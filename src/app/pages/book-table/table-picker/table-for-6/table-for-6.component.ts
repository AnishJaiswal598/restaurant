import { Component, Input } from '@angular/core';
import { ChairComponent } from '../chair/chair.component';
import { BookingDirective } from '../../../../directives/booking.directive';

@Component({
  selector: 'app-table-for-6',
  standalone: true,
  imports: [ChairComponent, BookingDirective],
  templateUrl: './table-for-6.component.html',
  styleUrl: './table-for-6.component.css',
})
export class TableFor6Component {
  @Input() tableNo: number = 0;
  @Input() currentStatus: string = 'available';

  alterBookingStatus = (): void => {
    if (this.currentStatus == 'available') {
      this.currentStatus = 'progress';
    } else if (this.currentStatus == 'progress') {
      this.currentStatus = 'available';
    }
  };
}
