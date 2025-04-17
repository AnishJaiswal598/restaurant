import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { TablePickerComponent } from './table-picker/table-picker.component';
import { BookingsService } from '../../services/bookings.service';
import { booking } from '../../interfaces/booking.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [
    DatePickerComponent,
    TimePickerComponent,
    TablePickerComponent,
    CommonModule,
  ],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css',
})
export class BookTableComponent implements OnInit {
  bookedTables: booking[] = [];
  date: number = 0;
  time: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const time = new Date().getHours();
    const date = new Date().getDate();
    this.date = time < 23 ? date : date + 1;
  }

  selectedDate = (currentDate: number): void => {
    this.date = currentDate;
    this.cdr.detectChanges();
  };

  setCurrentTime = (time: number): void => {
    this.time = time;
    this.cdr.detectChanges();
  };
}
