import { Component, Input } from '@angular/core';
import { ChairComponent } from '../chair/chair.component';
import { BookingDirective } from '../../../../directives/booking.directive';
import { CurrentTableService } from '../../../../services/current-table.service';

@Component({
  selector: 'app-table-for-4',
  standalone: true,
  imports: [ChairComponent, BookingDirective],
  templateUrl: './table-for-4.component.html',
  styleUrl: './table-for-4.component.css',
})
export class TableFor4Component {
  @Input() tableNo: number = 0;
  @Input() currentStatus: string = 'available';

  constructor(private currentTable: CurrentTableService) {}

  ngOnInit(): void {
    this.currentTable.get().subscribe((val) => {
      if (val != this.tableNo) {
        this.currentStatus =
          this.currentStatus == 'booked' ? 'booked' : 'available';
      }
    });
  }

  alterBookingStatus = (): void => {
    if (this.currentStatus == 'available') {
      this.currentTable.set(this.tableNo);
      this.currentStatus = 'progress';
    } else if (this.currentStatus == 'progress') {
      this.currentTable.set(0);
      this.currentStatus = 'available';
    }
  };
}
