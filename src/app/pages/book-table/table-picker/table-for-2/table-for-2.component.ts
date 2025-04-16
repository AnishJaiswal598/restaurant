import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChairComponent } from '../chair/chair.component';
import { CommonModule } from '@angular/common';
import { BookingDirective } from '../../../../directives/booking.directive';

@Component({
  selector: 'app-table-for-2',
  standalone: true,
  imports: [ChairComponent, CommonModule, BookingDirective],
  templateUrl: './table-for-2.component.html',
  styleUrl: './table-for-2.component.css',
})
export class TableFor2Component {
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
