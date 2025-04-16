import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { time } from '../../../interfaces/time.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-picker.component.html',
  styleUrl: './time-picker.component.css',
})
export class TimePickerComponent implements OnInit, OnChanges {
  @Input() date: number = 0;
  @Output() displayedTime = new EventEmitter<number>();
  selectedTimeSlot: number = 0;
  nextHour: number = 0;

  ngOnInit(): void {
    this.nextHour = new Date().getHours() + 1;
    this.selectedTimeSlot = this.getNearestTimeSlot(this.nextHour);
    this.emitCurrentTime(this.selectedTimeSlot);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedTimeSlot = this.getNearestTimeSlot(this.nextHour);
    this.emitCurrentTime(this.selectedTimeSlot);
  }

  morningSlots: time[] = [
    { bookingTime: '9:00 - 10:00', hour: 9 },
    { bookingTime: '10:00 - 11:00', hour: 10 },
    { bookingTime: '11:00 - 12:00', hour: 11 },
  ];
  afternoonSlots: time[] = [
    { bookingTime: '12:00 - 1:00', hour: 12 },
    { bookingTime: '1:00 - 2:00', hour: 13 },
    { bookingTime: '2:00 - 3:00', hour: 14 },
    { bookingTime: '3:00 - 4:00', hour: 15 },
  ];
  eveningSlots: time[] = [
    { bookingTime: '6:00 - 7:00', hour: 18 },
    { bookingTime: '7:00 - 8:00', hour: 19 },
    { bookingTime: '8:00 - 9:00', hour: 20 },
    { bookingTime: '9:00 - 10:00', hour: 21 },
    { bookingTime: '10:00 - 11:00', hour: 22 },
    { bookingTime: '11:00 - 12:00', hour: 23 },
  ];

  selectTimeSlot = (time: number): void => {
    this.selectedTimeSlot = time;
    this.emitCurrentTime(this.selectedTimeSlot);
  };

  getNearestTimeSlot = (time: number): number => {
    if (!this.isCurrentDateSelectedDate()) {
      return 9;
    }
    if (time < 9) {
      return 9;
    } else if (time > 15 && time < 18) {
      return 18;
    } else {
      return time;
    }
  };

  isCurrentDateSelectedDate = (): boolean => {
    return this.date == new Date().getDate();
  };

  emitCurrentTime(time: number): void {
    this.displayedTime.emit(time);
  }
}
