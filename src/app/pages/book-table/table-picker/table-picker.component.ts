import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TableFor2Component } from './table-for-2/table-for-2.component';
import { TableFor4Component } from './table-for-4/table-for-4.component';
import { TableFor6Component } from './table-for-6/table-for-6.component';
import { TableFor12Component } from './table-for-12/table-for-12.component';
import { TableFor8Component } from './table-for-8/table-for-8.component';
import { booking } from '../../../interfaces/booking.interface';
import { BookingsService } from '../../../services/bookings.service';
import { CurrentTableService } from '../../../services/current-table.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-table-picker',
  standalone: true,
  imports: [
    TableFor2Component,
    TableFor4Component,
    TableFor6Component,
    TableFor12Component,
    TableFor8Component,
  ],
  templateUrl: './table-picker.component.html',
  styleUrl: './table-picker.component.css',
})
export class TablePickerComponent implements OnInit, OnChanges {
  @Input() time: number = 0;
  @Input() date: number = 0;
  destroyed = new Subject<boolean>();
  currentDateTables: booking[] = [];
  timeBookings: booking[] = [];

  constructor(
    private bookingService: BookingsService,
    private currentTable: CurrentTableService
  ) {}

  ngOnInit(): void {
    this.setTimeBookings();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.destroyed.next(true);
    this.currentTable.set(0);
    this.setTimeBookings();
  }

  setTimeBookings = () => {
    this.bookingService
      .get(this.date)
      .pipe(takeUntil(this.destroyed))
      .subscribe((tables) => {
        this.currentDateTables = tables;
        this.timeBookings = this.currentDateTables.filter(
          (table) => this.time == table.time
        );
      });
  };

  getStatus = (tableNo: number) => {
    const findTable = this.timeBookings.find(
      (table) => table.tableNo == tableNo
    );
    if (!findTable) {
      return 'available';
    } else {
      return findTable.status;
    }
  };
}
