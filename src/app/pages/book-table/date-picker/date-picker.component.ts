import { Component } from '@angular/core';
import { dayDate } from '../../../interfaces/dayDate.interface';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css',
})
export class DatePickerComponent {
  disableFront: boolean = false;
  disableBack: boolean = true;
  dateList: dayDate[] = [];
  start: number = 0;
  selectedDate: number = 0;
  ngOnInit(): void {
    if (new Date().getHours() != 23) {
      this.dateList.push({ dayType: 'Today', Date: new Date().getDate() });
    }
    for (let i = 1; i < 30; i++) {
      this.dateList.push({
        dayType: new Date(Date.now() + i * 86400000)
          .toLocaleString('default', {
            weekday: 'long',
          })
          .substring(0, 3),
        Date: new Date(Date.now() + i * 86400000).getDate(),
      });
    }
    this.selectedDate = this.dateList[0].Date;
  }

  getYear = () => {
    return new Date(Date.now() + (this.start + 4) * 86400000).getFullYear();
  };

  getMonth = () => {
    return new Date(Date.now() + (this.start + 4) * 86400000).toLocaleString(
      'default',
      {
        month: 'long',
      }
    );
  };

  visibleDates = () => {
    return this.dateList.slice(this.start, this.start + 8);
  };

  goLeft = () => {
    if (this.start - 4 > 0) {
      this.start -= 5;
    } else {
      this.start = 0;
    }
    this.disableFrontAndBack();
  };

  goRight = () => {
    if (this.start + 12 < 30) {
      this.start += 5;
    } else {
      this.start = 22;
    }
    this.disableFrontAndBack();
  };

  disableFrontAndBack = () => {
    this.disableBack = this.start == 0 ? true : false;
    this.disableFront = this.start == 22 ? true : false;
  };

  setSelectedDate = (date: number) => {
    this.selectedDate = date;
  };
}
