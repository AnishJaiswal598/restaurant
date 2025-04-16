import { Component, OnInit } from '@angular/core';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { TablePickerComponent } from './table-picker/table-picker.component';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [DatePickerComponent, TimePickerComponent, TablePickerComponent],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css',
})
export class BookTableComponent implements OnInit {
  date: number = new Date().getDate();
  public val = [
    {
      tableId: 1,
      slotTime: '9-10',
    },
    {
      tableId: 2,
      slotTime: '10-11',
    },
  ];
  ngOnInit(): void {}

  selectedDate = (currentDate: number) => {
    this.date = currentDate;
  };
}
