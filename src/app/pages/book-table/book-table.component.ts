import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { dayDate } from '../../interfaces/dayDate.interface';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css',
})
export class BookTableComponent implements OnInit {
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
    return new Date(Date.now() + 86400000).getFullYear();
  };

  getMonth = () => {
    return new Date(Date.now() + 86400000).toLocaleString('default', {
      month: 'long',
    });
  };

  visibleDates = () => {
    return this.dateList.slice(this.start, this.start + 8);
  };

  goLeft = () => {
    if (this.start > 0) {
      this.start -= 1;
    }
  };

  goRight = () => {
    if (this.start + 8 < 30) {
      this.start += 1;
    }
  };

  onScroll = (event: WheelEvent) => {
    if (event.deltaY > 0) {
      this.goRight();
    } else {
      this.goLeft();
    }
  };
}
