import { Component } from '@angular/core';
import { DatePickerComponent } from './date-picker/date-picker.component';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [DatePickerComponent],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css',
})
export class BookTableComponent {}
