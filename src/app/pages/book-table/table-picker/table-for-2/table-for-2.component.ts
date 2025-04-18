import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChairComponent } from '../chair/chair.component';
import { CommonModule } from '@angular/common';
import { BookingDirective } from '../../../../directives/booking.directive';
import { CurrentTableService } from '../../../../services/current-table.service';

@Component({
  selector: 'app-table-for-2',
  standalone: true,
  imports: [ChairComponent, CommonModule, BookingDirective],
  templateUrl: './table-for-2.component.html',
  styleUrl: './table-for-2.component.css',
})
export class TableFor2Component implements OnInit {
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
