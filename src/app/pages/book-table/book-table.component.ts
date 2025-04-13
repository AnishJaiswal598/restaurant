import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { dayDate } from '../../interfaces/dayDate.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css',
})
export class BookTableComponent implements OnInit {
  disableFront: boolean = false;
  disableBack: boolean = true;
  dateList: dayDate[] = [];
  start: number = 0;
  ngOnInit(): void {
    this.dateList.push({ dayType: 'Today', Date: new Date().getDate() });
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
}
