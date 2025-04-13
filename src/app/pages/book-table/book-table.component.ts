import { Component } from '@angular/core';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [DatePickerComponent, TimePickerComponent],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css',
})
export class BookTableComponent {}
