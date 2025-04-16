import { Component, Input } from '@angular/core';
import { ChairComponent } from '../chair/chair.component';
import { BookingDirective } from '../../../../directives/booking.directive';

@Component({
  selector: 'app-table-for-12',
  standalone: true,
  imports: [ChairComponent, BookingDirective],
  templateUrl: './table-for-12.component.html',
  styleUrl: './table-for-12.component.css',
})
export class TableFor12Component {
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
